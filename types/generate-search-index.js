const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const clientTypes = {};
const serverTypes = {};
const sharedTypes = {};
const clientLibraries = {};
const serverLibraries = {};
const sharedLibraries = {};
const fbTypes = {};

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

const indexTypes = (types, dir, context, index) => {
  for (const typeName in types) {
    const typeInfo = types[typeName];

    const indexInfo = {
      n: typeName,
      id: 'vext/ref/' + dir + '/' + typeName.toLowerCase(),
      c: context,
    };

    if (typeInfo.properties && Object.keys(typeInfo.properties).length > 0) {
      indexInfo.p = [];

      for (const propertyName in typeInfo.properties) {
        if (indexInfo.p.indexOf(propertyName) !== -1) {
          continue;
        }

        indexInfo.p.push(propertyName);
      }
    }

    if (typeInfo.methods && typeInfo.methods.length > 0) {
      indexInfo.m = [];

      for (const method of typeInfo.methods) {
        if (indexInfo.m.indexOf(method.name) !== -1) {
          continue;
        }

        indexInfo.m.push(method.name);
      }
    }

    if (typeInfo.values && Object.keys(typeInfo.values).length > 0) {
      indexInfo.v = [];

      for (const valueName in typeInfo.values) {
        if (indexInfo.v.indexOf(valueName) !== -1) {
          continue;
        }

        indexInfo.v.push(valueName);
      }
    }

    index.push(indexInfo);
  }
};

parseTypesInDir('client/type', clientTypes);
parseTypesInDir('server/type', serverTypes);
parseTypesInDir('shared/type', sharedTypes);
parseTypesInDir('client/library', clientLibraries);
parseTypesInDir('server/library', serverLibraries);
parseTypesInDir('shared/library', sharedLibraries);
parseTypesInDir('fb', fbTypes);

const searchIndex = [];

indexTypes(clientTypes, 'client/type', 'ct', searchIndex);
indexTypes(serverTypes, 'server/type', 'st', searchIndex);
indexTypes(sharedTypes, 'shared/type', 'sht', searchIndex);
indexTypes(clientLibraries, 'client/library', 'cl', searchIndex);
indexTypes(serverLibraries, 'server/library', 'sl', searchIndex);
indexTypes(sharedLibraries, 'shared/library', 'shl', searchIndex);
indexTypes(fbTypes, 'fb', 'fb', searchIndex);

fs.writeFileSync(path.join(__dirname, '../assets/json/vext-api.json'), JSON.stringify(searchIndex));
