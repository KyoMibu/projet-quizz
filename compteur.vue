<template>
  <p>Score: {{ countScore.length }} / 10</p>
</template>

<script>

export default {
  data() {
    
  },
  props: ['answers'],
  computed: {
    countScore() {
      return this.answers.filter( answer => true );
    }
  }
}
</script>

<style scoped>

</style>
