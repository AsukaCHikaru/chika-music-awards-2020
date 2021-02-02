<template>
  <div class="nominee-card-container">
    <div class="star-wrapper">
      <span :class="{ hide: !nominee.won }">★</span>
    </div>
    <nominee-image
      :src="nominee.image"
      :won="nominee.won"
      @click="handleYoutubeClick(nominee.youtube)"
    />
    <div class="nominee-info">
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
  inject: ["handleYoutubeClick"],
});
</script>

<style scoped>
.nominee-card-container {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 25px;
}
.nominee-info {
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
  margin-top: 25px;
}

.feat {
  margin-top: 5px;
  font-size: 17px;
}

.record.no-feat {
  margin-top: 50px;
}
.star-wrapper {
  text-align: center;
}
span {
  margin-bottom: 10px;
  font-size: 20px;
  color: #e2bfd4;
}

.hide {
  visibility: hidden;
}

@media (max-width: 414px) {
  .nominee-card-container {
    flex-direction: row;
    height: 80px;
    width: auto;
    margin-top: 8px;
  }
  .nominee-card-container:first-of-type {
    margin-top: 16px;
  }
  .nominee-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    text-align: left;
  }
  h2 {
    font-size: 18px;
    line-height: 1;
  }
  .artist,
  .record {
    margin-top: 4px;
  }
  .feat {
    font-size: 15px;
    line-height: 1;
    margin-top: 0;
  }
  .record.no-feat {
    margin-top: 4px;
  }
  .star-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 8px;
  }
  span {
    font-size: 16px;
  }
}
</style>
