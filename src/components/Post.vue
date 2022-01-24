<template>
  <div class="col-md-12 d-flex justify-content-center">
    <!-- {{ post.body }} -->
    <div class="card mt-4 shadow" style="width: 30rem">
      <h4 class="mx-2 creatorname">{{ post.creator.name }}</h4>
      <img
        :src="post.creator.picture"
        class="selectable creator-image mx-2 my-2"
        @click="goToProfile()"
      />
      <div>
        <img :src="post.imgUrl" alt="" class="img-fluid" />
        <p class="postbody p-3">{{ post.body }}</p>
        <p>Created At: {{ post.createdAt }}</p>
        <p class="mdi mdi-heart">Liked By:</p>
      </div>
    </div>
  </div>

  <i
    v-if="post.creatorId == account.id"
    @click="removePost"
    class="mdi mdi-trash-can selectable"
  ></i>
</template>


<script>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router'
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';
import { logger } from '../utils/Logger.js';
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      account: computed(() => AppState.account),
      async goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.post.creatorId },
        });
      },
      async removePost() {
        try {
          await postsService.removePost(props.post.id);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error.message);
        }
      },

    };
  },
};
</script>

<style lang="scss" scoped>
.creator-image {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

.postimage {
  object-fit: contain;
  margin: 0;
}

.creatorname {
  font-family: "Zilla Slab", serif;
  font-weight: bold;
}

.postbody {
  font-family: "Nanum Myeongjo", serif;
}
</style>