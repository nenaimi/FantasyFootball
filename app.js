var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world');
    response.end();
}
http.createServer(onRequest).listen(8000);
//Checking to see if our browser supports service workers
// if('serviceWorker' in navigator){
//     navigator.serviceWorker.register('./sw.js')
//         .then((reg) => console.log('Service worker registered', reg))
//         .catch((err) => console.log('Service worker not registered', err))
// }


