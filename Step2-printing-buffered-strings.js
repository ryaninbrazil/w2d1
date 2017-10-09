var https = require('https'); 

function getAndPrintHTMLs () {


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
        console.log('Response stream complete.');
        console.log(store);
      });  
    });
}

getAndPrintHTMLs ();