const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/socket.io', createProxyMiddleware({target: 'http://localhost:5000', changeOrigin: true, ws: false}));
  app.use('/api', createProxyMiddleware({target: 'http://localhost:5000', changeOrigin: true}));
};