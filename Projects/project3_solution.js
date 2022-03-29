// File name was supposed to be 'file_copier' as per problem statement

const fs = require('fs');
const path = require('path')

const source_file_path = process.argv[2];
const destination_file_path = process.argv[3];

if(!fs.existsSync(source_file_path)) {
    console.error("Given source file doesn't exist!");
} else {
    const read_stream = fs.createReadStream(source_file_path);
    const write_stream = fs.createWriteStream(destination_file_path)
    
    read_stream.pipe(write_stream);
}



