const fs = require('fs');

const readStream = fs.createReadStream('./Docs/test3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./Docs/test4.txt');

// readStream.on('data', (chunk) => {
//     console.log('\n ------- NEWWWWW DAAATAAAA -------- \n');
//     console.log(chunk);
//     writeStream.write('\n NEW DATA \n')
//     writeStream.write(chunk);
// })


//piping means copy and paste the whole 
readStream.pipe(writeStream);