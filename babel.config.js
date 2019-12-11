const isProd = String(process.env.NODE_ENV) === "production";
const isTest = String(process.env.NODE_ENV) === "test";
module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: isTest ? "commonjs" : false
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      "ramda",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-proposal-class-properties",
      [
        "import",
        // { libraryName: 'antd', libraryDirectory: 'es', style: name => `${name}/style/index.css` },
        { libraryName: "antd", libraryDirectory: "lib", style: "css" },
        "antd"
      ],
      [
        "import",
        // { libraryName: 'antd', libraryDirectory: 'es', style: name => `${name}/style/index.css` },
        {
          libraryName: "ant-design-pro",
          libraryDirectory: "lib",
          style: true,
          camel2DashComponentName: false
        },
        "ant-design-pro"
      ]
    ]
  };
};
