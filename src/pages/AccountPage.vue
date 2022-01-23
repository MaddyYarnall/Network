<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
  </div>
  <Create-post />
  <div>
    <h3 class="profileinfo mt-4 mx-3">Profile Info:</h3>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.profileinfo {
  font-family: "Zilla Slab", serif;
  font-weight: 700;
}
</style>
