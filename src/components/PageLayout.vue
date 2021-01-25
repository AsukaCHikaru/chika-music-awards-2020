<template>
  <div class="page-layout">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageLayout",
});
</script>

<style scoped>
.page-layout {
  height: calc(100vh - 70px - 70px);
  margin-bottom: 70px;
}
</style>
