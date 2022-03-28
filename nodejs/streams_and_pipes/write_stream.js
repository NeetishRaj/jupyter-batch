const fs = require('fs');




// Write a nodejs code to create a txt file with random numbers between 10k - 99k

const my_write_stream = fs.createWriteStream(__dirname + '/output.txt');

for (let i = 0; i < 100; i++) {
    my_write_stream.write(rand_10000_99999() + '\n');
}

function rand_10000_99999() {
    return String(Math.floor(Math.random() * 100000) + 10000);
}







// Now let's use the read stream stream write data to a write stream

const video_read_stream = fs.createReadStream(__dirname + '/test_video.mkv');
const video_write_stream = fs.createWriteStream(__dirname + '/copy_test_video.mkv')

video_read_stream.on('data', (chunk) => {
    console.log(`Received a chunk of video`);
    video_write_stream.write(chunk);
});