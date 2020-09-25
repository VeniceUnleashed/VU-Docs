const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const clientTypes = {};
const serverTypes = {};
const sharedTypes = {};
const clientEvents = {};
const serverEvents = {};
const sharedEvents = {};
const clientHooks = {};
const serverHooks = {};
const sharedHooks = {};
const clientLibraries = {};
const serverLibraries = {};
const sharedLibraries = {};
const frostbiteTypes = {};

const escapeText = (text) => {
  return text.replace(/\_/g, '\\_').replace(/\*/g, '\\*');
};

const linkifyType = (typeName, context) => {
  if (context === 'client' && typeName in clientTypes) {
    return `[${typeName}](/vext/ref/client/type/${typeName.toLowerCase()})`;
  } else if (context === 'client' && typeName in clientLibraries) {
    return `[${typeName}](/vext/ref/client/library/${typeName.toLowerCase()})`;
  } else if (context === 'server' && typeName in serverTypes) {
    return `[${typeName}](/vext/ref/server/type/${typeName.toLowerCase()})`;
  } else if (context === 'server' && typeName in serverLibraries) {
    return `[${typeName}](/vext/ref/server/library/${typeName.toLowerCase()})`;
  } else if (typeName in sharedTypes) {
    return `[${typeName}](/vext/ref/shared/type/${typeName.toLowerCase()})`;
  } else if (typeName in sharedLibraries) {
    return `[${typeName}](/vext/ref/shared/library/${typeName.toLowerCase()})`;
  } else if (typeName in frostbiteTypes) {
    return `[${typeName}](/vext/ref/fb/${typeName.toLowerCase()})`;
  }

  return escapeText(typeName);
};

const isPrimitive = (typeName) => {
  return typeName == 'string' ||
    typeName == 'float' ||
    typeName == 'int' ||
    typeName == 'bool' ||
    typeName == 'table' ||
    typeName == 'any' ||
    typeName == 'callable';
};

const linkifyText = (text, context) => {
  let lastWord = '';
  let finalText = '';
  let inQuote = false;

  for (let i = 0; i < text.length; ++i) {
    if (text[i] == '`') {
      inQuote = !inQuote;
      finalText += text[i]
    } else if (!inQuote && text[i].match(/[a-zA-Z0-9_]/)) {
      lastWord += text[i];
    } else {
      if (lastWord.length > 0) {
        finalText += linkifyType(lastWord, context);
        lastWord = '';
      }

      if (text[i] === '|' && !inQuote) {
        finalText += '\\|';
      } else {
        finalText += text[i];
      }
    }
  }

  return finalText;
};

const getMethodAnchor = (method, allMethods) => {
  let methodIndex = 0;

  for (const otherMethod of allMethods) {
    if (method === otherMethod) {
      break;
    }

    if (otherMethod.name === method.name) {
      ++methodIndex;
    }
  }

  if (methodIndex > 0) {
    return `#${method.name.toLowerCase()}-${methodIndex}`;
  }

  return `#${method.name.toLowerCase()}`;
};

const linkifyMethod = (method, allMethods) => {
  return `**[${escapeText(method.name)}](${getMethodAnchor(method, allMethods)})**`;
};

const stringifyType = (typeInfo, context, verifyType, bold) => {
  let typeString = '';

  if (typeInfo.nestedTable || typeInfo.nestedArray) {
    typeString += '(';
  }
  if (bold) {
    typeString += `**`;
  }

  const linkifiedType = linkifyType(typeInfo.type, context);

  if (verifyType && !isPrimitive(typeInfo.type) && linkifiedType === escapeText(typeInfo.type)) {
    console.log(`Could not find type '${typeInfo.type}' in '${context}' context.`);
  }

  typeString += linkifiedType;

  if (bold) {
    typeString += `**`;
  }

  if (typeInfo.nestedTable) {
    typeString += '{})';
  } else if (typeInfo.nestedArray) {
    typeString += '[])';
  }

  if (typeInfo.array) {
    typeString += `[]`;
  } else if (typeInfo.table) {
    typeString += `{}`;
  }

  if (typeInfo.nullable) {
    if (bold) {
      typeString += ` \\| **nil**`;
    } else {
      typeString += ` \\| nil`;
    }
  }

  return typeString;
};

