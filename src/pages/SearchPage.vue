<template>
  <div class="row mt-2">
    <div class="col-12">
      <form @submit.prevent="searchPosts()">
        <div class="form-group d-flex">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            v-model="editable"
          />
          <button class="btn btn-success">Search</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
<Post v-for="p in posts" :key="p.id" :post="p">
  </div>
</template>


<script>
import { postsService } from '../services/PostsService.js'
import { logger } from '../utils/Logger.js'
export default {
  setup() {
    return {
      async searchPosts() {
        try {
          await postsService.searchPosts(editable.value);
        } catch (error) {
          Pop(error.message, "error");
          logger.log(error.message);
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
</style>