const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports= {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist') // diretório do meu script na raiz do OS
    },
    plugins: [new HtmlWebPackPlugin()]
};

// roda o -> NPM run build-dev