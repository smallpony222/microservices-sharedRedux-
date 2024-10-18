// import federation from '@module-federation/webpack-bundler-runtime';

// __webpack_require__.federation = federation;

// __webpack_require__.f.remotes = __webpack_require__.federation.remotes(options);
// __webpack_require__.f.consumes = __webpack_require__.federation.remotes(options);
// const domain = window.location.hostname;

// // Load remote entry dynamically
// __webpack_require__.f.remotes = (function() {
//   return Promise.all([
//     // Replace the hardcoded URLs with dynamic ones
//     __webpack_require__.e("remoteEntry.js").then(() => {
//       __webpack_require__.S = 'store@' + `http://localhost:4002/remoteEntry.js`;
//     }),
//     __webpack_require__.e("remoteEntry.js").then(() => {
//       __webpack_require__.S = 'nav@' + `http://localhost:4001/remoteEntry.js`;
//     })
//   ]);
// })();

import("./App");
