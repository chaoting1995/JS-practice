// module.exports ={
// readFile: function(){
//     console.log('111')
//     setTimeout(()=>{
//         let obj = {
//             name: chaoting
//         }
//     },2000);
// }
// }
// const http = require('http');

module.exports ={
    readFile: function(cb){
        setTimeout(()=>{
            let obj = {
                name: 'chaoting',
            };
            return obj;
        },2000);
        cb(obj);
    },
};
console.log(readFile())