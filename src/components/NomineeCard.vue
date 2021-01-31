<template>
  <div class="nominee-card-container">
    <div class="star-wrapper">
      <span :class="{ hide: !nominee.won }">★</span>
    </div>
    <nominee-image :src="nominee.image" :won="nominee.won" />
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
    height: 100px;
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
  .artist,
  .record {
    margin-top: 8px;
  }
  .record.no-feat {
    margin-top: 8px;
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