const operatorToSymbol = (operator) => {
  switch (operator.type) {
    case 'add':
      return '+';

    case 'sub':
      return '-';

    case 'mult':
      return '\\*';

    case 'div':
      return '/';

    case 'mod':
      return '%';

    case 'eq':
      return '==';

    case 'lt':
      return '<';

    default:
      throw new Error(`Got unsupported operator "${operator.type}".`);
  }
};

const getOperatorAnchor = (operator, allOperators) => {
  let operatorIndex = 0;

  for (const otherOperator of allOperators) {
    if (operator === otherOperator) {
      break;
    }

    if (otherOperator.type === operator.type) {
      ++operatorIndex;
    }
  }

  if (operatorIndex > 0) {
    return `#op-${operator.type}-${operatorIndex}`;
  }

  return `#op-${operator.type}`;
};

const linkifyOperator = (operator, allOperators) => {
  return `**[${operatorToSymbol(operator)}](${getOperatorAnchor(operator, allOperators)})**`;
};

const stringifyParams = (params, context) => {
  const paramStrings = [];

  if (params && Object.keys(params).length > 0) {
    for (const paramName in params) {
      const param = params[paramName];

      let paramString = ``;

      if (param.variadic) {
        paramString += `...`;
      }

      paramString += `${paramName}: `;
      paramString += stringifyType(param, context, true);

      if ('default' in param) {
        paramString += ` = ${param.default}`;
      }

      paramStrings.push(paramString);
    }
  }

  return paramStrings.join(', ');
};

const writeParams = (depth, params, context) => {
  let doc = '';

  if (params && Object.keys(params).length > 0) {
    doc += `${depth} Parameters\n`;
    doc += `\n`;
    doc += `| Name | Type | Description |\n`;
    doc += `| ---- | ---- | ----------- |\n`;

    for (const paramName in params) {
      const param = params[paramName];

      let readOnly = '';

      // This is only for hooks.
      if (param.readOnly) {
        readOnly = '{{< hook-ro >}}';
      }

      if (param.variadic) {
        doc += `| ...**${escapeText(paramName)}**${readOnly} | ${stringifyType(param, context, true)} | `;
      } else {
        doc += `| **${escapeText(paramName)}**${readOnly} | ${stringifyType(param, context, true)} | `;
      }

      if (param.description && param.description.length > 0) {
        doc += linkifyText(param.description, context);
      }

      doc += ` |\n`;
    }

    doc += `\n`;
  }

  return doc;
};

const writeReturns = (depth, returns, context) => {
  let doc = '';

  if (returns) {
    doc += `${depth} Returns\n`;
    doc += `\n`;
    doc += `| Type | Description |\n`;
    doc += `| ---- | ----------- |\n`;

    if (Array.isArray(returns)) {
      for (const tupleValue of returns) {
        doc += `| ${stringifyType(tupleValue, context, true, true)} | `;

        if (tupleValue.description && tupleValue.description.length > 0) {
          doc += linkifyText(tupleValue.description, context);
        }

        doc += ` |\n`;
      }
    } else {
      doc += `| ${stringifyType(returns, context, true, true)} | `;

      if (returns.description && returns.description.length > 0) {
        doc += linkifyText(returns.description, context);
      }

      doc += ` |\n`;
    }

    doc += `\n`;
  }

  return doc;
};

