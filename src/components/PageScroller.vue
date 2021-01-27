<template>
  <div class="scroller" :class="isAutoScrolling ? 'stop-scroll' : ''">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TOTAL_PAGES } from "../constants/enumConstants";

export default defineComponent({
  name: "PageScroller",
  mounted() {
    this.windowHeight = window.innerHeight;
    this.scroller = document.querySelector(".scroller");
    this.scroller?.addEventListener("scroll", this.handleScroll);
    this.lastPageY = (TOTAL_PAGES - 1) * this.windowHeight;
  },
  destroyed() {
    this.scroller?.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      scroller: document.querySelector(".scroller") || null,
      isAutoScrolling: false,
      thisPageY: 0,
      nextPageY: 0,
      lastPageY: 0,
      currentY: 0,
    };
  },
  methods: {
    handleScroll(e: Event) {
      this.currentY = this.scroller?.scrollTop || 0;
      const scrollDirection = this.currentY > this.thisPageY ? "down" : "up";
      if (!this.isAutoScrolling && this.currentY < this.lastPageY) {
        this.isAutoScrolling = true;
        this.nextPageY =
          scrollDirection === "down"
            ? this.thisPageY + this.windowHeight
            : this.thisPageY - this.windowHeight;
        this.scroller?.scrollTo({ top: this.nextPageY, behavior: "smooth" });
      }
      if (
        (this.isAutoScrolling &&
          scrollDirection === "down" &&
          this.currentY >= this.nextPageY) ||
        (scrollDirection === "up" && this.currentY <= this.nextPageY)
      ) {
        this.scroller?.scrollTo({ top: this.nextPageY, behavior: "auto" });
        this.isAutoScrolling = false;
        this.thisPageY = this.scroller?.scrollTop || 0;
      }
    },
  },
});
</script>

<style scoped>
.scroller {
  max-height: 100vh;
  overflow-y: scroll;
}
.stop-scroll {
  pointer-events: none;
}
</style>
