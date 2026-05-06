const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = mergeConfig(defaultConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
    extraNodeModules: {
      '@': path.resolve(__dirname, 'src'),
    },
    blockList: [
      /android\/.cxx\/.*/,
      /android\/build\/.*/,
    ],
  },
  watchFolders: [path.resolve(__dirname, 'src')],
});

module.exports = withNativeWind(config, { input: './global.css' });
