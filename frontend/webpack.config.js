'use strict';

const path = require('path');
const cwd = process.cwd();
const webpack = tars.require('webpack');
const TerserJsPlugin = tars.require('terser-webpack-plugin');

const staticFolderName = tars.config.fs.staticFolderName;
const compressJs = tars.flags.release || tars.flags.min || tars.flags.m;
const generateSourceMaps = tars.config.sourcemaps.js.active && tars.isDevMode;
const sourceMapsDest = tars.config.sourcemaps.js.inline ? 'inline-' : '';
const sourceMapsType = `#${sourceMapsDest}source-map`;
const webpackMode = !compressJs ? 'development' : 'production';

let outputFileNameTemplate = '[name]';
let modulesDirectories = ['node_modules'];
let rules = [
    {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
    }
];
let plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    })
];
let minimizers = [];

if (process.env.npmRoot) {
    modulesDirectories.push(process.env.npmRoot);
}

if (compressJs) {
    outputFileNameTemplate += ``;
    minimizers.push(
        new TerserJsPlugin({
            terserOptions: {
                compress: {
                    /* eslint-disable camelcase */
                    drop_console: tars.config.js.removeConsoleLog,
                    drop_debugger: tars.config.js.removeConsoleLog
                    /* eslint-enable camelcase */
                },
                mangle: false
            }
        })
    );
}

if (tars.config.js.webpack.providePlugin) {
    plugins.push(
        new webpack.ProvidePlugin(tars.config.js.webpack.providePlugin)
    );
}

if (tars.options.watch.isActive && tars.config.js.webpack.useHMR) {
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

if (tars.config.js.lint) {
    rules.push(
        {
            test: /\.js$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: `${cwd}/markup`,
            options: {
                configFile: `${cwd}/.eslintrc`
            }
        }
    );
}

if (tars.config.js.useBabel) {
    rules.push(
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: /markup/
        }
    );
}

/**
 * Add to each entry point entries for webpack dev-server and webpack-hot-middleware
 * @param  {Object} entryConfig
 * @return {Object}
 */
function prepareEntryPoints(entryConfig) {
    const useHMR = tars.config.js.webpack.useHMR;
    let devServerEntryPoints = [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?reload=true'
    ];

    if (!useHMR || !tars.useLiveReload) {
        return entryConfig;
    }

    // Take webpack dev-server and webpack-hot-middleware from TARS-CLI, if TARS has been started by TARS-CLI
    if (process.env.npmRoot) {
        devServerEntryPoints = devServerEntryPoints.map(devServerEntryPoint => process.env.npmRoot + devServerEntryPoint);
    }

    /* eslint-disable guard-for-in */
    for (let entryPointName in entryConfig) {
        entryConfig[entryPointName] = devServerEntryPoints.concat(entryConfig[entryPointName]);
    }
    /* eslint-disable guard-for-in */

    return entryConfig;
}
module.exports = {
    mode: webpackMode,
    // We have to add some pathes to entry point in case of using HMR
    entry: prepareEntryPoints({
        main: path.resolve(`${cwd}/markup/${staticFolderName}/js/main.js`)
    }),

    output: {
        path: path.resolve(`${(tars.isDevMode) ? `${tars.config.devPath}` : `${tars.config.buildPath}`}/${staticFolderName}/js`),
        publicPath: `./${staticFolderName}/js/`,
        filename: `${outputFileNameTemplate}.js`
    },

    devtool: generateSourceMaps ? sourceMapsType : false,

    watch: tars.options.watch.isActive && !tars.config.js.webpack.useHMR,

    module: {
        rules
    },

    plugins,

    resolveLoader: {
        modules: modulesDirectories
    },

    optimization: {
        minimizer: minimizers
    },

    resolve: {
        alias: {
            modules: path.resolve(`./markup/${tars.config.fs.componentsFolderName}`),
            components: path.resolve(`./markup/${tars.config.fs.componentsFolderName}`),
            static: path.resolve(`./markup/${staticFolderName}`)
        }
    }
};