const generateClassDoc = (type, context) => {
  let doc = '';

  doc += `---\n`;
  doc += `title: ${type.name}\n`;
  doc += `---\n`;
  doc += `\n`;

  if (type.inherits) {
    doc += `Inherits from ${linkifyType(type.inherits, context)}\n`
    doc += `\n`;
  }

  if (type.description && type.description.length > 0) {
    doc += `${linkifyText(type.description, context)}\n`;
    doc += `\n`;
  }

  doc += `## Summary\n`;
  doc += `\n`;

  if (type.constructors && type.constructors.length > 0) {
    doc += `### Constructors\n`;
    doc += `\n`;
    doc += `|  |\n`;
    doc += `| --- |\n`;

    let constructorIndex = 0;

    for (let constructor of type.constructors) {
      constructor = constructor || {};
      doc += `| **[${escapeText(type.name)}](#constructor-${constructorIndex++})**(${stringifyParams(constructor.params, context)}) |\n`;
    }

    doc += `\n`;
  }

  if (type.properties && Object.keys(type.properties).length > 0) {
    doc += `### Properties\n`;
    doc += `\n`;
    doc += `| Name | Type |\n`;
    doc += `| ---- | ---- |\n`;

    for (const propertyName in type.properties) {
      const property = type.properties[propertyName];

      if (property.readOnly) {
        doc += `| {{< prop "${propertyName}" true >}} | `;
      } else {
        doc += `| {{< prop "${propertyName}" >}} | `;
      }

      doc += stringifyType(property, context, true);
      doc += ` |\n`;
    }

    doc += `\n`;
  }

  if (type.methods && type.methods.length > 0) {
    doc += `### Methods\n`;
    doc += `\n`;
    doc += `| Method | Returns |\n`;
    doc += `| ------ | ------- |\n`;

    for (const method of type.methods) {
      doc += `| ${linkifyMethod(method, type.methods)}(${stringifyParams(method.params, context)}) | `;

      if (Array.isArray(method.returns)) {
        doc += `(${method.returns.map((t) => stringifyType(t, context, true)).join(', ')})`;
      } else if (method.returns) {
        doc += stringifyType(method.returns, context, true);
      } else {
        doc += `void`;
      }

      doc += ` |\n`;
    }

    doc += `\n`;
  }

  if (type.operators && type.operators.length > 0) {
    doc += `### Operators\n`;
    doc += `\n`;
    doc += `| Operator | Rhs | Returns |\n`;
    doc += `| -------- | --- | ------- |\n`;

    for (const operator of type.operators) {
      doc += `| ${linkifyOperator(operator, type.operators)} | ${linkifyType(operator.rhs, context)} | ${linkifyType(operator.returns, context)} |\n`;
    }

    doc += `\n`;
  }

  if (type.static && Object.keys(type.static).length > 0) {
    doc += `### Static members\n`;
    doc += `\n`;
    doc += `| Name | Type |\n`;
    doc += `| ---- | ---- |\n`;

    for (const propertyName in type.static) {
      const staticType = type.static[propertyName];
      doc += `| {{< static "${type.name}" "${propertyName}" >}} | ${stringifyType(staticType, context, true)} |\n`
    }

    doc += `\n`;
  }

  // Write details.

  if (type.constructors && type.constructors.length > 0) {
    doc += `## Constructors\n`;
    doc += `\n`;

    let constructorIndex = 0;

    for (let constructor of type.constructors) {
      constructor = constructor || {};
      doc += `### ${escapeText(type.name)} {#constructor-${constructorIndex++}}\n`;
      doc += `\n`;
      doc += `> **${escapeText(type.name)}**(${stringifyParams(constructor.params, context)})\n`;
      doc += `\n`;

      if (constructor.description && constructor.description.length > 0) {
        doc += `${linkifyText(constructor.description, context)}\n`;
        doc += `\n`;
      }

      doc += writeParams('####', constructor.params, context);
    }
  }

  if (type.properties && Object.keys(type.properties).length > 0) {
    doc += `## Properties\n`;
    doc += `\n`;

    for (const propertyName in type.properties) {
      const property = type.properties[propertyName];

      if (property.readOnly) {
        doc += `### {{% prop-heading "${propertyName}" true %}}\n`;
      } else {
        doc += `### {{% prop-heading "${propertyName}" %}}\n`;
      }

      doc += `\n`;
      doc += `> ${stringifyType(property, context, true, true)}\n`;
      doc += `\n`;

      if (property.description && property.description.length > 0) {
        doc += `${linkifyText(property.description, context)}\n`;
        doc += `\n`;
      }
    }
  }

  if (type.methods && type.methods.length > 0) {
    doc += `## Methods\n`;
    doc += `\n`;

    for (const method of type.methods) {
      doc += `### ${escapeText(method.name)} {${getMethodAnchor(method, type.methods)}}\n`;
      doc += `\n`;
      doc += `> **${escapeText(method.name)}**(${stringifyParams(method.params, context)})`;

      if (Array.isArray(method.returns)) {
        doc += `: (${method.returns.map((t) => stringifyType(t, context, true)).join(', ')})`;
      } else if (method.returns) {
        doc += `: ${stringifyType(method.returns, context, true)}`;
      }

      doc += `\n`;
      doc += `\n`;

      if (method.description && method.description.length > 0) {
        doc += `${linkifyText(method.description, context)}\n`;
        doc += `\n`;
      }

      doc += writeParams('####', method.params, context);
      doc += writeReturns('####', method.returns, context);

      if (method.example && method.example.length > 0) {
        doc += `#### Example\n`;
        doc += `\n`;
        doc += '```lua\n';
        doc += method.example;
        doc += '```\n';
        doc += `\n`;
      }
    }
  }

  if (type.operators && type.operators.length > 0) {
    doc += `## Operators\n`;
    doc += `\n`;

    for (const operator of type.operators) {
      doc += `### operator${operatorToSymbol(operator)} {${getOperatorAnchor(operator, type.operators)}}\n`;
      doc += `\n`;
      doc += `> operator${operatorToSymbol(operator)}(rhs: ${linkifyType(operator.rhs, context)}): ${linkifyType(operator.returns, context)}\n`;
      doc += `\n`;

      if (operator.description && operator.description.length > 0) {
        doc += `${linkifyText(operator.description, context)}\n`;
        doc += `\n`;
      }

      doc += `#### Parameters\n`;
      doc += `\n`;
      doc += `| Name | Type | Description |\n`;
      doc += `| ---- | ---- | ----------- |\n`;
      doc += `| **rhs** | ${linkifyType(operator.rhs, context)} | `;

      if (operator.rhsDescription && operator.rhsDescription.length > 0) {
        doc += linkifyText(operator.rhsDescription, context);
      }

      doc += ` |\n`;

      doc += `#### Returns\n`;
      doc += `\n`;
      doc += `| Type | Description |\n`;
      doc += `| ---- | ----------- |\n`;
      doc += `| **${linkifyType(operator.returns, context)}** | `;

      if (operator.returnsDescription && operator.returnsDescription.length > 0) {
        doc += linkifyText(operator.returnsDescription, context);
      }

      doc += ` |\n`;

      doc += `\n`;
    }
  }

  if (type.static && Object.keys(type.static).length > 0) {
    doc += `## Static members\n`;
    doc += `\n`;

    for (const propertyName in type.static) {
      const staticType = type.static[propertyName];

      doc += `### {{% static-heading "${propertyName}" %}}\n`;

      doc += `\n`;
      doc += `> ${stringifyType(staticType, context, true, true)}\n`;
      doc += `\n`;

      if (staticType.description && staticType.description.length > 0) {
        doc += `${linkifyText(staticType.description, context)}\n`;
        doc += `\n`;
      }
    }
  }

  return doc;
};

