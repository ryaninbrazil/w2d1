var https = require('https'); 



function getHTML (options, callback) {
    https.get(requestOptions, function (response) {
        
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


  function printHTML (html) {
    console.log(html);
  }
 
 var requestOptions = {
     host: 'sytantris.github.io',
     path: '/http-examples/step2.html'

 }

getHTML(requestOptions, printHTML);