<template>
  <img
    :class="won ? 'won' : ''"
    :srcset="`assets/${src}, assets/${src2x} 1.5x, assets/${src3x} 2x`"
    :alt="src.replace('.jpg', '')"
    loading="lazy"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NomineeImage",
  props: {
    src: { type: String, required: true },
    won: { type: Boolean, required: true },
  },
  computed: {
    src2x(): String {
      return this.src.replace(".jpg", "@2x.jpg");
    },
    src3x(): String {
      return this.src.replace(".jpg", "@3x.jpg");
    },
  },
});
</script>

<style scoped>
img {
  height: 200px;
  width: 200px;
  border: solid 1px #00938e;
  cursor: pointer;
}
.won {
  border-color: #e2bfd4;
}

@media (max-width: 414px) {
  img {
    height: 100px;
    width: 100px;
  }
}
</style>
