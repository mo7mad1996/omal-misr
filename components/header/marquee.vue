<template>
  <div
    class="white--text z-1 mb-1 cover"
    @mouseenter="stop"
    @mouseleave="start"
  >
    <v-container class="py-2 mt-n2 flex">
      <span class="py-0 px-4 lable red">
        {{ lang == "ar" ? "آخر الأخبار" : "news" }}
      </span>
      <marquee ref="marquee" :direction="lang == 'ar' ? 'right' : 'left'">
        <span v-for="(line, n) in headlines[lang]" :key="n" v-text="line" />
      </marquee>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["lang"],
  data: () => ({
    headlines: {
      ar: [
        "وإنتا بتستثمر في الصناعة - بتحلم بإية ؟ تأكد إن كل متطلباتك هتلاقيها كلها في مكان واحد مجمع عمال مصر ( الخدمي والصناعي والتعليمي )",
        'بالتنسيق المشترك بين إدارة التشغيل بعمال مصر و إدارة مصنع هينكل تكريم   عدد 71 من جنود عمال مصر بمشروع " مصنع هينكل الألماني ".',
        "كام مرة كنت بتفكر في وظيفة عايز تشتغلها أو محتاجها على الفيسبوك وفجأة تلاقيها قُدامك على صفحة عمال مصر؟ إحنا في عمال مصر بنقولك متفكرش كتير ولا تلف دا لأن وظيفتك مضمونه في عمال مصر وبمميزات كويسه وحد أدنى مرتب 3500ج وكمان سكن ومواصلات وبدلات وحوافز مننا ..... دا انت كمان برسالة منك على صفحة عمال مصر وتسجل بياناتك تبقا كدة حجزت وظيفة !!!!!!!! طيب مستني إيه....؟؟؟؟؟؟ أرقام التليفونات موجودة تقدر تكلم أي حد من فريق العمل وهيجاوبك على كل استفساراتك. 01101995467 - 01100901209 - 01100922462 - 01050644265"
      ],
      en: []
    }
  }),
  methods: {
    stop() {
      this.$refs.marquee.stop();
    },
    start() {
      this.$refs.marquee.start();
    }
  }
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
marquee span {
  display: inline-flex;
  gap: 10px;
  margin-right: 10px;
  align-items: center;
}

$size: 1.4em;
marquee span:not(:last-of-type):after {
  content: "";
  width: $size;
  height: $size;
  border-radius: 50%;
  border: 2px solid #bb1716;
  padding: 3px;
  display: inline-block;
  background-color: white;
  background-repeat: no-repeat;
  background-image: url("/favicon.ico");
  background-size: contain;
  background-position: center;
}
</style>
