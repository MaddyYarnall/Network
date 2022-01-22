<template>
  <div class="sidebar">
    <div>
      <!-- <div v-if="!user.isAuthenticated"> -->
      <img :src="account.picture" alt="" class="accpicture p-2" />
      <h5 class="p-2">{{ account.name }}</h5>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
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