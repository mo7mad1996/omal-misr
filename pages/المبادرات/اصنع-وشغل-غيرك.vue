<template>
  <div class="container">
    <h1 class="text-center mb-4">مبادرة اصنع وشغل غيرك</h1>
    <ImgComponent
      v-for="(c, n) in content"
      :key="n"
      :img="'/المبادرات/اصنع-وشغل-غيرك/اصنع-وشغل-غيرك-0' + (n + 1) + '.jpg'"
      :text="c.text"
    />
  </div>
</template>

<script>
// components
import ImgComponent from "@/components/Initiatives/imgComponent";

export default {
  head: () => ({ title: "مبادرة اصنع وشغل غيرك" }),
  components: { ImgComponent },
  data: () => ({
    content: [
      {
        text: `simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, `
      },
      {
        text: `simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, `
      },
      {
        text: `simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, `
      },
      {
        text: `simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, `
      },
      {
        text: `simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, `
      },
      {
        text: `simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, `
      },
      {
        text: `simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, simple text for test, `
      }
    ]
  })
};
</script>
