// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: '.env.dev' });
} else {
  dotenv.config({ path: '.env.prod' });
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { redirect: '/main' },
},
runtimeConfig: {
  apiSecret: '123',

  public: {
    apiUrl: process.env.API_URL || '/api'
  }
},
modules: [
  '@vee-validate/nuxt'
],
})
