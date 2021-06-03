<template>
  <form @submit.prevent="sendMSG">
    <input placeholder="Type..." autofocus v-model="msg" />
    <v-btn type="submit" class="sendBtn" icon>
      <v-icon>mdi-send</v-icon>
    </v-btn>
  </form>
</template>

<script>
export default {
  name: "ChatForm",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    sendMSG() {
      alert(this.msg);
      this.msg = "";
    }
  }
};
</script>

<style scoped lang="scss">
form {
  direction: ltr;
  display: flex;
  background: white;
  font-family: "Amiri", serif;
  padding: 5px;
  border: 2px solid #333;

  input {
    flex: 1;
    font-family: "Amiri", serif;
    outline: none;
    border-bottom: 2px solid #333;
    display: block;
  }

  .sendBtn {
    //   transform: rotate(-30deg);
    padding: 10px;
  }
}
</style>
