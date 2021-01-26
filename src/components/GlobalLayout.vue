<template>
  <div class="global-layout">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "GlobalLayout",
});
</script>

<style>
.global-layout {
  height: 100%;
  padding: 0 70px;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
