// https://nuxt.com/docs/api/configuration/nuxt-config
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;

export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {

    // private config
    firebaseadmin: {
      projectId: "",
      clientEmail: "",
      privateKey: "",
      databaseURL: "",
    },
    // public config
    public: {
      authCookieName: "__session",
      authCookieExpires: parseInt(ONE_WEEK.toString(), 10),
      firebase: {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
      }
    },
  },
});
