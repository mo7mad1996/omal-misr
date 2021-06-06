<template>
  <footer class="row pt-4 text-center footer">
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
    <div class="col-3 mt-n1">
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
.footer {
  position: relative;

  &::before {
    content: "";
    width: 90%;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    border-top-right-radius: 100px 20px;
  }
}

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

a {
  color: inherit !important;
}
</style>
