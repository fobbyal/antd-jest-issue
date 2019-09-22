# Minimal repo to produce antd jest testing issue

running `yarn test` will return the following issue



```
 FAIL  src/App.test.js
  ● Test suite failed to run

    /Users/showdown/antd-jest-problem/node_modules/antd/es/button/style/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import '../../style/index.less';
                                                                                                    ^^^^^^^^^^^^^^^^^^^^^^^^

    SyntaxError: Unexpected string

       6 | function App() {
       7 |   return (
    >  8 |     <div className="App">
         | ^
       9 |       <header className="App-header">
      10 |         <img src={logo} className="App-logo" alt="logo" />
      11 |         <p>

      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)
      at Object.<anonymous> (src/App.js:8:1)
```
