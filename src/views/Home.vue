<template>
  <section id="home">
      <h1>Welcome to Doggy Daycare</h1>
      <p>We currently taking care of {{ dogCount }} dogs.</p>
  </section>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        dogCount() {
            return this.$store.getters.dogCount;
        }
    }
}
</script>

<style>

</style>