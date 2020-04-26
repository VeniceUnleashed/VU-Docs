const yaml = require('js-yaml');
const fs = require('fs');

const linkifyText = (text) => {
  // TODO
  return text;
};

const linkifyType = (typeName) => {
  // TODO
  return typeName;
};

const getMethodAnchor = (method, allMethods) => {
  // TODO
  return `#${method.name.toLowerCase()}`;
};

const linkifyMethod = (method, allMethods) => {
  // TODO
  return `**${method.name}**`;
};

const stringifyType = (typeInfo, bold) => {
  let typeString = '';

  if (bold) {
    typeString += `**`;
  }

  typeString += linkifyType(typeInfo.type);

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

const stringifyParams = (params) => {
  const paramStrings = [];

  if (params && Object.keys(params).length > 0) {
    for (const paramName in params) {
      const param = params[paramName];

      let paramString = ``;

      if (param.variadic) {
        paramString += `...`;
      }

      paramString += `${paramName}: `;
      paramString += stringifyType(param);

      paramStrings.push(paramString);
    }
  }

  return paramStrings.join(', ');
};

const generateClassDoc = (type) => {
  let doc = '';

  doc += `---\n`;
  doc += `title: ${type.name}\n`;
  doc += `---\n`;
  doc += `\n`;

  if (type.inherits) {
    doc += `Inherits from ${linkifyType(type.inherits)}.\n`
    doc += `\n`;
  }

  if (type.description && type.description.length > 0) {
    doc += `${linkifyText(type.description)}\n`;
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
      doc += `| **[${type.name}](#constructor-${constructorIndex++})**(${stringifyParams(constructor.params)}) |\n`;
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

      doc += stringifyType(property);
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
      doc += `| ${linkifyMethod(method, type.methods)}(${stringifyParams(method.params)}) | `;

      if (method.returns) {
        doc += stringifyType(method.returns);
      } else {
        doc += `void`;
      }

      doc += ` |\n`;
    }

    doc += `\n`;
  }

  // TODO: Overloaded operators.

  if (type.static && Object.keys(type.static).length > 0) {
    doc += `### Static members\n`;
    doc += `\n`;
    doc += `| Name | Type |\n`;
    doc += `| ---- | ---- |\n`;

    for (const propertyName in type.static) {
      const staticType = type.static[propertyName];
      doc += `| {{< static "${type.name}" "${propertyName}" >}} | ${stringifyType(staticType)} |\n`
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
      doc += `### ${type.name} {#constructor-${constructorIndex++}}\n`;
      doc += `\n`;
      doc += `> **${type.name}**(${stringifyParams(constructor.params)})\n`;
      doc += `\n`;

      if (constructor.description && constructor.description.length > 0) {
        doc += `${linkifyText(constructor.description)}\n`;
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
      doc += `> ${stringifyType(property, true)}\n`;
      doc += `\n`;

      if (property.description && property.description.length > 0) {
        doc += `${linkifyText(property.description)}\n`;
        doc += `\n`;
      }
    }
  }

  if (type.methods && type.methods.length > 0) {
    doc += `## Methods\n`;
    doc += `\n`;

    for (const method of type.methods) {
      doc += `### ${method.name} {${getMethodAnchor(method, type.methods)}}\n`;
      doc += `\n`;
      doc += `> **${method.name}**(${stringifyParams(method.params)})`;

      if (method.returns) {
        doc += `: ${stringifyType(method.returns)}`;
      }

      doc += `\n`;
      doc += `\n`;

      if (method.description && method.description.length > 0) {
        doc += `${linkifyText(method.description)}\n`;
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
            doc += `| ...**${paramName}** | ${stringifyType(param)} | `;
          } else {
            doc += `| **${paramName}** | ${stringifyType(param)} | `;
          }

          if (param.description && param.description.length > 0) {
            doc += linkifyText(param.description);
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

        doc += `| ${stringifyType(method.returns, true)} | `;

        if (method.returns.description && method.returns.description.length > 0) {
          doc += linkifyText(method.returns.description);
        }

        doc += ` |\n`;
        doc += `\n`;
      }
    }
  }

  if (type.static && Object.keys(type.static).length > 0) {
    doc += `## Static members\n`;
    doc += `\n`;

    for (const propertyName in type.static) {
      const staticType = type.static[propertyName];

      doc += `### {{% static-heading "${propertyName}" %}}\n`;

      doc += `\n`;
      doc += `> ${stringifyType(staticType, true)}\n`;
      doc += `\n`;

      if (staticType.description && staticType.description.length > 0) {
        doc += `${linkifyText(staticType.description)}\n`;
        doc += `\n`;
      }
    }
  }

  return doc;
};

const generateLibraryDoc = (type) => {
  let doc = '';

  doc += `---\n`;
  doc += `title: ${type.name}\n`;
  doc += `---\n`;
  doc += `\n`;

  if (type.description && type.description.length > 0) {
    doc += `${linkifyText(type.description)}\n`;
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
      doc += `| ${linkifyMethod(method, type.methods)}(${stringifyParams(method.params)}) | `;

      if (method.returns) {
        doc += stringifyType(method.returns);
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
      doc += `### ${method.name} {${getMethodAnchor(method, type.methods)}}\n`;
      doc += `\n`;
      doc += `> **${method.name}**(${stringifyParams(method.params)})`;

      if (method.returns) {
        doc += `: ${stringifyType(method.returns)}`;
      }

      doc += `\n`;
      doc += `\n`;

      if (method.description && method.description.length > 0) {
        doc += `${linkifyText(method.description)}\n`;
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
            doc += `| ...**${paramName}** | ${stringifyType(param)} | `;
          } else {
            doc += `| **${paramName}** | ${stringifyType(param)} | `;
          }

          if (param.description && param.description.length > 0) {
            doc += linkifyText(param.description);
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

        doc += `| ${stringifyType(method.returns, true)} | `;

        if (method.returns.description && method.returns.description.length > 0) {
          doc += linkifyText(method.returns.description);
        }

        doc += ` |\n`;
        doc += `\n`;
      }
    }
  }

  return doc;
};

const generateEnumDoc = (type) => {
  if (!type.values || Object.keys(type.values).length === 0) {
    throw new Error('Tried generating documentation for an enum with no values.');
  }

  let doc = '';

  doc += `---\n`;
  doc += `title: ${type.name}\n`;
  doc += `---\n`;
  doc += `\n`;

  if (type.description && type.description.length > 0) {
    doc += `${linkifyText(type.description)}\n`;
    doc += `\n`;
  }

  doc += `## Values\n`;
  doc += `\n`;

  doc += `| Name | Description |\n`;
  doc += `| ---- | ----------- |\n`;

  for (const valueName in type.values) {
    const valueInfo = type.values[valueName];

    doc += `| **${valueName}** | `;

    if (valueInfo.description && valueInfo.description.length > 0) {
      doc += `${linkifyText(valueInfo.description)}<br/>`;
    }

    doc += `Value: **${valueInfo.value}** |\n`;
  }

  doc += `\n`;
  return doc;
};

const generateDoc = (fileName) => {
  const fileData = fs.readFileSync(fileName, 'utf-8');
  const typeInfo = yaml.safeLoad(fileData);

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

console.log(generateDoc('./types/shared/type/ResourceCompartment.yaml'));