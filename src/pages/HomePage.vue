<template>
  <div class="row">
    <Post v-for="p in posts" :key="p.id" :post="p" />
  </div>
  <div class="row">
    <Banner v-for="b in ads" :key="b.id" :banner="b" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { postsService } from '../services/PostsService.js'
import { AppState } from '../AppState.js'
import { adsService } from '../services/AdsService.js'
export default {
  setup() {
    onMounted(async () => {
      try {
        await postsService.getPosts();
      } catch (error) {
        logger.log(error)
        Pop.toast('You have an error!', error)
      }
    });

    onMounted(async () => {
      try {
        await adsService.getBanners();
      } catch (error) {
        logger.log(error)
        Pop.toast('You have an ad error!', error)
      }
    });

    // onMounted(async () => {
    //   try {
    //     await postsService.likePost();
    //   } catch (error) {
    //     logger.log(error)
    //     Pop.toast('You have a like error!', error)
    //   }
    // })

    onMounted(async () => {
      try {
        await postsService
      } catch (error) {

      }
    })


    return {
      posts: computed(() => AppState.posts)
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  background-color: #eaf4f7;
}
</style>
