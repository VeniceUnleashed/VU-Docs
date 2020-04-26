const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const clientTypes = {};
const serverTypes = {};
const sharedTypes = {};
const frostbiteTypes = {};
const clientLibraries = {};
const serverLibraries = {};
const sharedLibraries = {};

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

      if (text[i] === '_') {
        finalText += '\\_';
      } else if (text[i] === '*') {
        finalText += '\\*';
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

const stringifyType = (typeInfo, context, bold) => {
  let typeString = '';

  if (bold) {
    typeString += `**`;
  }

  typeString += linkifyType(typeInfo.type, context);

  if (bold) {
    typeString += `**`;
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
      paramString += stringifyType(param, context);

      if (param.default) {
        paramString += ` = ${param.default}`;
      }

      paramStrings.push(paramString);
    }
  }

  return paramStrings.join(', ');
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

      doc += stringifyType(property, context);
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
        doc += `(${method.returns.map((t) => stringifyType(t, context)).join(', ')})`;
      } else if (method.returns) {
        doc += stringifyType(method.returns, context);
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
      doc += `| {{< static "${type.name}" "${propertyName}" >}} | ${stringifyType(staticType, context)} |\n`
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

      if (constructor.params && Object.keys(constructor.params).length > 0) {
        doc += `#### Parameters\n`;
        doc += `\n`;
        doc += `| Name | Type | Description |\n`;
        doc += `| ---- | ---- | ----------- |\n`;

        for (const paramName in constructor.params) {
          const param = constructor.params[paramName];

          if (param.variadic) {
            doc += `| ...**${escapeText(paramName)}** | ${stringifyType(param, context)} | `;
          } else {
            doc += `| **${escapeText(paramName)}** | ${stringifyType(param, context)} | `;
          }

          if (param.description && param.description.length > 0) {
            doc += linkifyText(param.description, context);
          }

          doc += ` |\n`;
        }

        doc += `\n`;
      }

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
      doc += `> ${stringifyType(property, context, true)}\n`;
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
        doc += `: (${method.returns.map((t) => stringifyType(t, context)).join(', ')})`;
      } else if (method.returns) {
        doc += `: ${stringifyType(method.returns, context)}`;
      }

      doc += `\n`;
      doc += `\n`;

      if (method.description && method.description.length > 0) {
        doc += `${linkifyText(method.description, context)}\n`;
        doc += `\n`;
      }

      if (method.params && Object.keys(method.params).length > 0) {
        doc += `#### Parameters\n`;
        doc += `\n`;
        doc += `| Name | Type | Description |\n`;
        doc += `| ---- | ---- | ----------- |\n`;

        for (const paramName in method.params) {
          const param = method.params[paramName];

          if (param.variadic) {
            doc += `| ...**${escapeText(paramName)}** | ${stringifyType(param, context)} | `;
          } else {
            doc += `| **${escapeText(paramName)}** | ${stringifyType(param, context)} | `;
          }

          if (param.description && param.description.length > 0) {
            doc += linkifyText(param.description, context);
          }

          doc += ` |\n`;
        }

        doc += `\n`;
      }

      if (method.returns) {
        doc += `#### Returns\n`;
        doc += `\n`;
        doc += `| Type | Description |\n`;
        doc += `| ---- | ----------- |\n`;

        if (Array.isArray(method.returns)) {
          for (const tupleValue of method.returns) {
            doc += `| ${stringifyType(tupleValue, context, true)} | `;

            if (tupleValue.description && tupleValue.description.length > 0) {
              doc += linkifyText(tupleValue.description, context);
            }

            doc += ` |\n`;
          }
        } else {
          doc += `| ${stringifyType(method.returns, context, true)} | `;

          if (method.returns.description && method.returns.description.length > 0) {
            doc += linkifyText(method.returns.description, context);
          }

          doc += ` |\n`;
        }

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
      doc += `> ${stringifyType(staticType, context, true)}\n`;
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
        doc += `(${method.returns.map((t) => stringifyType(t, context)).join(', ')})`;
      } else if (method.returns) {
        doc += stringifyType(method.returns, context);
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
        doc += `: (${method.returns.map((t) => stringifyType(t, context)).join(', ')})`;
      } else if (method.returns) {
        doc += `: ${stringifyType(method.returns, context)}`;
      }

      doc += `\n`;
      doc += `\n`;

      if (method.description && method.description.length > 0) {
        doc += `${linkifyText(method.description, context)}\n`;
        doc += `\n`;
      }

      if (method.params && Object.keys(method.params).length > 0) {
        doc += `#### Parameters\n`;
        doc += `\n`;
        doc += `| Name | Type | Description |\n`;
        doc += `| ---- | ---- | ----------- |\n`;

        for (const paramName in method.params) {
          const param = method.params[paramName];

          if (param.variadic) {
            doc += `| ...**${escapeText(paramName)}** | ${stringifyType(param, context)} | `;
          } else {
            doc += `| **${escapeText(paramName)}** | ${stringifyType(param, context)} | `;
          }

          if (param.description && param.description.length > 0) {
            doc += linkifyText(param.description, context);
          }

          doc += ` |\n`;
        }

        doc += `\n`;
      }

      if (method.returns) {
        doc += `#### Returns\n`;
        doc += `\n`;
        doc += `| Type | Description |\n`;
        doc += `| ---- | ----------- |\n`;

        if (Array.isArray(method.returns)) {
          for (const tupleValue of method.returns) {
            doc += `| ${stringifyType(tupleValue, context, true)} | `;

            if (tupleValue.description && tupleValue.description.length > 0) {
              doc += linkifyText(tupleValue.description, context);
            }

            doc += ` |\n`;
          }
        } else {
          doc += `| ${stringifyType(method.returns, context, true)} | `;

          if (method.returns.description && method.returns.description.length > 0) {
            doc += linkifyText(method.returns.description, context);
          }

          doc += ` |\n`;
        }

        doc += `\n`;
      }
    }
  }

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

