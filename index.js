//EXPORTING ------------------------------------------------------------------------------------
// const exportedData = require("./app");
// console.log(exportedData.z())

// console.log("J.M.S")
// var a = 2;
// var b = c = 6 ;
// var d = a + b + c
// console.log(d)


// MODULES----------------------------------------------------------------------------------------

// GLOBAL MODULE = global module does not need to be imported like console.log is global module
// NONGLOBAL MODULE = module need to be imported like fs needs to be imported

// const fs = require('fs');
// fs.writeFileSync("hello.txt","code step by step")

// console.log(__dirname)//will console disc location name

//MAKE BASIC SERVER ---------------------------------------------------------------------------------------

//HTTP - HTTP modules handles server request and response


// const http = require('http')
// function firstServer(req,resp){
//     resp.write("I am swetaa");
//     resp.end()
// }
// http.createServer(firstServer).listen(4500)


//FUNCTION AS PARAMETERS IN NODE
//ARROW FUNCTION

// const colors = require("colors")
// console.log("hello".green)

//NODEMON PACKAGE---------------------------------
//by using this we dont need to run node ./index.js after every changes


// console.log(100 + 3)

//NODE JS IS ASYNC 

//-----------------------------------------CREATE API----------------------------------------------------

// const http = require('http');
// const data = require('./data');
// http.createServer((req,resp) => {
//     resp.writeHead(200,{'Content-Type':"application/json"});
//     resp.write(JSON.stringify(data));
//     resp.end();

// }).listen(5000)

//--------------GETTING INPUT FROM COMMAND LINE -----------------------------------------------------------

// const fs = require('fs');
// const input = process.argv;
// if(input[2] == "add"){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2] == "remove"){
//     fs.unlinkSync(input[2])
// }else{
//     console.log("Invalid input")
// }

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"files");
for(let i = 0 ; i<5;i++){
    fs.writeFileSync(dirPath + "/subfiles"+i+".txt","a simple test files")
}