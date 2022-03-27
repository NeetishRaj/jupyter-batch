const fs = require('fs');

const css_text = `
html, body {
    margin: 0;
    padding: 0;
}
`;

const js_text = `
function init() {

}

window.onload = init
`;


const html_text = `
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
`;

// create a website folder

fs.mkdir('website', (err) => {
    if(err)
        console.log("Error in creating 'website' folder");

    
    // Create css folder then main.css file
    fs.mkdir('website/css', (err) => {
        if(err)
            console.log("Error in creating css folder");
    
        const writer = fs.createWriteStream('website/css/main.css');
        writer.write(css_text);
    });


    // create js folder then index.js file
    fs.mkdir('website/js', (err) => {
        if(err)
            console.log("Error in creating css folder");
    
        const writer = fs.createWriteStream('website/js/index.js');
        writer.write(js_text);
    }); 

    // create index.html file
    fs.createWriteStream('website/index.html').write(html_text);
})




