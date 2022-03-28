// Read stream

const fs = require('fs');

const my_read_stream = fs.createReadStream(
    __dirname + '/test_video.mkv',
    { highWaterMark: 128 * 1024 }
)
let counter = 0;

my_read_stream.on('data', (chunk) => {
    console.log(`${++counter}. Received a data chunk`);
    console.log(chunk);
})

my_read_stream.on('end', (chunk) => {
    console.log('watched the whole movie!');
})