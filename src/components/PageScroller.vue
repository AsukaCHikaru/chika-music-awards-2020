<template>
  <div class="scroller" :class="isAutoScrolling ? 'stop-scroll' : ''">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TOTAL_PAGES } from "../constants/enumConstants";

type ScrollDirection = "up" | "down";

export default defineComponent({
  name: "PageScroller",
  mounted() {
    this.windowHeight = window.innerHeight;
    this.scroller = document.querySelector(".scroller");
    this.scroller?.addEventListener("scroll", this.handleScroll);
    this.pageYs = Array(TOTAL_PAGES)
      .fill(0)
      .map((_, index) => index * this.windowHeight);
  },
  destroyed() {
    this.scroller?.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      scroller: document.querySelector(".scroller") || null,
      isAutoScrolling: false,
      currentY: 0,
      pageYs: [] as number[],
      currentPage: 0,
      nextPage: 1,
    };
  },
  methods: {
    handleScroll() {
      if (!this.scroller) {
        return;
      }

      this.currentY = Math.ceil(this.scroller.scrollTop);

      // start
      if (!this.isAutoScrolling) {
        if (this.currentY > this.pageYs[this.currentPage])
          this.nextPage = this.currentPage + 1;
        if (this.currentY < this.pageYs[this.currentPage])
          this.nextPage = this.currentPage - 1;
        if (this.pageYs[this.nextPage] === undefined) {
          return;
        }
        this.isAutoScrolling = true;
        this.scroller.scrollTo({
          top: this.pageYs[this.nextPage],
          behavior: "smooth",
        });
      }

      // end
      if (
        this.isAutoScrolling &&
        this.currentY === this.pageYs[this.nextPage]
      ) {
        this.currentPage = this.nextPage;
        this.isAutoScrolling = false;
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
