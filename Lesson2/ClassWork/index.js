// const http = require('node:http');
// const path = require('node:path');
// const fsPromises = require('node:fs/promises');
// const readLine = require('node:readline/promises');
// const fs = require("node:fs");
// const EventEmitter = require('node:events');
// const os = require('os')

const  foo = async () => {
    // HTTP
//     const server = http.createServer((req, res) => {
//        res.writeHead(200, {'Content-Type' : 'application/json'});
//        res.end(JSON.stringify({
//            data: 'Hello Bro111'
//        }));
//     });
//
//     server.listen(3000);
//
//     //PATH
//     const pathToFile = __filename;
//     console.log(pathToFile);
//     console.log(path.dirname(pathToFile))
//     console.log(path.extname(pathToFile))
//     console.log(path.basename(pathToFile))
//     console.log(path.parse(pathToFile))
//     console.log(path.isAbsolute(pathToFile))
//     console.log(path.isAbsolute('./Lessons/march-2024'))
//
    // ReadLine
    // const rlInstance = readLine.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // })
    // const name = await rlInstance.question('Name?');
    // console.log(`Yor name is ${name}`);
    // process.exit(0);

    // FS
   //  const pathTofile = path.join(__dirname, 'test.txt');
   // await fsPromises.writeFile('test.txt', 'Hello World\n')
   //  const data = await fsPromises.readFile('test.txt', 'utf-8')
   // // console.log(data);
   // await fsPromises.appendFile(pathTofile, 'Some new data');
   // await fsPromises.mkdir(path.join(__dirname, 'new-folder', 'another-folder', 'another-folder'), {recursive: true})
    //  await fsPromises.rm(path.join(__dirname, 'new-folder'),{recursive: true} );
    // await fsPromises.unlink(pathTofile)  // delete file
   //await fsPromises.rename(pathTofile, path.join(__dirname, 'new-folder', 'another-folder', 'another-folder', 'new-file.txt'))
    // await fsPromises.copyFile(pathTofile, path.join(__dirname, 'folderForCoppy', 'newCoppyFile'))
   // const stat = await fsPromises.stat(pathTofile)
   //  console.log(stat.isFile());
   // const pdfPath = path.join(__dirname, 'Жим 100 КІЛОГРАМІВ.pdf');
   // await fsPromises.rename(pdfPath, path.join(__dirname, 'newPdf.pdf'))

    // STREAMS
    //  const pathToFile = path.join(__dirname, 'newPdf.pdf');
    //
    //  const readStream = fs.createReadStream(pathToFile);
    //   const writeStream = fs.createWriteStream((path.join(__dirname, 'new-big-file.pdf')));
     // readStream.on('data',(chunk) => {
     //     console.log('chunk', chunk.length)
     //     writeStream.write(chunk)
     // })
     // readStream.pipe(writeStream)

    //EVENTS
    // const emitter = new EventEmitter();
    // emitter.once('event1', () => {
    //     console.log('Event1 happened')
    // })
    // emitter.on('event2', () => {
    //     console.log('Event2 happened')
    // })
    //
    // emitter.emit('event1')
    // emitter.emit('event2')

    //OS
    // console.log(os.arch())
    // console.log(os.cpus())



}
void foo()