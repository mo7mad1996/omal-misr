<template>
  <div class="land">
    <div class="row">
      <div class="col"></div>
      <div class="col-7">
        <Tv />
      </div>
      <div class="col">
        <Login />
        <div class="flag">
          <img src="/land/flag.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// components
import Tv from "~/components/land/Tv/index";
import Login from "~/components/land/Login/index";

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
    Tv,
    Login
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
    pointer-events: none;

    img {
      width: 150px;
    }
  }
}
</style>
