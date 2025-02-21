#!/usr/bin/env node

/**
 * This script is used to unpack aws secrets manager secrets
 * secretsMap.json file should be present in the config folder
 * json should be an array of secret maps
 *  [
 *   {
 *    "awsSecretName": "someName",
 *    "fields": {
 *        awsName: "envName",
 *        awsName2: "envName2",
 *      }
 *     ]
 *   },
 *  }
 *  If field is not listed, it will be ignored
 *  if envName is undefined, it be set to awsName
 */

import fs, { promises as fsPromise } from 'fs';
import path from 'path';

const __dirname = path.resolve();
const args = process.argv.slice(2);
const secretsMapLocation = args[0] || './config/secretsMap.json';
const secretsMapFile = path.join(__dirname, secretsMapLocation);

if (!fs.existsSync(secretsMapFile)) {
  console.error("Secrets map file not found.");
  process.exit(1);
}

async function readSecretsMap() {

  try {
    const data = await fsPromise.readFile(secretsMapFile, 'utf8');
    const secretsMapArray = JSON.parse(data) ?? [];
    if (!Array.isArray(secretsMapArray)) {
      console.error("Secrets map file should be an array.");
      process.exit(1);
    }
    return secretsMapArray;
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

const setEnvVars = (secretsMapArray) => {
  for (const awsSecretMap of secretsMapArray) {
    const { awsSecretName, fields } = awsSecretMap;
  
    const awsSecretString = process.env[awsSecretName];
    if (!awsSecretString) {
      console.error(`Secret ${awsSecretName} not found in environment variables.`);
      continue;
    }
    const awsSecret = JSON.parse(awsSecretString);
  
    for (const [awsName, envName] of Object.entries(fields)) {
      const value = awsSecret[awsName];
  
      if (!value) {
        console.error(`Value for ${awsName} not found in secret.`);
        continue;
      }
  
      process.env[envName ?? awsName] = value;
      console.log('Setting env var: ', envName ?? awsName)
    }
  }
  
  console.log("Secrets have been loaded as environment variables.");
}

readSecretsMap().then(setEnvVars);



