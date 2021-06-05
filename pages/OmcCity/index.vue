<template>
  <div class="row">
    <div class="col-3">
      <RightSide />
    </div>
    <div class="col-9">
      <h1 class="text-h1 text-center pa-4 Mohammad" v-html="soon" />
    </div>
  </div>
</template>

<script>
// components
import RightSide from "~/components/home/RightSide/index";

export default {
  data() {
    return {
      soon:
        "قريباً إنتظرووونا<br> في الإعلان عن أول مدينه عماليه ذكيه متكامله بجمهوريه  مصر العربيه"
    };
  },
  components: {
    RightSide
  },
  head() {
    return {
      title: "مدينه عمال مصر"
    };
  }
};
</script>

<style lang="scss" scoped>
.Mohammad {
  font-family: Mohammad !important;
}

h1 {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;

  height: 100%;
  display: flex;
  align-items: center;
}
</style>
