import { createVuetify } from "vuetify/lib/framework.mjs";

export default defineNuxtPlugin(nuxt => {
  const vuetify = createVuetify({
    ssr: true,
  });
  nuxt.vueApp.use(vuetify);
});
