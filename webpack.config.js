import path from 'path';

const __dirname = path.resolve();
const BUILD_DIR = path.join(__dirname, 'backend/public/build');
const APP_DIR = path.join(__dirname, 'frontend');

export default {
  mode: 'development',
  entry: {
    main: APP_DIR + '/src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: APP_DIR + '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/react', { runtime: 'automatic' }]],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: APP_DIR + '/node_modules',
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
