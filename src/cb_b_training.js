const async = require('./cb_a_training');

console.log(async);
console.log(async.readFile());
// let result = async.readFile((o)=>{
//     console.log(o)
// });

function result(o){
    console.log(o)
}

// async.readFile(result());