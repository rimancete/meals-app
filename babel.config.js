module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ["."],
          alias: {
            components: './components',
            data: './data',
            models: './models',
            screens: './screens',
            utils: './utils',
            styles: './styles',
            store: './store',
          },
        },
      ],
      'react-native-reanimated/plugin'
    ],
  };
};
