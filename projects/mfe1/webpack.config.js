const mf = require("@angular-architects/module-federation/webpack");
const shareAll = mf.shareAll;

const withModuleFederationPlugin = mf.withModuleFederationPlugin;

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    './Module': './projects/mfe1/src/app/flights/flights.module.ts',
  },

  shared: shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: "auto",
  }),

});
