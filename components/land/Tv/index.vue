<template>
  <div class="pa-5">
    <div class="tv-container">
      <img
        src="https://s3-eu-west-1.amazonaws.com/forasna/uploads/logos/clogo_2019-10-02-16-11-13_XegQ1k2aA6FH0j0PMX9RZQXX.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Tv"
};
</script>

<style lang="scss" scoped>
.tv-container {
  height: 380px;
  position: relative;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 9px 0 29px 0px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: -14px;
    pointer-events: none;
    z-index: 2;
    background-image: url("/land/TV.png");
    width: 100%;
    background-size: 100% 100%;
  }
}
</style>
