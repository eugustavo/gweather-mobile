module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        verbose: false,
        allowlist: ['GOOGLE_PLACES_API_KEY', 'RAPID_API_KEY'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@store': './src/store',
        },
      },
    ],
  ],
}
