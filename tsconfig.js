const fs = require('fs');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

['tsconfig.esm.json', 'tsconfig.cjs.json'].forEach(configFile => {
  const config = JSON.parse(fs.readFileSync(configFile, 'utf-8'));
  config.compilerOptions.sourceMap = isDevelopment;
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2));
});