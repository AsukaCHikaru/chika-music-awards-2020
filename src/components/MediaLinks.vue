<template>
  <div class="media-links-container">
    <div class="youtube-icon-wrapper" v-if="youtube">
      <a :href="youtube" rel="noopener noreferrer" target="_blank">
        <youtube-icon />
      </a>
    </div>
    <div class="spotify-icon-wrapper" v-if="spotify">
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
  },
});
</script>

<style scoped>
.media-links-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.youtube-icon-wrapper {
  margin-right: 15px;
}
</style>
