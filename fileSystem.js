// create and read multipl file from directory....................................
const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname,'src')
// console.log(dirPath);
for(i=0;i<5;i++){
    fs.writeFileSync( dirPath+"/apple"+i+".txt","a simple file is here")
}
fs.readdir(dirPath,(err,files)=>{
    console.log(files)
})

//create and delete file from command line.........................................

// const fs = require('fs');
// const input = process.argv;
// if (input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove') {
//     fs.unlinkSync(input[3])
// }
// else console.log('invelid input')