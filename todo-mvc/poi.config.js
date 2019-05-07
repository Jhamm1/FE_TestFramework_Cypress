module.exports = {
  entry: './src/index',
  homepage: './',
  presets: [
    require('poi-preset-eslint')({ mode: '*' }),
  ],
  hotReload: false,
}
