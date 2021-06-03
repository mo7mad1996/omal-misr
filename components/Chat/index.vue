<template>
  <div class="Chat-container">
    <!-- chat content -->
    <div class="chat-box" v-if="chatOpen">
      <h2 class="text-center">Chat Box</h2>
      <div class="chat-content">
        <ChatContent />
        <ChatForm />
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
      chatOpen: false
    };
  },
  methods: {
    toggleChat() {
      this.chatOpen = !this.chatOpen;
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
    background: white;
    margin-bottom: 10px;
    animation: up 0.4s ease;
    width: min(400px, 80vw);
    height: 60vh;
    display: flex;
    flex-direction: column;
    max-height: 100%;

    .chat-content {
      font-family: "Amiri", serif;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      overflow: hidden;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background-image: linear-gradient(white, transparent);
      }
    }
  }
}
</style>
