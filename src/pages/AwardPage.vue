<template>
  <div class="award-page-container">
    <div class="above-title-buffer"></div>
    <award-title :category="category" />
    <div class="below-title-buffer"></div>
    <div class="nominee-container">
      <nominee-card
        v-for="(nominee, index) in nominees"
        :nominee="nominee"
        v-bind:key="index"
      />
    </div>
    <site-footer v-if="category === 'MUSIC_VIDEO'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  ArtistAwardNominee,
  AwardTypes,
  RecordAwardNominee,
} from "../types/award";
import { awardData } from "../constants/awardData";

import AwardTitle from "../components/AwardTitle.vue";
import NomineeCard from "../components/NomineeCard.vue";
import SiteFooter from "../components/SiteFooter.vue";

export default defineComponent({
  name: "AwardPage",
  components: {
    AwardTitle,
    NomineeCard,
    SiteFooter,
  },
  props: {
    category: { type: Object as PropType<AwardTypes> },
  },
  computed: {
    nominees(): (RecordAwardNominee | ArtistAwardNominee)[] {
      return awardData.filter((a) => a.category === this.category);
    },
  },
});
</script>

<style scoped>
.award-page-container {
  height: 100vh;
  padding: 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
}
.above-title-buffer {
  flex-grow: 2;
}
.below-title-buffer {
  flex-grow: 1;
}
.nominee-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 6;
}

@media (min-height: 800px) and (min-width: 1920) {
}

@media (max-width: 414px) {
  .award-page-container {
    padding: 35px 0;
  }

  .nominee-container {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
