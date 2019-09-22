const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'
module.exports = function(api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: isTest ? 'commonjs' : false,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      'ramda',
      'react-hot-loader/babel',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-proposal-class-properties',
      [
        'import',
        // { libraryName: 'antd', libraryDirectory: 'es', style: name => `${name}/style/index.css` },
        { libraryName: 'antd', libraryDirectory: 'es', style: true },
        'antd',
      ],
      [
        'import',
        // { libraryName: 'antd', libraryDirectory: 'es', style: name => `${name}/style/index.css` },
        {
          libraryName: 'ant-design-pro',
          libraryDirectory: 'lib',
          style: true,
          camel2DashComponentName: false,
        },
        'ant-design-pro',
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            api: './src/api',
            core: './src/core',
            'mock-json': './mock-api/json',
            monitor: './src/monitor',
            events: './src/events',
            context: './src/context',
            richtexteditor: './src/rich-text-editor',
          },
        },
      ],
    ],
    // env: {
    //   test: {
    //     plugins: ['@babel/plugin-transform-modules-commonjs'],
    //   },
    // },
  }
}
