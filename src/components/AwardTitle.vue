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
  font-size: 110px;
  line-height: 124px;
  color: #00938e;
}
</style>
