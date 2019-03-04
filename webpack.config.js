const HtmlWebPackPlugin = require("html-webpack-plugin");

const MODE = 'development';


module.exports = {
  mode: MODE,
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
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
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {},
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss/, 
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,

              importLoaders: 2
            },
          },
          {
            loader: 'sass-loader',

          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
