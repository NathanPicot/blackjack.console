// vue.config.js
module.exports = {
    transpileDependencies: true,
    chainWebpack: (config) => {
        config.plugin('define').tap((args) => {
            args[0] = args[0] || {};
            args[0]['process.env'] = {
                ...args[0]['process.env'],
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: false,
            };
            return args;
        });
    },
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    },
    outputDir: 'docs'  // Ajoutez cette ligne pour définir le dossier de sortie
};
