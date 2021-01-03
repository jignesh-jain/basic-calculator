module.exports = { 
    devServer:{
        proxy:{
            '/api': {
                target: 'https://still-river-21571.herokuapp.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                  }
            }
        }
    }
}