// process object is unique to nodejs and it helps connect with the OS

console.log(process);

// Where do we use process objects.


// 1. to get command line arguments by using process.argv object

// 2. to get the environment variables using process.env
console.log(process.env.JUPYTER_BATCH_STRENGTH);


// 3. to get operating system related information.
console.log(process.arch); //x64
