<template>
  <div class="login">
    <h2 class=" ma-auto pa-1 red darken-3 white--text text-center">
      تسجيل عضويه في عمال مصر
    </h2>

    <form class="white pa-1 my-1">
      <label>الرجاء إدخال اسم الاشتراك وكلمة السر للدخول</label>
      <hr />
      <div class="row my-3">
        <label class="col-4" for="username">اسم المستخدم:</label>
        <div class="col-8"><input type="text" id="username" /></div>
      </div>
      <div class="row my-3">
        <label class="col-4" for="password">كلمه السر:</label>
        <div class="col-8"><input type="text" id="password" /></div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <nuxt-link to="/">لقد نسيت كلمه السر</nuxt-link>
        </div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <input id="remember" type="checkbox" />
          <label for="remember">ادخلني بشكل الي عند زيارتي مره اخرى</label>
          <br />
          <div class="row">
            <div class="col-6">
              <v-btn color="primary" type="submit" class="btn">دخول</v-btn>
            </div>
            <div class="col-4">
              <v-btn color="primary" to="/" block class="btn">انشاء حساب</v-btn>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="scss" scoped>
.login {
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 8px;

  h2 {
    display: inline-block;
  }

  form {
    input[type="text"] {
      background: #eee;
      padding: 2px 4px;
    }
    [type="checkbox"] {
      height: 1em;
    }

    label {
      cursor: pointer;
      user-select: none;
    }

    .btn {
      font-size: 1em;
      padding: 4px;
      height: auto;
      min-width: 0;
    }
  }
}
</style>