const generateLibraryDoc = (type, context) => {
  let doc = '';

  doc += `---\n`;
  doc += `title: ${type.name}\n`;
  doc += `---\n`;
  doc += `\n`;

  if (type.description && type.description.length > 0) {
    doc += `${linkifyText(type.description, context)}\n`;
    doc += `\n`;
  }

  doc += `## Summary\n`;
  doc += `\n`;

  if (type.methods && type.methods.length > 0) {
    doc += `### Methods\n`;
    doc += `\n`;
    doc += `| Method | Returns |\n`;
    doc += `| ------ | ------- |\n`;

    for (const method of type.methods) {
      doc += `| ${linkifyMethod(method, type.methods)}(${stringifyParams(method.params, context)}) | `;

      if (Array.isArray(method.returns)) {
        doc += `(${method.returns.map((t) => stringifyType(t, context, true)).join(', ')})`;
      } else if (method.returns) {
        doc += stringifyType(method.returns, context, true);
      } else {
        doc += `void`;
      }

      doc += ` |\n`;
    }

    doc += `\n`;
  }

  if (type.methods && type.methods.length > 0) {
    doc += `## Methods\n`;
    doc += `\n`;

    for (const method of type.methods) {
      doc += `### ${escapeText(method.name)} {${getMethodAnchor(method, type.methods)}}\n`;
      doc += `\n`;
      doc += `> **${escapeText(method.name)}**(${stringifyParams(method.params, context)})`;

      if (Array.isArray(method.returns)) {
        doc += `: (${method.returns.map((t) => stringifyType(t, context, true)).join(', ')})`;
      } else if (method.returns) {
        doc += `: ${stringifyType(method.returns, context, true)}`;
      }

      doc += `\n`;
      doc += `\n`;

      if (method.description && method.description.length > 0) {
        doc += `${linkifyText(method.description, context)}\n`;
        doc += `\n`;
      }

      doc += writeParams('####', method.params, context);
      doc += writeReturns('####', method.returns, context);

      if (method.example && method.example.length > 0) {
        doc += `#### Example\n`;
        doc += `\n`;
        doc += '```lua\n';
        doc += method.example;
        doc += '```\n';
        doc += `\n`;
      }
    }
  }

  return doc;
};

