<template>
  <!-- <div class="row cover-image"></div> -->
  <div class="row my-4">
    <div class="col-md-9">
      <div class="card shadow cover-image">
        <!-- <img
          src="https://images.pexels.com/photos/1243046/pexels-photo-1243046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          class="sampleimg"
        /> -->
        <h4>{{ profile.name }}</h4>
        <p>
          hello
          <!-- {{ account.bio }} -->
        </p>
        <Post v-for="p in posts" :key="p.id" :post="p" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'
import { onMounted } from '@vue/runtime-core'
import { profileService } from '../services/ProfileService.js'
import { postsService } from '../services/PostsService.js'
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      await profileService.getProfile(route.params.id);
      await postsService.getPosts("?creatorId=" + route.params.id)

    })
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts)
    }
  }
}
</script>


<style lang="scss" scoped>
.sampleimg {
  border-radius: 50%;
  height: 90px;
  width: 90px;
  transform: translate(18px, -46px);
}

.cover-image {
  background-image: v-bind(coverImg);
}
</style>