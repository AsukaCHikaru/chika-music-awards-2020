<template>
  <div class="page-footer-wrapper">
    <slot></slot>
    <div class="page-footer">
      <div class="award-name">CHIKA MUSIC AWARDS 2020</div>
      <div class="spread-container">
        <div class="award-archives" v-if="isSpreaded">
          <a
            class="award-archive-link"
            href="https://2019.musicawards.asukachikaru.com"
            rel="noopener noreferrer"
            target="_blank"
            >2019</a
          >
          <a
            class="award-archive-link"
            href="https://2019.musicawards.asukachikaru.com"
            rel="noopener noreferrer"
            target="_blank"
            >2018</a
          >
          <a
            class="award-archive-link"
            href="https://2019.musicawards.asukachikaru.com"
            rel="noopener noreferrer"
            target="_blank"
            >2017</a
          >
          <a
            class="award-archive-link"
            href="https://2019.musicawards.asukachikaru.com"
            rel="noopener noreferrer"
            target="_blank"
            >2012</a
          >
          <a
            class="award-archive-link"
            href="https://2019.musicawards.asukachikaru.com"
            rel="noopener noreferrer"
            target="_blank"
            >2011</a
          >
          <a
            class="award-archive-link"
            href="https://2019.musicawards.asukachikaru.com"
            rel="noopener noreferrer"
            target="_blank"
            >2010</a
          >
          <a
            class="award-archive-link"
            href="https://2019.musicawards.asukachikaru.com"
            rel="noopener noreferrer"
            target="_blank"
            >2009</a
          >
        </div>
        <div class="spread-button-wrapper">
          <button v-on:click="clickSpread">{{ isSpreaded ? "-" : "+" }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AwardPageFooter",
  data() {
    return {
      isSpreaded: false,
    };
  },
  methods: {
    clickSpread() {
      this.isSpreaded = !this.isSpreaded;
    },
  },
});
</script>

<style scoped>
.page-footer {
  position: sticky;
  bottom: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Coda";
  font-size: 20px;
  color: #00938e;
}
.spread-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.award-name {
  margin-right: 10px;
}
.award-archive-link {
  margin: 0 10px;
  color: #75c1dd;
  text-decoration: none;
}
.spread-button-wrapper {
  margin-left: 10px;
  position: relative;
}
button {
  position: relative;
  bottom: 1px;
  color: #75c1dd;
}

@media (min-height: 801px) {
  .page-footer {
    bottom: calc((100vh - 800px - 200px));
  }
}

@media (max-width: 414px) {
  .page-footer {
    font-size: 15px;
    flex-direction: column;
    text-align: center;
    bottom: 32px;
  }
  .award-archive-link {
    margin: 0 4px;
  }
}
</style>
