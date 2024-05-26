const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/candidatos',
    createProxyMiddleware({
      target: 'https://wetinbackend.azurewebsites.net',
      changeOrigin: true,
    })
  );
};