const generateDoc = (typeInfo) => {
  if (typeInfo.type === 'class') {
    return generateClassDoc(typeInfo);
  } else if (typeInfo.type === 'library') {
    return generateLibraryDoc(typeInfo);
  } else if (typeInfo.type === 'enum') {
    return generateEnumDoc(typeInfo);
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

  for (const typeName in types) {
    const typeInfo = types[typeName];

    if (typeInfo.type === 'class') {
      classes.push(typeName);
    } else if (typeInfo.type === 'enum') {
      enums.push(typeName);
    } else if (typeInfo.type === 'library') {
      libraries.push(typeName);
    }
  }

  classes.sort();
  enums.sort();
  libraries.sort();

  if (libraries.length > 0) {
    const chunks = splitInChunks(libraries, 2);

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

const generateDocForTypes = (types, title, typesPath) => {
  const targetDir = path.join(__dirname, '../content/vext/ref', typesPath);

  for (const typeName in types) {
    const typeInfo = types[typeName];
    const doc = generateDoc(typeInfo);
    const outPath = path.join(targetDir, typeName.toLowerCase() + '.md');

    console.log(`Writing generated documentation to "${outPath}".`);

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
parseTypesInDir('client/library', clientLibraries);
parseTypesInDir('server/library', serverLibraries);
parseTypesInDir('shared/library', sharedLibraries);
parseTypesInDir('fb', frostbiteTypes);

// Generate documentation for all types.
generateDocForTypes(clientTypes, 'Types', 'client/type');
generateDocForTypes(serverTypes, 'Types', 'server/type');
generateDocForTypes(sharedTypes, 'Types', 'shared/type');
generateDocForTypes(clientLibraries, 'Libraries', 'client/library');
generateDocForTypes(serverLibraries, 'Libraries', 'server/library');
generateDocForTypes(sharedLibraries, 'Libraries', 'shared/library');
generateDocForTypes(frostbiteTypes, null, 'fb');