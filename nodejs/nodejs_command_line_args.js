// To get the  Command line arguments we can use process.argv property

//console.log(process.argv);

// Write a nodejs CLI tool to add numbers

const args = process.argv.slice(2);


let sum = 0;

args.forEach(number => {
    sum += Number(number)
});

console.log(`Sum of ${args.toString()} is ${sum}`);