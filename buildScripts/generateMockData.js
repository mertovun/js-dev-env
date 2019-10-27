/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => require('faker'));

jsf.resolve(schema).then(sample => {
  const json = JSON.stringify(sample);
  fs.writeFile('./src/api/db.json', json, function (err){
    if (err) {
      return  console.log(chalk.red(err));
    } else {
      console.log(chalk.green('Mock data generated.'));
    }
  });
});


