<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-6">
        <router-view />
      </div>
      <div class="col-3">
        <Banner v-for="b in banner" :key="b.title" :banner="b" />
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { adsService } from '../src/services/AdsService.js'
export default {
  name: 'App',
  setup() {
    onMounted(async () => {
      try {
        await adsService.getBanners();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.log(error);
      }
    });
    return {
      appState: computed(() => AppState),
      banner: computed(() => AppState.banner)
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
