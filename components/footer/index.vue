<template>
  <footer class="mt-3 row text-center">
    <div class="col-3">
      للتواصل معنا
      <v-btn text to="/" dark plain>
        اضغط هنا
      </v-btn>
    </div>
    <div class="col-3">
      تلفزبون OMC
    </div>
    <div class="col-3 border-white">
      <v-btn text to="/Portfolio" dark plain block>
        سابقة اعمالنا
      </v-btn>
    </div>
    <div class="col-3 mt-n2">
      حقوق الملكيه محفوظه لصالح مجموعه عمال مصر
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped lang="scss">
.border-white {
  border-left: 2px solid white;
  border-right: 2px solid white;
}

.col-3 {
  background: $red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
