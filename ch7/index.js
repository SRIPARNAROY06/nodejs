// File System - Callback API

import * as fs from 'fs';

// creating directory - path should be there
// fs.mkdir('C://Users//SRIPARNA ROY//Desktop//nodejs//ch7//test//demo', (error) => {
//     if(error) throw error;
//     console.log("DIRECTORY CREATED...");
// });

// Creating Directory- Path not required
// fs.mkdir('C://Users//SRIPARNA ROY//Desktop//nodejs//ch7//test//demo',{recursive:true},(error) => {
//     if(error) throw error;
//     console.log("DIRECTORY CREATED...");
// });

// read content of directory
// fs.readdir('C://Users//SRIPARNA ROY//Desktop//nodejs//ch7//test',{recursive:true},(error,files) => {
//     if(error) throw error;
//     for (const file of files)
//     console.log(file);
// });


// remove directory
// fs.rmdir('C://Users//SRIPARNA ROY//Desktop//nodejs//ch7//test//demo', (error)=>{
//   if(error) throw error;
//   console.log("dir removed") ; 
// })
// Creating and Writing File
// fs.writeFile('readme.txt','Hello World', (error)=>{
//     if(error) throw error;
//     consple.log('File created...');
// });

// Reading file
// fs.readFile('readme.txt', 'utf-8',(error,data)=>{
//     if(error) throw error;
//     console.log(data);
// })


// Append   File
// fs.appendFile('readme.txt', 'geeks',(error)=>{
//         if(error) throw error;
//         console.log("data appended");
//     })

// Copy File
// fs.copyFile('readme.txt', 'info.txt',(error)=>{
//         if(error) throw error;
//         console.log("file copied");
//     })

// Get file info
// fs.stat('C://Users//SRIPARNA ROY//Desktop//nodejs//ch7//test//emp.js', (error,stats)=>{
//     if (error) throw error;
//     console.log(stats.isDirectory());
//     console.log(stats.isFile());
//     console.log(stats);

// })