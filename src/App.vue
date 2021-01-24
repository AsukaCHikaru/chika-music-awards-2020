<template>
  <div class="app">
    <global-style>
      <global-layout>
        <top />
      </global-layout>
    </global-style>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalStyle from "./components/GlobalStyle.vue";
import GlobalLayout from "./components/GlobalLayout.vue";
import Top from "./pages/Top.vue";

const App = defineComponent({
  name: "App",
  components: {
    GlobalStyle,
    GlobalLayout,
    Top,
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
