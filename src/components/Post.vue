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
</template>


<script>
import { useRouter } from 'vue-router'
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
      async goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.post.creatorId },
        });
      },
      router,
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