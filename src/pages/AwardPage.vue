<template>
  <div class="award-page-container">
    <award-title :category="category" />
    <div class="nominee-container">
      <nominee-card
        v-for="(nominee, index) in nominees"
        :nominee="nominee"
        v-bind:key="index"
      />
    </div>
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

export default defineComponent({
  name: "AwardPage",
  components: {
    AwardTitle,
    NomineeCard,
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
}
.nominee-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (min-height: 801px) {
  .nominee-container {
    margin-top: calc((100vh - 800px - 200px) / 2);
  }
}
</style>
