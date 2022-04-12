const path = require("path");

module.exports = {
  paths: function (paths, env) {
    paths.appPublic = path.resolve(__dirname, "src/view/public");
    paths.appHtml = path.resolve(__dirname, "src/view/public/index.html");
    paths.appIndexJs = path.resolve(__dirname, "src/view/app/index.tsx");
    return paths;
  },
};
