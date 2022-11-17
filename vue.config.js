const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    host: '0.0.0.0',
    https:false,
    proxy: {
        '^/api': {
            target: 'https://divoora-assess.herokuapp.com/',
            ws: true,
            changeOrigin: true
        }
    }
    },
   

})
