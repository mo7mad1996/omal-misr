<template>
  <div class="land">
    <Tv />
    <div class="flag">
      <img src="/land/flag.png" alt="" />
    </div>
  </div>
</template>
<script>
// components
import Tv from "~/components/land/Tv/index";

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
  components: {
    Tv
  }
};
</script>

<style lang="scss" scoped>
.land {
  min-height: 100%;
  background: #251843;
  position: relative;

  .flag {
    position: absolute;
    bottom: 0;
    left: 0;

    img {
      width: 150px;
    }
  }
}
</style>
