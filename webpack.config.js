const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DtsBundleWebpack = require('dts-bundle-webpack');

module.exports = {
  entry: './src/ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
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
    // new DtsBundleWebpack({
    //   name: 'react-bulma-dropdown',
    //   main: 'dist/**/*.d.ts'
    // }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
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
