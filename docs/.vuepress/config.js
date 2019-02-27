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
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'About Us',
                link: '/aboutus/'
            },
            {
                text: 'Contact Us',
                link: '/contactus.html'
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