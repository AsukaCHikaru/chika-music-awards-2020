<template>
  <div class="nominee-card-container">
    <span :class="{ hide: !nominee.won }">★</span>
    <nominee-image :src="nominee.image" :won="nominee.won" />
    <h2 class="artist" :class="{ won: nominee.won }">{{ nominee.artist }}</h2>
    <h3 class="feat" v-if="nominee.feat" :class="{ won: nominee.won }">
      {{ nominee.feat }}
    </h3>
    <h2
      class="record"
      :class="{ won: nominee.won, 'no-feat': !nominee.feat }"
      v-if="nominee.category !== 'ARTIST'"
    >
      "{{ nominee.title && nominee.title }}"
    </h2>
    <media-links :youtube="nominee.youtube" :spotify="nominee.spotify" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ArtistAwardNominee, RecordAwardNominee } from "../types/award";
import MediaLinks from "./MediaLinks.vue";
import NomineeImage from "./NomineeImage.vue";

export default defineComponent({
  name: "NomineeCard",
  components: {
    MediaLinks,
    NomineeImage,
  },
  props: {
    nominee: {
      type: Object as PropType<RecordAwardNominee | ArtistAwardNominee>,
      required: true,
    },
  },
});
</script>

<style scoped>
.nominee-card-container {
  display: flex;
  flex-direction: column;
  width: 248px;
  text-align: center;
}

.won {
  border-color: #e2bfd4;
  color: #e2bfd4;
}

h2,
h3 {
  margin: 0;
  font-weight: 300;
  font-family: "Roboto";
  color: #00938e;
  font-size: 20px;
  line-height: 20px;
}

.artist,
.record {
  margin-top: 15px;
}

.feat {
  margin-top: 5px;
  font-size: 18px;
}

.record.no-feat {
  margin-top: 40px;
}

span {
  margin-bottom: 15px;
  font-size: 20px;
  color: #e2bfd4;
}

.hide {
  visibility: hidden;
}
</style>
