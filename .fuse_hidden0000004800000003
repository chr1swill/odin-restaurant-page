const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'  // You might need to adjust this depending on your server setup
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|webp|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // This ensures the path of the file is preserved in the output directory
                            name: '[name].[ext]', 
                            // Adjust this path to match your desired output structure
                            outputPath: 'asset/',  
                            // Ensures that the public URL will be correct in your HTML/CSS files
                            publicPath: 'asset/'  
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
