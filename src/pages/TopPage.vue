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
  position: relative;
}

.top-title {
  position: relative;
  font-weight: 900;
  font-size: 128px;
  font-family: "Coda";
  line-height: 137.5px;
  color: #00938e;
  text-align: right;
  animation: fadein 0.5s linear;
}

@keyframes fadein {
  0% {
    opacity: 0.1;
    transform: translateX(-50px);
  }
  20% {
    opacity: 0.2;
  }
  30% {
    opacity: 0.3;
  }
  60% {
    transform: translateX(-15px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    opacity: 0.7;
    transform: translateX(-5px);
  }
  90% {
    opacity: 0.9;
    transform: translateX(-2px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
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
    padding-top: 100px;
  }
  .top-title {
    font-size: 70px;
    line-height: 1.5;
  }
}
</style>
