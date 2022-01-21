<template>
  <div class="col-md-6">
    {{ post.body }}
  </div>
</template>


<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>