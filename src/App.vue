<template>
  <div class="app">
    <global-style>
      <page-scroller>
        <youtube-modal>
          <global-layout>
            <top-page />
            <award-page-footer>
              <award-page category="RECORD" />
              <award-page category="NEW_RECORD" />
              <award-page category="ARTIST" />
              <award-page category="COMPOSITION" />
              <award-page category="ACCOMPANIMENT" />
              <award-page category="LYRICS" />
              <award-page category="VOCAL_PERFORMANCE" />
              <award-page category="MUSIC_VIDEO" />
            </award-page-footer>
          </global-layout>
        </youtube-modal>
      </page-scroller>
    </global-style>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlobalStyle from "./components/GlobalStyle.vue";
import GlobalLayout from "./components/GlobalLayout.vue";
import TopPage from "./pages/TopPage.vue";
import AwardPage from "./pages/AwardPage.vue";
import AwardPageFooter from "./components/AwardPageFooter.vue";
import PageScroller from "./components/PageScroller.vue";
import YoutubeModal from "./components/YoutubeModal.vue";

const App = defineComponent({
  name: "App",
  components: {
    GlobalStyle,
    GlobalLayout,
    TopPage,
    AwardPage,
    AwardPageFooter,
    PageScroller,
    YoutubeModal,
  },
});

export default App;
</script>

<style>
.app-root {
  height: 100%;
  overflow-y: hidden;
}
.app {
  height: 100%;
  overflow-y: hidden;
}
</style>
