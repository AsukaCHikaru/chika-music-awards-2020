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
  padding: 70px;
}
</style>
