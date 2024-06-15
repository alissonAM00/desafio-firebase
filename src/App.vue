<template>
  <nav class="fs-3">
    <router-link to="/">Home</router-link>
    
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
 

}
</script>


<style lang="scss">
#app {
  background-color: rgb(25, 93, 99);
  text-align: center;
  font-family: 'Imbue', sans-serif;
 
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #284869;

    &.router-link-exact-active {
      color: #fafafa;
    }
  }
}
</style>
