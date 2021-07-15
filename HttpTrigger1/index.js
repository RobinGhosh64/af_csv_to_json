module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var service = require('./xformbroker');

    
        
         
    await service.convert(context,req.body, (err, data) => {
        if (err) {
            context.res = {status: 500, body : 'Error in parsing...'}
            
        } else {
           context.res = {body : data}
        }
    })
    
}