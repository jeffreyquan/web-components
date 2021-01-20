module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  watch: true,
};
