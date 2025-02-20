const { override } = require("customize-cra");

module.exports = override((config) => {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    os: require.resolve("os-browserify/browser"),
    path: require.resolve("path-browserify"),
  };
  return config;
});
