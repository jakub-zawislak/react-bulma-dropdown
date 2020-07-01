const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  output: {
    library: 'Dropdown',
    libraryTarget: 'umd',
  },
  externals: {
    'react': 'umd react',
    'react-dom': 'umd react-dom',
  },
  optimization: {
    minimize: false
  }
};
