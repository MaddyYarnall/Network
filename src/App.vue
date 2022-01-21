<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.sidebar {
  height: 100vh;
  background-color: #42afc1;
  margin: 0;
  padding: 0;
  filter: drop-shadow(4px 4px 4px gray);
}
</style>
