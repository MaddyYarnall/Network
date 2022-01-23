<template>
  <div class="sidebar">
    <div>
      <!-- <div v-if="!user.isAuthenticated"> -->
      <img
        :src="user.picture"
        alt=""
        class="accpicture p-2 selectable"
        @click="goToAccount"
      />
      <h5 class="p-2">{{ user.name }}</h5>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  setup() {
    return {
      user: computed(() => AppState.user)
    }
  }
}
</script>


<style lang="scss" scoped>
.accpicture {
  border-radius: 50%;
  // transform: translate(58px, 20px);
}
</style>