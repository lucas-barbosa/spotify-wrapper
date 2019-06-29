module.exports = {
  output: {
    filename: 'spotifyWrapper.umd.js',
    library: 'spotifyWrapper',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
