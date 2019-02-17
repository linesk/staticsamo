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
        '@vuepress/back-to-top',
        [
            '@vuepress/google-analytics',
            {
                'ga': '' // UA-00000000-0
            }
        ]
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
                'policy',
                'organization',
            ],
        },
        lastUpdated: 'Last Updated',
    },
    base: '/staticsamo/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
    serviceWorker: true
}