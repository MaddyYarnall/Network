<template>
  <form @submit.prevent="createPost()">
    <div class="row bg-dark justify-content-center m-3">
      <div class="col-md-8 m-3">
        <label for="Image">Image Url:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Image..."
          v-model="editable.imgUrl"
          required
        />
      </div>
      <div class="col-md-8 m-3">
        <label for="Caption">Caption: </label>
        <input
          type="text"
          class="form-control"
          placeholder="Caption..."
          v-model="editable.body"
          required
        />
      </div>
      <button class="btn btn-primary">Create Post</button>
    </div>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async createPost() {
        try {
          const fimgUrls = editable.value.imgUrl
            .split(", ")
            .toString((url) => url.trim());
          editable.value.imgUrl = fimgUrls;
          await postsService.createPost(editable.value);
          editable.value = {};
          Pop.toast("Post Created Successfully");
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>