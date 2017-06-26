# dojo-webpack-plugin-sample

[Sample application](https://openntf.github.io/dojo-webpack-plugin-sample/test.html) demonstrating the use of [dojo-webpack-plugin](https://github.com/OpenNTF/dojo-webpack-plugin) with [webpack](https://webpack.github.io/).  The sample can be run as a webpack application (the default) or as an [unpacked application](https://openntf.github.io/dojo-webpack-plugin-sample/test.html?nopack=1) that uses the Dojo loader by specifying the ?nopack=1 query arg in the URL.  It demonstrates how to construct a [Dojo loader config](https://github.com/OpenNTF/dojo-webpack-plugin-sample/blob/master/js/loaderConfig.js) that can be used in both weback and non-webpack versions of a Dojo application.  You may want to support non-webpack versions during the development phase of your application in order to avoid build overhead during development.

To build the app, you need to provide the location of the root directory where you have the Dojo source projects installed.  The directory structure should look like this:

```
<dojoRoot>
  +-- dijit
  +-- dojo
  +-- dojox
  +-- util
```
Note: on Windows, be sure to use upper-case for the drive letter and exact case for directory names in order to avoid the infamous [equal name when case is ignored](https://github.com/webpack/webpack/issues/2362) warnings.

To build the sample, run the following commands in the project root folder

```
npm install
node_modules/.bin/webpack --config webpack.config.js --dojoRoot <dojoRoot>
```

The built files will be located in `./release`.  You can launch the app by loading `./test.html` in a browser.  Note that loading the app from the file system works only for the packed application.  The non-packed version of the app (?nopack=1) loads Dojo from a CDN, so cross-origin restrictions in browsers require that you load the non-packed app from an http server.
