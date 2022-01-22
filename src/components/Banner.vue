<template>
  <div>
    <img
      :src="banner.tall"
      alt=""
      width="200"
      class="m-3 border border-dark border-4"
    />
  </div>
</template>


<script>
export default {
  props: {
    banner: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>