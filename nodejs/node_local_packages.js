const os = require('os');
const fs = require('fs');
//console.log(os); // os library object

// Let's use os object 

// 1. to get the architecture
console.log(os.arch());

// 2. to get the cpu info
// console.log(os.cpus())



// let's use fs object

// 1. Create a folder named 'jupyter' in current working directory

fs.mkdir('jupyter', (err) => {
    if(err)
        console.log("Something went wrong while trying to create jupyter folder");

    console.log("Hurray! Just created my first folder programmatically in nodejs");
})