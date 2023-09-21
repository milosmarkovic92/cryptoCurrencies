const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/v1/symbols", {
            target: "https://api.bitfinex.com",
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware("/v2/ticker", {
            target: "https://api.bitfinex.com",
            changeOrigin: true,
        })
    );
};