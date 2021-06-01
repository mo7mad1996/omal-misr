<template>
  <div class="white--text z-1 mb-1 cover">
    <v-container class="py-2 mt-n2 flex">
      <span class="py-0 px-4 lable red">
        {{ lang == "ar" ? "آخر الأخبار" : "news" }}
      </span>
      <marquee behavior="" direction="left">
        <span>
          لفتح باب التوظيف مش عارف ايه مثلا
        </span>
      </marquee>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["lang"]
};
</script>

<style lang="scss">
.cover {
  margin-left: 0.3vw;
  background: #251843;
}

.z-1 {
  position: relative;
  z-index: 1;
}

.flex {
  display: flex;

  .lable {
    font-family: "Almarai", sans-serif;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
