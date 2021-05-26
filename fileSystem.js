const fs = require('fs');

//read
// fs.readFile('./Docs/test.txt', (error, data) => {
//     if (error) {
//         console.log(error);
//     }else {
//         console.log(data.toString());
//     }
// });


//writing files
// fs.writeFile('./Docs/test.txt', 'Heloooooo everyone', () => {
//     console.log('file was written');
// });
// fs.writeFile('./Docs/test2.txt', 'Heloooooo everyone', () => {
//     console.log('file was written');
// });

//directories
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('file is created');
        }
    });

} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('folder is deleted');
        }
    }) 
}

//Deleting files
if (fs.existsSync('./Docs/deleteme.txt')) {
    fs.unlink('./Docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}

//check asyncronous
console.log('last line');

