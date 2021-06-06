<template>
  <aside class="aside">
    <h2 class="text-center red">
      عزيزي الزائر لموقع عمال مصر ريح بالك واطلب خدماتك كلها من مكان واحد بضغطه
      واحده على الخدمه المطلوبه

      <i class="fas fa-hand-point-down yellow--text text-center pointer"></i>
    </h2>
    <ul>
      <li>
        <div>
          لخدمة توريد العماله
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمة توريد اليونيفورم
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمه توريد المستلزمات الطبية
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمه تسويق المنتجات الصناعية
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمه دراسات الجدوى الاقتصاديه
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمه تمويل المشروعات والشراكه
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمه الاستيراد والتصدير
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمه الرعايه الطبيه
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمه الاعلان في جريدة عمال مصر
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          لخدمه خدمه الانشاءات الهندسه
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
      <li>
        <div>
          سجل فكرة مشروعك
          <nuxt-link to="/">إضغط هنا</nuxt-link>
        </div>
      </li>
    </ul>

    <address class="red text-center">
      عنوان المجموعة
      <br />
      6اكتوبر - المنطقه الصناعية -
      <br />
      مجمع سي بي سي الصناعي - بوابه 3 - قطعه 92و93
    </address>
  </aside>
</template>

<script>
export default {
  name: "RightSide"
};
</script>

<style lang="scss" scoped>
.aside {
  border-left: 5px solid #000002;

  h2 {
    padding: 10px;
  }

  .red {
    background: transparent !important;
    color: $red !important;
  }

  .pointer {
    display: block;
    font-size: 2.5em;
    text-shadow: 0 0 4px #333;
    transform: rotatey(180deg);
  }

  ul {
    border-bottom: 8px solid #4f4f4f;

    li {
      display: flex;
      gap: 10px;
      align-items: center;

      &::before {
        content: "";
        width: 1em;
        height: 1em;
        background: $red;
        display: block;
      }

      a::after,
      a::before {
        content: '"';
      }
    }
  }
}
</style>
