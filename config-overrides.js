const {
  override,
  addPostcssPlugins,
  addLessLoader,
  fixBabelImports
} = require('customize-cra');

module.exports = override(
  addLessLoader({}),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 37.5,
    propList: ['*']

  }), ]),
  fixBabelImports('import', {
        libraryName: 'antd-mobile',
         style: 'css',
       }),
)