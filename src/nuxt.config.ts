export default defineNuxtConfig({
  modules: ['@nuxt/test-utils/module', '@nuxt/ui'],

  // use Development environment
  $development: {
    runtimeConfig: {
      public: {
        site: {
          url: 'http://localhost:3000'
        }
      }
    }
  },

  devtools: { enabled: true },
  colorMode: {
    preference: 'system'
  },
  future: {
    compatibilityVersion: 4
  }
});
