<template>
  <div>
    <slot />
    <div class="modal-wrapper" @click="hideModal" v-if="show">
      <div class="modal">
        <iframe :src="url" frameborder="0" allow="autoplay"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YoutubeModal",
  data() {
    return {
      show: false,
      url: "",
    };
  },
  provide() {
    const handleYoutubeClick = (url: string) => {
      this.url = url.replace("/watch?v=", "/embed/");
      this.show = true;
      this.$forceUpdate();
    };

    return { handleYoutubeClick };
  },
  methods: {
    hideModal() {
      this.show = false;
    },
  },
});
</script>

<style scoped>
.modal-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  border: solid 1px #fff;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 50%);
}
.modal {
  margin: 70px auto;
  height: calc(100% - 70px - 70px);
  width: 100%;
  max-width: 1300px;
  max-height: 800px;
  border: solid 2px #00938e;
}
.hide {
  display: none;
}
iframe {
  height: 100%;
  width: 100%;
}
</style>
