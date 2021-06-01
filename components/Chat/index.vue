<template>
  <div class="Chat-container">
    <!-- chat content -->
    <div class="chat-box" v-if="chatOpen">
      <h2 class="text-center">Chat Box</h2>
      <div class="chat-content">
        <form @submit.prevent="sendMSG">
          <input placeholder="Type..." autofocus v-model="msg" />
          <v-btn type="submit" class="sendBtn" icon>
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </form>
      </div>
    </div>

    <!-- chat button -->
    <button class="openChat" @click="toggleChat">
      <img src="/Chat.png" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      chatOpen: false,
      msg: ""
    };
  },
  methods: {
    toggleChat() {
      this.chatOpen = !this.chatOpen;
    },
    sendMSG() {
      alert(this.msg);
      this.msg = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.Chat-container {
  position: fixed;
  bottom: 10vh;
  right: 1vw;
  z-index: 4;

  .openChat {
    width: 100px;

    img {
      width: 100%;
    }
  }

  .chat-box {
    font-family: "Amiri", serif;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 10px #333, inset 2px 2px 4px #fff;
    background: rgba(255, 255, 255, 0.9);
    margin-bottom: 10px;
    animation: up 0.4s ease;
    width: min(400px, 80vw);
    height: 60vh;
    display: flex;
    flex-direction: column;

    .chat-content {
      font-family: "Amiri", serif;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

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
    }
  }
}
</style>
