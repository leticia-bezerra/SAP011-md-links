const { readFile } = require('./index');
const chalk = require('chalk');

const pathsCommand = process.argv;
const addressPath = process.argv[2];
console.log(pathsCommand);

readFile(addressPath)
.then((fileContent) => {
    console.log(chalk.bgRed(fileContent));
});

