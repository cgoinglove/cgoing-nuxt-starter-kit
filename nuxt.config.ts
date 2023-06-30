import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  /** @ts-ignore */
  app: {
    head: {
      title: "cgoing",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
        },
        { name: "description", content: "cgoing nuxt-starter-kit" },
        { name: "author", content: "cgoing" },
      ],
    },
  },
  css: ["assets/style/main.scss"],
  runtimeConfig: {
    public: {},
  },
  build: { transpile: ["vuetify"] },
  modules: [
    "@pinia/nuxt",
    (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", config =>
        // @ts-ignore
        config.plugins.push(vuetify()),
      );
    },
  ],
});
