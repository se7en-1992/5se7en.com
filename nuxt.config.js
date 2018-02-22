const package = require('./package.json')
module.exports = {
  head: {
    title: '5se7en\'s personal website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: package.description },
      { hid: 'keywords', name: 'keywords', content: package.keywords.join(", ") },
      { hid: 'author', name: 'author', content: package.author },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/scss/main.scss'
  ],
  modules: [
    ['~/modules/sentry', {
      project_id: process.env.SENTRY_PROJECT_ID,
      public_key: process.env.SENTRY_PUBLIC_KEY,
      private_key: process.env.SENTRY_PRIVATE_KEY
    }]
  ],
  plugins: [
    { src: '~/plugins/ga.js', ssr: false }
  ],
  build: {
    vendor: ['axios']
  },
  env: {
    githubToken: '4aa6bcf919d238504e7db59a66d32e78281c0ad3',
    docSearchApiKey: 'ff80fbf046ce827f64f06e16f82f1401'
  },
  loading: { color: '#41B883' }
}
