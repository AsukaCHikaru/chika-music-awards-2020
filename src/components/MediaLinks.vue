<template>
  <div class="media-links-container">
    <div class="icon-wrapper youtube" v-if="youtube">
      <a
        v-if="isMobile || category === 'ARTIST'"
        :href="youtube"
        rel="noopener noreferrer"
        target="_blank"
        ><youtube-icon
      /></a>
      <button
        v-if="!isMobile && category !== 'ARTIST'"
        @click="handleYoutubeClick(youtube)"
      >
        <youtube-icon />
      </button>
    </div>
    <div class="icon-wrapper" v-if="spotify">
      <a :href="spotify" rel="noopener noreferrer" target="_blank">
        <spotify-icon />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SpotifyIcon from "./SpotifyIcon.vue";
import YoutubeIcon from "./YoutubeIcon.vue";

export default defineComponent({
  name: "MediaLinks",
  components: {
    SpotifyIcon,
    YoutubeIcon,
  },
  props: {
    youtube: String,
    spotify: String,
    category: String,
  },
  data() {
    const isMobile = window.innerWidth <= 414;

    return {
      isMobile,
    };
  },
  inject: ["handleYoutubeClick"],
});
</script>

<style scoped>
.media-links-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
}
.icon-wrapper {
  display: flex;
  height: 20px;
}
.youtube {
  margin-right: 20px;
}
a,
button {
  display: inline-block;
  height: 20px;
  font-size: 20px;
  line-height: 1;
}

@media (max-width: 414px) {
  .media-links-container {
    margin: 0;
    flex-direction: column;
    justify-content: center;
  }
  .youtube {
    margin-bottom: 16px;
  }
}
</style>
