<template>
  <div class="row">
    <div class="col-3">
      <RightSide />
    </div>
    <div class="col-9">
      <LeftMain />
    </div>
  </div>
</template>

<script>
// components
import LeftMain from "~/components/home/LeftMain/index";
import RightSide from "~/components/home/RightSide/index";

export default {
  components: {
    LeftMain,
    RightSide
  },
  head() {
    return {
      title: "الرئيسيه"
    };
  }
};
</script>
