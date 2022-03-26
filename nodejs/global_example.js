// console.log(global);

let i = 0;
// setInterval(() => {
//      console.log(i++);
// }, 1000);

// global.setInterval(() => {
//      console.log(i++);
// }, 1000);


// Write a JS code to find whether it's running in nodejs or browser

if(typeof window === "object"){
    console.log("In browser")
} else{
    console.log("In Node")
}



  