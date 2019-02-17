module.exports = {
    title: 'MDKKU SAMO 62',
    description: 'Energy of the Medicine',
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'About us',
                link: '/aboutus/'
            },
        ],
        sidebar: 'auto'
    },
    theme: 'cool',
    base: '/staticsamo/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}