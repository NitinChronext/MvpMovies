// Learn more https://docs.expo.io/guides/customizing-metro
const {getDefaultConfig} = require('metro-config');

// module.exports = getDefaultConfig(__dirname);
module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [
        ...sourceExts,
        'jsx',
        'js',
        'scss',
        'sass',
        'tsx',
        'ts',
        'svg',
        '.yml',
        'cjs',
      ],
    },
  };
})();
