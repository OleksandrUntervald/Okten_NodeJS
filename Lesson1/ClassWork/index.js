// const http = require("node:http");
// const path = require("node:path");
// const redlinde = require("node:readline/promises")

const {foo: helperFoo} = require("./helper");

const foo = async () => {
    //HTTP
    // const server = http.createServer((req, res) => {
    //       res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({
    //         data: "hello world",
    //     }));
    // });
    // server.listen(3000)

    //PATH
    // console.log(__filename)
    // console.log(__dirname)
    // const pathToFile = __filename;
    // console.log(pathToFile);
    // console.log(path.dirname(pathToFile))

    //REDLINE
    // const rlInstance = redlinde.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // })
    // const name = await rlInstance.question('Name ?')
    // console.log(`Your name is ${name}`)
    // process.exit(0)
}

void foo()
