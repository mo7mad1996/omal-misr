<template>
  <v-main class="Portfolio">
    <h1>سابقه أعمال المجموعه</h1>

    <div class="prands row">
      <div class="col-2" v-for="logo in prands" :key="logo">
        <img :src="logo" />
      </div>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      prands: [
        "/Portfolio/unionair.jpg",
        "/Portfolio/carrier.png",
        "/Portfolio/universal.jpg",
        "/Portfolio/samsong.png",
        "/Portfolio/fresh.png",
        "/Portfolio/electrolux.png",
        "/Portfolio/energya_steel.jpg",
        "/Portfolio/dhl.jpg",
        "/Portfolio/agility.jpg"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.Portfolio {
  h1 {
    color: $red;
    text-align: center;
  }

  .prands .col-2 {
    display: flex;
    align-items: center;
    padding: 4px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
