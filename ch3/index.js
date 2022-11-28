// Path Module
const path = require('path');

// Basename
console.log(path.basename('C:/nodejs/ch3/index.js'));
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// Dirname
console.log(path.dirname('C:/nodejs/ch3/index.js'));

// Extname
console.log(path.extname(__filename));

// Join
console.log(path.join('/search' , 'label' , 'course/python'));
console.log(path.join('/search' , 'label' , 'course/python', '..','..'));

// Normalize
console.log(path.normalize('C:\\temp\\\\foo\\bar'));
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'));

// Parse
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// isAbsolute
console.log(path.isAbsolute('//server'));
console.log(path.isAbsolute('bar/bar'));