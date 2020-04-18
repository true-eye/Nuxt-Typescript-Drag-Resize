import { Configuration } from '@nuxt/types'

const config: Configuration = {
  build: {
    standalone: true,
    devtools: true
  },
  mode: 'universal',
  modules: [
    '@nuxt/typescript-build',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          }
        ]
      }
    ]
  ],
  typescript: {
    typeCheck: true
  }
}

export default config
