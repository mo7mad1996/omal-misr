<template>
  <v-main>
    <v-app-bar-title class="app-title">
      دليل المدن الصناعيه بجمهورية مصر العربيه ... الدليل الصناعي الشامل
    </v-app-bar-title>
    <div class="row">
      <div class="col-3">
        <RightSide />
      </div>
      <div class="col-9">
        <CitiesGuide />
      </div>
    </div>
  </v-main>
</template>

<script>
// components
import RightSide from "~/components/home/RightSide/index";
import CitiesGuide from "~/components/CitiesGuide/index";

export default {
  head() {
    return {
      title: "دليل المدن الصناعيه"
    };
  },
  components: {
    RightSide,
    CitiesGuide
  }
};
</script>

<style lang="scss" scoped>
.app-title {
  background: $red;
  text-align: center;
  color: white;
  padding: 5px;
}
</style>
