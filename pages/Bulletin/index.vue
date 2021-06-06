<template>
  <v-main>
    <v-app-bar-title class="app-title">
      نشرة وظائف مجموعة عمال مصر وطلبات التوظيف والاعلان عن الوظائف المختلفه
      جميع التخصصات
    </v-app-bar-title>
    <div class="row">
      <div class="col-3">
        <RightSide />
      </div>
      <div class="col-9">
        <Bulletin />
      </div>
    </div>
  </v-main>
</template>

<script>
// components
import RightSide from "~/components/home/RightSide/index";
import Bulletin from "~/components/Bulletin/index";

export default {
  components: {
    RightSide,
    Bulletin
  },
  head() {
    return {
      title: "نشرة وظائف عمال مصر"
    };
  }
};
</script>

<style lang="scss" scoped>
.app-title {
  background: $red;
  color: white;
  padding: 5px;
  text-align: center;
}
</style>
