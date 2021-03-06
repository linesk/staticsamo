module.exports = {
    title: 'MDKKU SAMO 62',
    description: 'Energy of the Medicine',
    head: [
        ['link', {
            rel: 'icon',
            href: '/images/logo.png'
        }]
    ],
    plugins: [
        '@vuepress/back-to-top'
    ],
    themeConfig: {
        logo: '/images/logo.png',
        docsDir: 'docs',
        repo: 'linesk/staticsamo',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Blog',
                link: '/blog/'
            },
            {
                text: 'About Us',
                link: '/aboutus/'
            },
            {
                text: 'Login',
                link: '/admin/'
            },
        ],
        sidebar: {
            '/aboutus/': [
                '',
                'Organization'
            ],
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
}