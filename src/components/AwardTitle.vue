<template>
  <div class="title-wrapper">
    <h1>BEST<br />{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AwardTypes } from "../types/award";

export default defineComponent({
  name: "AwardTitle",
  props: {
    category: { type: Object as PropType<AwardTypes>, required: true },
  },
  computed: {
    title(): string {
      return this.category.replace("_", " ").toUpperCase();
    },
  },
});
</script>

<style scoped>
.title-wrapper {
  text-align: right;
}

h1 {
  margin: 0;
  font-family: "Coda";
  font-size: 100px;
  line-height: 1;
  color: #00938e;
}

@media (max-width: 414px) {
  h1 {
    font-size: 28px;
    line-height: 35px;
    white-space: nowrap;
  }
  .title-wrapper {
    margin-left: 24px;
    text-align: left;
  }
}
</style>
