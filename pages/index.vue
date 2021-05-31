<template>
  <div></div>
</template>
<script>
// components

// vuex
import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: this.title
    };
  },
  computed: {
    ...mapGetters("settings", ["lang"]),
    title() {
      if (this.lang == "ar") {
        return "الواجهه";
      }
      return "Land Page";
    }
  },
  components: {}
};
</script>
