<template>
  <!-- <div class="row cover-image"></div> -->
  <div class="row my-4">
    <div class="col-md-11">
      <div class="card shadow">
        <img :src="profile.coverImg" alt="" class="coverimage" />
        <h4 class="text-center p-3 needfont">{{ profile.name }}</h4>
        <img :src="profile.picture" alt="" class="profpic m-5" />
        <p class="p-3 boldbio">
          <b>Bio:</b>
          {{ profile.bio }}
        </p>
        <p class="p-2">icon icon icon</p>
      </div>
      <h2 class="card text-center m-4 nameposts">
        {{ profile.name }}'s Posts:
      </h2>
      <Post v-for="p in posts" :key="p.id" :post="p" />
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
.coverimage {
  height: 30vh;
}

.profpic {
  height: 100px;
  width: 100px;
  border-radius: 5%;
}

.needfont {
  font-family: "Zilla Slab", serif;
}

.nameposts {
  font-family: "Zilla Slab", serif;
}

.boldbio {
  font-family: "Zilla Slab", serif;
}
</style>