// Synchronous API
import * as fs from 'fs';


// Creating Directory- path should be there
// fs.mkdirSync('C://Users//SRIPARNA ROY//Desktop//nodejs//ch8//geek');

// path not required
// fs.mkdirSync('C://Users//SRIPARNA ROY//Desktop//nodejs//ch8//test//demo', {recursive: true});

// Read content of Directory
// const files= fs.readdirSync('C://Users//SRIPARNA ROY//Desktop//nodejs//ch8//test');
// for(const file of files)
// console.log(file);

// Removing directory
// fs.rmdirSync('C://Users//SRIPARNA ROY//Desktop//nodejs//ch8//test//demo');

// Create and write file
// fs.writeFileSync('readme.txt', 'Hello NodeJS');

// Read File
// const data= fs.readFileSync('readme.txt', 'utf-8');
// console.log(data);

// Append
// fs.appendFileSync('readme.txt', 'geeks');

// Copy File
// fs.copyFileSync('readme.txt', 'info.txt');

// file info
// const stats=fs.stat('C://Users//SRIPARNA ROY//Desktop//nodejs//ch8//test');
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//     console.log(stats);

