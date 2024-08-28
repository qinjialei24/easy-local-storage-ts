const fs = require('fs');
const path = require('path');

['tsconfig.esm.json', 'tsconfig.cjs.json'].forEach(configFile => {
  const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  config.extends = './tsconfig.base.json';
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
});