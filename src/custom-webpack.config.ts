const Dotenv = require('dotenv-webpack');

// This code is configuring a plugin to load environment variables from the system instead of looking in an .env file.
export const plugins = [
  new Dotenv({
    systemvars: true,
  }),
];
