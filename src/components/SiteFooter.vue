<template>
  <footer>
    <div>
      <a
        href="https://asukachikaru.com"
        rel="noopener noreferrer"
        target="_blank"
        >asukachikaru.com</a
      >
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SiteFooter",
});
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 25px;
  width: 100%;
}
div {
  text-align: center;
}
a {
  color: #00938e;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 15px;
  line-height: 1;
}
@media (min-height: 801px) {
  footer {
    bottom: calc(100vh - 800px - 200px - 45px);
  }
}

@media (max-width: 414px) {
  footer {
    bottom: 16px;
  }
}

@media (max-width: 375px) {
  footer {
    bottom: 8px;
  }
}
</style>
