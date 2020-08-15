//A service worker is a type of web worker. 
// It's a JavaScript file that runs separately from the main browser thread, 
// intercepting network requests, caching or retrieving resources from the cache, and delivering push messages.
//This can also store assets that will still need to be viewed in offline mode,
// like the logo, index page, etc (cached assets)

//Name of our cache
const staticCacheName = 'site-static-v1';

//Dynamic cache so we don't have to create a new version of our service worker every time we make a change
// In our static files
const dynamicCacheName = 'site-dynamic-v1';

// List of cached assets (their URLs)
// I ran into an error here where not all the assets were being loaded in Application->Cache Storage
// What I had to do was add assets one by one, refreshing Chrome every time until they were all loaded in
const assets = [
  '/',                           //Just the index page
  '/index.html',                 //Index page again
  '/js/app.js',                  //Javascript files
  '/js/ui.js',
  '/js/materialize.min.js',       
  '/css/style.css',           //Style sheets
  '/css/materialize.min.css',
  '/img/dish.png',                //Any images
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',  //Or icons/fonts
  '/pages/fallback.html'
];

// Cache size limit function
const limitCacheSize = (name, size) => {

caches.open(name).then(cache => {
  cache.keys().then(keys => {
      if (keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
   });
  });
};



// installing the service worker event through app.js
// We are also caching certain assets that need to be stored for when 
// There is no internet connection available. This function opens our cache, 'staticCacheName',
// and reaches out to the server to get all the files stored in it
// cache.addAll reaches out to the server and grabs everything that we listed in our cache to store them
// This only happens once, when this file has been changed and the service worker needs to be reinstalled
self.addEventListener('install', evt => {
    //This waitUntil method does not allow the service worker to be installed
    //Until the cache has been fully populated. 
      evt.waitUntil(
        caches.open(staticCacheName).then(cache => { 
          console.log('caching shell assets');
          cache.addAll(assets);
      })
    );
  
  });

  //Listening for the activate event that will activate the service worker
  // When we update our static files (like html files, for example) we need to delete the old cache
  // (the one that contained our old html files) and reload the new cache containing the new html files
  self.addEventListener('activate', evt => {
    //console.log('service worker activated');
    evt.waitUntil(
      caches.keys().then(keys => {
        //console.log(keys);
        return Promise.all(keys
          //Filtering any old caches and NOT the dynamic cache
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)

          //Deleting any old caches
          .map(key => caches.delete(key))
        );
      })
    );
  });

  //Fetch requests can occur whenever we want to get something from a server. Can be a JSON file, an HTML page,
  // an image, or even from a JS file. All of these will fire fetch events that the service worker
  // will listen for. The event "respondWith" basically checks in our caches if something matches up in our requests
  // which matches the request (return cacheRes), this is so the request doesn't need to go all the way back to the server to find something that's
  // already in our cache. If it's not found in the cache, the request is fetched (fetch(evt.request)).
  self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());

            //Everytime we add something new to our dynamic cache, we check that it's
            // Not exceeding the size of three
            limitCacheSize(dynamicCacheName, 15);
            return fetchRes;
          })
        });
      }).catch(() => {
        if(evt.request.url.indexOf('.html') > -1){
          return caches.match('/pages/fallback.html');
        }
     })
    );
  });

  