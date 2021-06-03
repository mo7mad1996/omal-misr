<template>
  <div class="ChatContent">
    <ul class="flow" ref="messages">
      <li class="from"><img src="/favicon.ico" /> <span>from</span></li>
      <li class="to"><span>to </span></li>
      <li class="from"><img src="/favicon.ico" /> <span>from</span></li>
      <li class="to"><span>to </span></li>
      <li class="from"><img src="/favicon.ico" /> <span>from</span></li>
      <li class="to"><span>to </span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChatContent",
  mounted() {
    this.$refs.messages.scrollTop = this.$refs.scrollHeight;
  }
};
</script>

<style lang="scss" scoped>
.ChatContent {
  max-height: 100%;
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .flow {
    padding-top: 70px;

    li {
      width: 80%;
      margin: 5px;
      display: flex;
      gap: 7px;

      span {
        padding: 5px 10px;
        border-radius: 20px;
      }
    }
    .to {
      margin-right: auto;
      justify-content: flex-end;

      span {
        background: rgb(96, 99, 96);
        text-align: left;
        color: white;
      }
    }

    .from {
      margin-left: auto;

      span {
        background: rgb(75, 125, 218);
      }

      img {
        height: 2em;
        width: 2em;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid #333;
        object-fit: cover;
      }
    }
  }
}
</style>
