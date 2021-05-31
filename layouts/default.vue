<template>
  <v-app>
    <HeaderComponent />
    <v-main class="pa-1 layout">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
// vuex
import { mapGetters } from "vuex";

export default {
  // middlewares
  middleware: "lang",
  head() {
    return {
      titleTemplate: "%s - " + this.siteName
    };
  },
  computed: {
    ...mapGetters("settings", ["lang"]),
    siteName() {
      if (this.lang == "ar") {
        return "عمال مصر";
      }
      return "Omal Misr";
    }
  },
  created() {
    console.log(
      `%c This Site Built By  %c Mohamed Ibrahim %c ♥ %c`,
      "background:#35495e ; padding: 5px 10px; border-radius: 6px 0 0 6px; color: #fff;font-size: 20px;",
      "background:#42ce55 ; padding: 5px 0; border-radius: 0 ; color: #35495e;font-size: 20px;",
      "background:transparent ; padding: 5px 0 10px 5px; border-radius: 0 6px 6px 0; color: #f00;font-size: 20px;",
      "background:transparent"
    );
  }
};
</script>
