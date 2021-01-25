<template>
  <div class="top">
    <div class="top-title">
      CHIKA
      <br />
      MUSIC
      <br />
      AWARDS
      <br />
      2020
    </div>
    <div class="top--triangle-bot-wrapper">
      <div class="top--triangle-bot"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

const TopPage = defineComponent({
  name: "TopPage",
});

export default TopPage;
</script>

<style>
.top {
  padding: 70px 0;
  height: 100vh;
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
}
.top--triangle-bot-wrapper {
  position: relative;
  bottom: -24px;
  display: flex;
  justify-content: flex-end;
}

.top--triangle-bot {
  width: 24px;
  border: solid 24px transparent;
  border-top-color: #00938e;
  border-top-width: 41.6px;
}
</style>
