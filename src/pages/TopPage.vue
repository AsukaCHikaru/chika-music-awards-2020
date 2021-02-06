<template>
  <div class="top" :style="{ height: `${height}px` }">
    <div class="top-title">
      CHIKA
      <br />
      MUSIC
      <br />
      AWARDS
      <br />
      2020
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

const TopPage = defineComponent({
  name: "TopPage",
  inject: ["height"],
});

export default TopPage;
</script>

<style>
.top {
  padding: 50px 0;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-title {
  font-weight: 900;
  font-size: 128px;
  font-family: "Coda";
  line-height: 137.5px;
  color: #00938e;
  text-align: right;
  animation: fadein 0.9s linear;
}

@keyframes fadein {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 0.4;
  }
  30% {
    opacity: 0.55;
  }
  40% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.8;
  }
  60% {
    opacity: 0.85;
  }
  70% {
    opacity: 0.9;
  }
  80% {
    opacity: 0.95;
  }
  100% {
    opacity: 1;
  }
}
@media (min-height: 1000px) {
  .top-title {
    font-size: 15vh;
    line-height: 1.1;
  }
}

@media (max-width: 414px) {
  .top {
    padding-top: 140px;
  }
  .top-title {
    font-size: 70px;
    line-height: 1.5;
  }
}
</style>