const stringifyParamNames = (params) => {
  if (!params) {
    return '';
  }

  return Object.keys(params).join(', ');
};

const generateEventDoc = (type, context) => {
  let doc = '';

  doc += `---\n`;
  doc += `title: ${type.name}\n`;
  doc += `---\n`;
  doc += `\n`;

  doc += `> **${type.name}**(${stringifyParams(type.params, context)})\n`;
  doc += `\n`;

  if (type.description && type.description.length > 0) {
    doc += `${linkifyText(type.description, context)}\n`;
    doc += `\n`;
  }

  doc += writeParams('##', type.params, context);

  doc += `## Example\n`;
  doc += `\n`;
  doc += '```lua\n';
  doc += `Events:Subscribe('${type.name}', function(${stringifyParamNames(type.params)})\n`;
  doc += `    -- Do stuff here.\n`;
  doc += `end)\n`;
  doc += '```\n';

  return doc;
};

const stringifyHookParamNames = (params) => {
  if (!params) {
    return 'hook';
  }

  return 'hook, ' + Object.keys(params).join(', ');
};

const generateHookDoc = (type, context) => {
  let doc = '';

  doc += `---\n`;
  doc += `title: ${type.name}\n`;
  doc += `---\n`;
  doc += `\n`;

  doc += `> **${type.name}**(${stringifyParams(type.params, context)})`;

  if (type.returns && Object.keys(type.returns).length > 0) {
    doc += `: ${stringifyType(type.returns, context, true)}`
  }

  doc += `\n`;
  doc += `\n`;

  if (type.description && type.description.length > 0) {
    doc += `${linkifyText(type.description, context)}\n`;
    doc += `\n`;
  }

  doc += writeParams('##', type.params, context);
  doc += writeReturns('##', type.returns, context);

  doc += `## Example\n`;
  doc += `\n`;
  doc += '```lua\n';
  doc += `Hooks:Install('${type.name}', 1, function(${stringifyHookParamNames(type.params)})\n`;
  doc += `    -- Do stuff here.\n`;
  doc += `end)\n`;
  doc += '```\n';

  return doc;
};

