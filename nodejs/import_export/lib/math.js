function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2
}

// When exporting just one funtion
// module.exports = add



// When exporting multiple functions then use an object
module.exports = {
    add,
    sub
}