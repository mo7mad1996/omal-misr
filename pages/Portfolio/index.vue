<template>
  <div class="row">
    <div class="col-3">
      <RightSide />
    </div>
    <div class="col-9">
      <Portfolio />
    </div>
  </div>
</template>

<script>
// components
import RightSide from "~/components/home/RightSide/index";
import Portfolio from "~/components/Portfolio/index";

export default {
  components: {
    RightSide,
    Portfolio
  }
};
</script>
