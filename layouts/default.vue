<template>
  <v-app>
    <HeaderComponent />
    <v-main class="layout">
      <nuxt />
      <!-- Chat -->
      <Chat />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
// vuex
import { mapGetters } from "vuex";

// components
import HeaderComponent from "~/components/header/index";
import FooterComponent from "~/components/footer/index";
import Chat from "~/components/Chat/index";

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
  components: {
    HeaderComponent,
    FooterComponent,
    Chat
  }
};
</script>
