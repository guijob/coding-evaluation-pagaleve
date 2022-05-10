/**
 * this file is used for webpack to transpile .ts to minified .js
 * 
 * for this, we are going to load our cloudformation template,
 * get all function lambdas declared and then we will transpile it minimizing,
 * in order to treeshaking to get the most reduzed size we can get
 * 
 * all webpack entrypoints will be at lambdas/[name]/index.ts 
 * 
 * after this transpile process, we are going to have a dist/[name]/index.js
 * for each function, which is exactly the same path for CodeUri declared in
 * AWS::Serverless::Function resource
 *  
 */

const path = require('path');
const { readFileSync } = require('fs');
const { yamlParse } = require('yaml-cfn');

const conf = {
    prodMode: process.env.NODE_ENV === 'production',
    templatePath: './template.yaml',
};

// loading cf template
const cfn = yamlParse(readFileSync(conf.templatePath));

const entries = Object.values(cfn.Resources)
    .filter(resource => resource.Type === 'AWS::Serverless::Function')
    .filter(resource =>
        (resource.Properties.Runtime && resource.Properties.Runtime.startsWith('nodejs')) ||
        (!resource.Properties.Runtime && cfn.Globals.Function.Runtime)
    )
    .reduce(
        (obj, v) => {
            const functionName = v.Properties.CodeUri.split('/').reverse()[0];
            obj[functionName] = path.join(__dirname, 'src', 'lambdas', functionName, 'index.ts');
            return obj;
        },
        {}
    );

console.log(`Building for ${conf.prodMode ? 'production' : 'development'}...`);

module.exports = {
    // inject entries object here
    entry: entries,
    output: {
        filename: '[name]/index.js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.node$/,
                loader: 'node-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        minimize: false,
        moduleIds: 'named'
    },
    devtool: 'source-map',
    plugins: [
        //new TerserPlugin()
        //new ForkTsCheckerWebpackPlugin()
    ].filter(x => x),
    externals: {
        'aws-sdk': 'aws-sdk',
        'awslambda': 'awslambda',
    },
    target: 'node',
    mode: 'none',
    node: {
        global: true,
    },
    bail: true,
}