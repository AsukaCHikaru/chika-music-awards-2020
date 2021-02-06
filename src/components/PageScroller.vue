<template>
  <div
    class="scroller"
    :class="isAutoScrolling && !isWin ? 'stop-scroll' : ''"
    @scroll="handleScroll"
    @touchmove="handleTouchMove"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TOTAL_PAGES } from "../constants/enumConstants";

const duration = 300;

export default defineComponent({
  name: "PageScroller",
  mounted() {
    this.windowHeight = window.innerHeight;
    this.stepHeight = this.windowHeight / 50;
    this.scroller = document.querySelector(".scroller");
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
      stepHeight: 0,
      scroller: document.querySelector(".scroller"),
      isAutoScrolling: false,
      currentY: 0,
      pageYs: [] as number[],
      currentPage: 0,
      nextPage: 1,
      isWin: navigator.platform.includes("Win"),
      prevTouchY: undefined as number | undefined,
      scrollStartTime: undefined as DOMHighResTimeStamp | undefined,
      direction: undefined as number | undefined, // 1 = scroll down, -1 = scroll up
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
        if (this.currentY > this.pageYs[this.currentPage]) {
          this.nextPage = this.currentPage + 1;
          this.direction = 1;
        }
        if (this.currentY < this.pageYs[this.currentPage]) {
          this.nextPage = this.currentPage - 1;
          this.direction = -1;
        }
        if (
          this.pageYs[this.nextPage] === undefined ||
          this.nextPage === this.currentPage
        ) {
          return;
        }
        this.isAutoScrolling = true;
        window.requestAnimationFrame(this.scrollTo);
      }
    },
    handleTouchMove(e: TouchEvent) {
      if (!this.scroller) {
        return;
      }
      const currentTouchY = e.touches[0].screenY;

      // start
      if (!this.isAutoScrolling) {
        if (this.prevTouchY && this.prevTouchY < currentTouchY) {
          if (this.currentPage === 0) {
            this.prevTouchY = undefined;
            return;
          }
          this.nextPage = this.currentPage - 1;
          this.direction = -1;
        }
        if (this.prevTouchY && this.prevTouchY > currentTouchY) {
          if (this.currentPage === TOTAL_PAGES - 1) {
            this.prevTouchY = undefined;
            return;
          }
          this.nextPage = this.currentPage + 1;
          this.direction = 1;
        }
        this.prevTouchY = currentTouchY;
        if (this.direction === undefined) {
          return;
        }

        this.isAutoScrolling = true;
        window.requestAnimationFrame(this.scrollTo);
      }
    },
    scrollTo(timestamp: DOMHighResTimeStamp) {
      if (!this.scroller || !this.direction) {
        return;
      }
      if (this.scrollStartTime === undefined) {
        this.scrollStartTime = timestamp;
      }
      const elapsedTime = timestamp - this.scrollStartTime;
      const progress = Math.min(elapsedTime / duration, 1);
      this.scroller.scrollTop =
        this.pageYs[this.currentPage] +
        this.stepHeight * progress * 50 * this.direction;
      if (elapsedTime < duration) {
        window.requestAnimationFrame(this.scrollTo);
      } else {
        this.scrollStartTime = undefined;
        this.prevTouchY = undefined;
        this.currentPage = this.nextPage;
        this.direction = undefined;
        this.isAutoScrolling = false;
      }
    },
  },
  provide() {
    return { height: this.windowHeight };
  },
});
</script>

<style scoped>
.scroller {
  height: 100vh;
  overflow-y: scroll;
}
.stop-scroll {
  pointer-events: none;
  overflow-y: hidden;
}
span {
  position: fixed;
  color: #ffffff;
  top: 10px;
  left: 10px;
}
</style>
