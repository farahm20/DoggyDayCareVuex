<template>
  <section id="dogs">
      <h1>Our Dogs</h1>
      <Dog  v-for="dog in dogs" :key="dog.chipNumber" :dog="dog"/>
      
  </section>
</template>

<script>
import Dog from '@/components/Dog'

export default {
    name: 'Dogs',
  
    components:{
        Dog
    },
    computed: {
        dogs() {
            return this.$store.state.dogs;
        }
    }
}
</script>

<style>

    #dogs {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    h2 {
        grid-column: auto / apan 4;
    }
</style>