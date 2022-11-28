// File system- Promise API

// const fs= require('fs/promises');

import * as fs from 'fs/promises';

// // Creating Directory- Path should be there
// try{
//     await fs.mkdir('C://Users//SRIPARNA ROY//Desktop//nodejs//ch6//test//demo', {recursive:true});
//     console.log("Directory Created....");
// }catch(error){
//     console.log(error);
// }


// Read content of directory
// try{
// const files= await fs.readdir('C://Users//SRIPARNA ROY//Desktop//nodejs//ch6//test');
// for(const file of files)
// console.log(file);
// }catch(error){
// console.log(error);
// }


// removing directory
// try{
//     await fs.rmdir('C://Users//SRIPARNA ROY//Desktop//nodejs//ch6//test//demo');
//     console.log("Directory removed...")
//     }catch(error){
//     console.log(error);
//     }
// Write a file
// try{
//         await fs.writeFile('readme.txt', 'Hello NodeJS');
//         }catch(error){
//         console.log(error);
//         }

// read file
// try{
//          const data = await fs.readFile('readme.txt');
//          console.log(data);
//             }catch(error){
//             console.log(error);
//             }

// try{
//     const data = await fs.readFile('readme.txt', 'utf-8');
//     console.log(data);
//        }catch(error){
//        console.log(error);
//        }

// append data in file

// try{
//     await fs.appendFile('readme.txt',' Hello geeks');
   
//        }catch(error){
//        console.log(error);
//        }

// try{
//     await fs.copyFile('readme.txt','info.txt');
//     console.log("File Copied...");
//        }catch(error){
//        console.log(error);
//        }

// GET FILE INFORMATION
// try{
//     const stats= await fs.stat('C://Users//SRIPARNA ROY//Desktop//nodejs//ch7//test//demo');
//     console.log(stats.isDirectory());
//     console.log(stats);
// } catch(error){
// console.log(error);
// }