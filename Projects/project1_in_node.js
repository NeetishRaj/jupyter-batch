// Assignment: 

const { mainModule } = require("process");

/**
 * 
 * Create a nodejs script to automate creation of a front end project folder called website.
 * 
 * 
 * 1. Create a folder named 'website' or take input from command line arguments.
 * 
 * 2. Follow this folder structure and create folder and files accordingly.
 * 
 * 
 *  Phase 1:
 *  -> website
 *      -> css
 *          - main.css
 *      -> js
 *          - index.js
 *      index.html
 * 
 * 
 * Phase 2:
 * 
 * Add the following content to the 3 files as mentioned
 * below
 * 
 * 
 */
css/main.css
##########

html, body {
    margin: 0;
    padding: 0;
}



js/index.js
###########

console.log("hello there! I am generated from node");


index.html
##########
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <script src="./js/index.js"></script>
    <title>Document</title>
</head>
<body>
    <p>
        Hello world
    </p>
</body>
</html>