const generateEnumDoc = (type, context) => {
  if (!type.values || Object.keys(type.values).length === 0) {
    throw new Error('Tried generating documentation for an enum with no values.');
  }

  let doc = '';

  doc += `---\n`;
  doc += `title: ${type.name}\n`;
  doc += `---\n`;
  doc += `\n`;

  if (type.description && type.description.length > 0) {
    doc += `${linkifyText(type.description, context)}\n`;
    doc += `\n`;
  }

  doc += `## Values\n`;
  doc += `\n`;

  doc += `| Name | Description |\n`;
  doc += `| ---- | ----------- |\n`;

  for (const valueName in type.values) {
    const valueInfo = type.values[valueName];

    doc += `| **${escapeText(valueName)}** | `;

    if (valueInfo.description && valueInfo.description.length > 0) {
      doc += `${linkifyText(valueInfo.description, context)}<br/>`;
    }

    doc += `Value: **${valueInfo.value}** |\n`;
  }

  doc += `\n`;
  return doc;
};

const generateDoc = (typeInfo, context) => {
  if (typeInfo.type === 'class') {
    return generateClassDoc(typeInfo, context);
  } else if (typeInfo.type === 'library') {
    return generateLibraryDoc(typeInfo, context);
  } else if (typeInfo.type === 'enum') {
    return generateEnumDoc(typeInfo, context);
  } else if (typeInfo.type === 'event') {
    return generateEventDoc(typeInfo, context);
  } else if (typeInfo.type === 'hook') {
    return generateHookDoc(typeInfo, context);
  } else {
    throw new Error(`Tried generating documentation for unrecognized type "${type.type}".`);
  }
}

const parseTypesInDir = (dir, target) => {
  const files = fs.readdirSync(path.join(__dirname, dir), { withFileTypes: true });

  for (const file of files) {
    if (!file.isFile()) {
      continue;
    }

    if (!file.name.endsWith('.yaml')) {
      continue;
    }

    const fileData = fs.readFileSync(path.join(__dirname, dir, file.name), 'utf-8');
    const typeInfo = yaml.safeLoad(fileData);

    target[typeInfo.name] = typeInfo;
  }
};

const splitInChunks = (array, chunkSize) => {
  const chunks = [];
  const processedArray = [...array];

  while (processedArray.length > 0) {
    chunks.push(processedArray.splice(0, chunkSize));
  }

  return chunks;
};

const generateIndexForTypes = (types, typesPath, title) => {
  let doc = `---\n`;
  doc += `title: ${title}\n`;
  doc += `hideChildren: true\n`;
  doc += `---\n`;
  doc += `\n`;
  doc += ``;

  // Collect class, enum, and library types.
  const classes = [];
  const enums = [];
  const libraries = [];
  const hooks = [];
  const events = [];

  for (const typeName in types) {
    const typeInfo = types[typeName];

    if (typeInfo.type === 'class') {
      classes.push(typeName);
    } else if (typeInfo.type === 'enum') {
      enums.push(typeName);
    } else if (typeInfo.type === 'library') {
      libraries.push(typeName);
    } else if (typeInfo.type === 'hook') {
      hooks.push(typeName);
    } else if (typeInfo.type === 'event') {
      events.push(typeName);
    }
  }

  classes.sort();
  enums.sort();
  libraries.sort();
  hooks.sort();
  events.sort();

  if (events.length > 0) {
    const chunks = splitInChunks(events, 2);

    doc += `|   |   |\n`;
    doc += `| --- | --- |\n`;

    for (const chunk of chunks) {
      doc += `| [${chunk[0]}](/vext/ref/${typesPath}/${chunk[0].toLowerCase().replace(/\:/g, '_')}) | `;

      if (chunk.length === 1) {
        doc += `|\n`;
      } else {
        doc += `[${chunk[1]}](/vext/ref/${typesPath}/${chunk[1].toLowerCase().replace(/\:/g, '_')}) |\n`;
      }
    }

    doc += `\n`;
  }

  if (hooks.length > 0) {
    const chunks = splitInChunks(hooks, 2);

    doc += `|   |   |\n`;
    doc += `| --- | --- |\n`;

    for (const chunk of chunks) {
      doc += `| [${chunk[0]}](/vext/ref/${typesPath}/${chunk[0].toLowerCase().replace(/\:/g, '_')}) | `;

      if (chunk.length === 1) {
        doc += `|\n`;
      } else {
        doc += `[${chunk[1]}](/vext/ref/${typesPath}/${chunk[1].toLowerCase().replace(/\:/g, '_')}) |\n`;
      }
    }

    doc += `\n`;
  }

  if (libraries.length > 0) {
    doc += `---\n`;

    for (const library of libraries) {
      doc += `\n`;
      doc += `**[${library}](/vext/ref/${typesPath}/${library.toLowerCase()})**\n`;
      doc += `\n`
      doc += `---\n`
    }
  }

  if (classes.length > 0) {
    const chunks = splitInChunks(classes, 2);

    doc += `|   |   |\n`;
    doc += `| --- | --- |\n`;

    for (const chunk of chunks) {
      doc += `| [${chunk[0]}](/vext/ref/${typesPath}/${chunk[0].toLowerCase()}) | `;

      if (chunk.length === 1) {
        doc += `|\n`;
      } else {
        doc += `[${chunk[1]}](/vext/ref/${typesPath}/${chunk[1].toLowerCase()}) |\n`;
      }
    }

    doc += `\n`;
  }

  if (enums.length > 0) {
    const chunks = splitInChunks(enums, 2);

    doc += `## Enums\n`;
    doc += `\n`;
    doc += `|   |   |\n`;
    doc += `| --- | --- |\n`;

    for (const chunk of chunks) {
      doc += `| [${chunk[0]}](/vext/ref/${typesPath}/${chunk[0].toLowerCase()}) | `;

      if (chunk.length === 1) {
        doc += `|\n`;
      } else {
        doc += `[${chunk[1]}](/vext/ref/${typesPath}/${chunk[1].toLowerCase()}) |\n`;
      }
    }

    doc += `\n`;
  }

  return doc;
};

