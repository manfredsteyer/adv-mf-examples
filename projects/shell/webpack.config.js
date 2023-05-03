const mf = require("@angular-architects/module-federation/webpack");
const shareAll = mf.shareAll;

const withModuleFederationPlugin = mf.withModuleFederationPlugin;

module.exports = withModuleFederationPlugin({

  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: "auto",
  }),

});
