<template>
  <div class="Initiative row mb-2">
    <div class="col-6">
      <p>{{ text }}</p>
    </div>
    <div class="col-6"><img :src="img" :alt="img" /></div>
  </div>
</template>

<script>
export default {
  props: ["text", "img"],
  name: "ImgComponent"
};
</script>

<style scoped lang="scss">
.Initiative:nth-of-type(even) {
  direction: rtl;
  text-align-last: left;
}
.Initiative:nth-of-type(odd) {
  direction: ltr;
  text-align-last: right;
}

.Initiative {
  img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    opacity: 0.8;
    transition: 0.3s;
    padding: 3px;
    border: 3px solid #cd2021;
  }
  &:hover img {
    opacity: 1;
  }
  p {
    text-align: justify;
  }
}
</style>
