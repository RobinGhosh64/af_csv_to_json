
var csvtojson = require('csvtojson');


module.exports={
 
    /*
    *  Execute CSV to JSON convert
    */
 
  
   convert: async function  (context,body,callback) {

    
    await csvtojson().fromString(body)
        .then((csvRow)=> {
            console.log(csvRow)
            var json =JSON.stringify(csvRow, null, 2);
            callback(null,json)
           
         
     })
     
   }
}