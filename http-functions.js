var https = require('https'); 

module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {
        
          response.setEncoding('utf8');
       
          var store = '';
       
          response.on('data', function (data) {
            store += data;
          });
       
          response.on('end', function() {
            callback(store);
          });  
        }); 
}