<template>
  <div class="app">
    <global-style> hello world test </global-style>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalStyle from "./components/GlobalStyle.vue";

const App = defineComponent({
  name: "App",
  components: {
    GlobalStyle,
  },
});

export default App;
</script>

<style>
.app-root {
  height: 100%;
}
.app {
  height: 100%;
}
</style>
