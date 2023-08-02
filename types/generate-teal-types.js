const fs = require('fs');
const yaml = require('js-yaml');

function mapTealType(type) {
  const trimmedType = type.trim();

  switch (trimmedType) {
    case 'int':
      return 'integer';
    case 'float':
      return 'number';
    case 'bool':
      return 'boolean';
    case 'callable':
      return 'function';
    default:
      return trimmedType;
  }
}

function generateLibraryDefinition(data) {
  const tealCode = [];

  tealCode.push(`global record ${data.name}`);

  if (data.methods) {
    for (const method of data.methods) {
      const params = generateParams(method.params);
      const paramSeparator = params ? ', ' : '';
      const returns = generateReturnType(method.returns, true);

      tealCode.push(`\t${method.name}: function(${data.name}${paramSeparator}${params})${returns}`);
    }
  }

  tealCode.push(`end`);

  return tealCode.join('\n');
}

function generateClassDefinition(data) {
  const tealCode = [];

  tealCode.push(`global record ${data.name}`);

  if (data.constructors) {
    for (const constructor of data.constructors) {
      const params = constructor?.params ? generateParams(constructor.params) : '';
      tealCode.push(`\tmetamethod __call: function(${params}): ${data.name}`);
    }
  }

  const staticProperties = [];

  if (data.static) {
    for (const staticPropertyName in data.static) {
      staticProperties.push(staticPropertyName);
    }
  }

  const properties = [];

  if (data.properties) {
    for (const propertyName in data.properties) {
      const property = data.properties[propertyName];
      const propertyType = generateReturnType(property, true);
      const readOnly = property.readOnly ? ' --[[ Read-only ]]--' : '';
      const static = staticProperties.includes(propertyName) ? ' --[[ Static ]]--' : '';

      tealCode.push(`\t${propertyName}${propertyType}${readOnly}${static}`);
      properties.push(propertyName);
    }
  }

  if (data.methods) {
    for (const method of data.methods) {
      const params = generateParams(method.params);
      const paramSeparator = params ? ', ' : '';
      const returns = generateReturnType(method.returns, true);

      tealCode.push(`\t${method.name}: function(${data.name}${paramSeparator}${params})${returns}`);
    }
  }

  if (data.operators) {
    for (const operator of data.operators) {
      const rhs = mapTealType(operator.rhs);
      const returns = generateReturnType(operator.returns, true);

      let name = operator.type;

      if (name === 'mult') {
        name = 'mul';
      }

      tealCode.push(`\tmetamethod __${name}: function(rhs: ${rhs})${returns}`);
    }
  }

  if (data.static) {
    for (const staticPropertyName in data.static) {
      if (properties.includes(staticPropertyName)) {
        continue;
      }

      const staticProperty = data.static[staticPropertyName];
      const staticPropertyType = generateReturnType(staticProperty, true);

      tealCode.push(`\t${staticPropertyName}${staticPropertyType} --[[ Static ]]--`);
    }
  }

  tealCode.push(`end`);

  return tealCode.join('\n');
}

function generateEnumDefinition(data) {
  const tealCode = [];

  tealCode.push(`global ${data.name} = {`);

  if (data.values) {
    for (const valueName in data.values) {
      const value = data.values[valueName].value;
      tealCode.push(`\t${valueName} = ${value},`);
    }
  }

  tealCode.push(`}`);

  return tealCode.join('\n');
}

function generateParams(params) {
  if (!params) {
    return '';
  }

  const paramList = [];

  for (const paramName in params) {
    const paramType = mapTealType(params[paramName].type);
    paramList.push(`${paramName}: ${paramType}`);
  }

  return paramList.join(', ');
}

function generateReturnType(returns, withColon) {
  if (!returns) {
    return '';
  }

  if (Array.isArray(returns)) {
    const returnTypes = returns.map(returns => generateReturnType(returns, false));

    if (withColon) {
      return `: (${returnTypes.join(', ')})`;
    } else {
      return `(${returnTypes.join(', ')})`;
    }
  }

  const type = typeof returns === 'string' ? returns : returns.type;
  const returnTypes = type.split('|').map(type => mapTealType(type));

  if (returns.nullable) {
    returnTypes.push('nil');
  }

  if (withColon) {
    return `: ${returnTypes.join(' | ')}`;
  }

  return `${returnTypes.join(' | ')}`;
}

function generateLibraryDefinitions(files) {
  const tealCode = [];

  for (const file of files) {
    const yamlContent = fs.readFileSync(file, 'utf8');
    const data = yaml.safeLoad(yamlContent);

    tealCode.push(generateLibraryDefinition(data));
  }

  return tealCode.join('\n\n');
}

function generateTypeDefinitions(files) {
  const tealCode = [];

  for (const file of files) {
    const yamlContent = fs.readFileSync(file, 'utf8');
    const data = yaml.safeLoad(yamlContent);

    if (data.type === 'class') {
      tealCode.push(generateClassDefinition(data));
    } else if (data.type === 'enum') {
      tealCode.push(generateEnumDefinition(data));
    } else {
      throw new Error(`Unknown type: ${data.type}`);
    }
  }

  return tealCode.join('\n\n');
}

// Collect all library yaml files from:
// __dirname/client/library/*.yaml
// __dirname/server/library/*.yaml
// __dirname/shared/library/*.yaml
const libraryYamlFilesClient = fs.readdirSync(__dirname + '/client/library').map(file => __dirname + '/client/library/' + file);
const libraryYamlFilesServer = fs.readdirSync(__dirname + '/server/library').map(file => __dirname + '/server/library/' + file);
const libraryYamlFilesShared = fs.readdirSync(__dirname + '/shared/library').map(file => __dirname + '/shared/library/' + file);

const clientLibraries = generateLibraryDefinitions(libraryYamlFilesClient);
const serverLibraries = generateLibraryDefinitions(libraryYamlFilesServer);
const sharedLibraries = generateLibraryDefinitions(libraryYamlFilesShared);

// Collect all type yaml files from:
// __dirname/client/type/*.yaml
// __dirname/server/type/*.yaml
// __dirname/shared/type/*.yaml
// __dirname/fb/*.yaml
const typeYamlFilesClient = fs.readdirSync(__dirname + '/client/type').map(file => __dirname + '/client/type/' + file);
const typeYamlFilesServer = fs.readdirSync(__dirname + '/server/type').map(file => __dirname + '/server/type/' + file);
const typeYamlFilesShared = fs.readdirSync(__dirname + '/shared/type').map(file => __dirname + '/shared/type/' + file);
const typeYamlFilesFB = fs.readdirSync(__dirname + '/fb').map(file => __dirname + '/fb/' + file);

const clientTypes = generateTypeDefinitions(typeYamlFilesClient);
const serverTypes = generateTypeDefinitions(typeYamlFilesServer);
const sharedTypes = generateTypeDefinitions(typeYamlFilesShared);
const fbTypes = generateTypeDefinitions(typeYamlFilesFB);

// Write server and client definition files.
fs.writeFileSync(__dirname + '/teal/vu-client.d.tl', [ clientLibraries, sharedLibraries, clientTypes, sharedTypes, fbTypes ].join('\n\n'));
fs.writeFileSync(__dirname + '/teal/vu-server.d.tl', [ serverLibraries, sharedLibraries, serverTypes, sharedTypes, fbTypes ].join('\n\n'));