"use strict";var precacheConfig=[["/index.html","ed3555c66f467b61fc0355d4c3f522a8"],["/static/css/main.a8423d87.css","d9cdd31be7ccdc4254d30178d201e303"],["/static/js/main.58a9703b.js","e3878274c3e5ee0f888d127ad0bc469c"],["/static/media/account.8dc7bc89.png","8dc7bc89a652cd20743b6e7bb634d251"],["/static/media/cmpstructure.5ef059b6.png","5ef059b601f49559c44cdbbefef1a92b"],["/static/media/customCenter.517bb424.png","517bb4240aa8c623a6d45c5fba7e643b"],["/static/media/dontknow.be13bc56.jpeg","be13bc5667a38e735430940ea4fba7ac"],["/static/media/download.cb42a36e.png","cb42a36eb1e1b76ac2ae183047d433f1"],["/static/media/fail.9943e267.png","9943e2674c59194eef0fd34c2b9ebaae"],["/static/media/focus.de8d6dbf.jpg","de8d6dbf1d4aa361fe06951d9ebd4b7f"],["/static/media/logo.18a58b5c.png","18a58b5c7c8f0685eb703485ecef3432"],["/static/media/prd.82956f6a.png","82956f6a8ad971946aac89cadafaef1b"],["/static/media/redux.b46834f8.png","b46834f8335534e55f928a88e8a17759"],["/static/media/rightControl.2d3f2e0e.png","2d3f2e0e0a8556f088213d785398209c"],["/static/media/social.e995d38a.png","e995d38abec1c46863417d21aa83fd48"],["/static/media/speed.7b08bdd4.jpeg","7b08bdd4785423bd0ab44076953f9513"],["/static/media/swagger.f6b804ce.png","f6b804ce696f71704de957018b486a27"],["/static/media/tdd.97d11f4d.png","97d11f4d26d411ef389c1af75e529701"],["/static/media/thumb.11c7920a.png","11c7920aff2bd0a9762d72a8065d1a73"],["/static/media/tools.4e22a423.png","4e22a423762d5b8ae1ed78081f01a1f7"],["/static/media/work.f69de18c.png","f69de18c6e48557d00c7f6406a5991a0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});