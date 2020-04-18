import { Configuration } from '@nuxt/types'

const config: Configuration = {
  build: {
    standalone: true,
    devtools: true
  },
  mode: 'universal',
  modules: ['@nuxt/typescript-build', 'nuxt-fontawesome'],
  typescript: {
    typeCheck: true
  }
}

export default config
