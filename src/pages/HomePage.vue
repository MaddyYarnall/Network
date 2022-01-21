<template>
  <div class="row">
    <Post v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { postsService } from '../services/PostsService.js'
import { AppState } from '../AppState.js'
export default {
  setup() {
    onMounted(async () => {
      try {
        await postsService.getPosts();
      } catch (error) {
        logger.log(error)
        Pop.toast('You have an error!', error)
      }
    })
    return {
      posts: computed(() => AppState.posts)
    };
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
