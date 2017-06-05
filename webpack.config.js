var webpack = require('webpack');
module.exports = {
  entry: [
          'script-loader!jquery/dist/jquery.min.js',
          'script-loader!foundation-sites/dist/js/foundation.min.js',
          './app/app.js'
          ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals:{
    jquery:'jQuery'
  },
  plugins:[
      new webpack.ProvidePlugin({
          '$':'jquery'
      })
  ],
 /* resolve:{
    root:__dirname,
      alias:{
      reducer:'app/reducer/reducer.js',
      store:'app/storeConfig.js',
      List:'app/components/List.js',
      Note:'app/components/Note.js',
      NoteForm:'app/components/NoteForm.js'
    }
  },*/
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
