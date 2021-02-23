import fs from 'fs';
import { promisify } from 'util';

export function getFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}

export async function saveFile(path, content) {
  const writeFileAsync = promisify(fs.writeFile);
  await writeFileAsync(path, content);
  console.info(`${path} file saved`);
}
