require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['es2015', 'react-app'],
    plugins: [
        'syntax-dynamic-import',
        'dynamic-import-node',
        'react-loadable/babel'
    ]
});