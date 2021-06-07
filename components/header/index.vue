<template>
  <header>
    <SearchForm :lang="lang" />
    <nuxt-link to="/">
      <img class="bg" src="/header/BG.png" />
    </nuxt-link>
    <MarqueeComponent :lang="lang" />
    <NavBar :lang="lang" :ar="ar" :en="en" />
  </header>
</template>

<script>
import { mapGetters } from "vuex";

// components
import SearchForm from "@/components/header/SearchForm";
import MarqueeComponent from "@/components/header/marquee";
import NavBar from "@/components/header/nav";

export default {
  name: "HeaderComponent",

  components: {
    SearchForm,
    MarqueeComponent,
    NavBar
  },

  computed: {
    ...mapGetters("settings", ["lang"]),
    ...mapGetters("sitedata", ["ar", "en"])
  }
};
</script>

<style lang="scss">
header {
  z-index: 4;

  img {
    width: 100%;
  }
}
</style>
