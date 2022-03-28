const fs = require('fs');

const video_read_stream = fs.createReadStream(__dirname + '/test_video.mkv');
const video_write_stream = fs.createWriteStream(__dirname + '/copy_test_video.mkv')

// video_read_stream.on('data', (chunk) => {
//     console.log(`Received a chunk of video`);
//     video_write_stream.write(chunk);
// });

// Above 4 lines can be replaced by this.
video_read_stream.pipe(video_write_stream);

