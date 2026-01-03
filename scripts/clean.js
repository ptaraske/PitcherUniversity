const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../dist');

// List all files in the destination directory
const files = sh.ls(`${destPath}/*`);

// Loop through the files and delete all except `index.html`
files.forEach(file => {
  if (file !== `${destPath}/index.html`) {
    sh.rm('-rf', file);
  }
});