const generateDocForTypes = (types, title, typesPath, context) => {
  const targetDir = path.join(__dirname, '../content/vext/ref', typesPath);

  for (const typeName in types) {
    const typeInfo = types[typeName];
    const doc = generateDoc(typeInfo, context);
    const outPath = path.join(targetDir, typeName.toLowerCase().replace(/\:/g, '_') + '.md');

    fs.writeFileSync(outPath, doc);
  }

  if (title === null) {
    return;
  }

  const index = generateIndexForTypes(types, typesPath, title);
  fs.writeFileSync(path.join(targetDir, '_index.md'), index);
};

// Parse all types.
parseTypesInDir('client/type', clientTypes);
parseTypesInDir('server/type', serverTypes);
parseTypesInDir('shared/type', sharedTypes);
parseTypesInDir('client/event', clientEvents);
parseTypesInDir('server/event', serverEvents);
parseTypesInDir('shared/event', sharedEvents);
parseTypesInDir('client/hook', clientHooks);
parseTypesInDir('server/hook', serverHooks);
parseTypesInDir('shared/hook', sharedHooks);
parseTypesInDir('client/library', clientLibraries);
parseTypesInDir('server/library', serverLibraries);
parseTypesInDir('shared/library', sharedLibraries);
parseTypesInDir('fb', frostbiteTypes);

// Generate documentation for all types.
generateDocForTypes(clientTypes, 'Types', 'client/type', 'client');
generateDocForTypes(serverTypes, 'Types', 'server/type', 'server');
generateDocForTypes(sharedTypes, 'Types', 'shared/type', 'shared');
generateDocForTypes(clientEvents, 'Events', 'client/event', 'client');
generateDocForTypes(serverEvents, 'Events', 'server/event', 'server');
generateDocForTypes(sharedEvents, 'Events', 'shared/event', 'shared');
generateDocForTypes(clientHooks, 'Hooks', 'client/hook', 'client');
generateDocForTypes(serverHooks, 'Hooks', 'server/hook', 'server');
generateDocForTypes(sharedHooks, 'Hooks', 'shared/hook', 'shared');
generateDocForTypes(clientLibraries, 'Libraries', 'client/library', 'client');
generateDocForTypes(serverLibraries, 'Libraries', 'server/library', 'server');
generateDocForTypes(sharedLibraries, 'Libraries', 'shared/library', 'shared');
generateDocForTypes(frostbiteTypes, null, 'fb', 'fb');