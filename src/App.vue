<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/Dogs">Our Dogs</router-link>
    </div>
    <router-view  />
  </div>
</template>
<script>

export default {
  name: "App"
  }

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

body {
  background: #eee;
  font-family: 'Open Sans', sans-serif;

}
  #app {
    max-width: 1000px;
    margin: 1rem auto;
  }

</style>

