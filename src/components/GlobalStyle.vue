<template>
  <div class="global-style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const GlobalStyle = defineComponent({
  name: "GlobalStyle",
});

export default GlobalStyle;
</script>

<style>
/* RESETS */
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  height: 100vh;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  /* 1 */
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/

.global-style {
  height: 100%;
  background-color: #1e113c;
  color: #fff;
}
</style>
