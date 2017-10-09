var https = require('https'); 
   
   
var options = {
    host: '',
    path: ''
}
function getAndPrintHTML (options) {

    
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };



https.get(requestOptions, function (response) {
    
      response.setEncoding('utf8');

      var store = '';

      response.on('data', function (data) {
        store += data;
      });

      response.on('end', function() {
        console.log(store);
      });  
    });
}

getAndPrintHTML();