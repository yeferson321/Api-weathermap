const Dotenv = require('dotenv-webpack');

export const plugins = [
  new Dotenv({
    systemvars: true,
  }),
];
