module.exports = api => {
  api.cache(false)
  return {
    plugins: [
      "@babel/plugin-proposal-function-bind",
      "@babel/plugin-proposal-class-properties",
    ],
  }
};
