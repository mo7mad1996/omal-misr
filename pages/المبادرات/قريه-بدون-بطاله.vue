<template>
  <div class="container">
    <h1 class="text-center mb-4">مبادرة قريه بدون بطاله</h1>
    <ImgComponent
      v-for="(c, n) in content"
      :key="n"
      :img="'/المبادرات/قريه-بدون-بطاله/قريه-بدون-بطاله-0' + (n + 1) + '.jpg'"
      :text="c.text"
    />
  </div>
</template>

<script>
// components
import ImgComponent from "@/components/Initiatives/imgComponent";

export default {
  head: () => ({
    title: "قريه بدون بطاله"
  }),
  components: {
    ImgComponent
  },
  data: () => ({
    content: [
      {
        text: `
        تعد مؤسسة عمال مصر واحده من اولى المؤسسات الرائده في مجال التصيع للغير وتشهد المؤسسه اكبر قدر من العمال بداخل الجمهوريه
        `
      },
      {
        text: `
        lorem
        `
      },
      {
        text: "lorem"
      },
      {
        text: "lorem"
      },
      {
        text: "lorem"
      },
      {
        text: "lorem"
      },
      {
        text: "lorem"
      }
    ]
  })
};
</script>
