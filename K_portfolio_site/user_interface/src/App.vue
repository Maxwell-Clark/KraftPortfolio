<template>
  <div id="app">
    <template>
      <b-navbar type="is-light">
          <template #start>
             <b-breadcrumb class="ml-3 mt-5" size="is-size-6" type="is-light" align="is-left">
                <b-breadcrumb-item class="breadcrumb" >Ken Kraft</b-breadcrumb-item>
                <b-breadcrumb-item class="breadcrumb" >Leadership and Development</b-breadcrumb-item>
            </b-breadcrumb>
          </template>
          <template #end>
              <b-navbar-item href="#">
                  Home
              </b-navbar-item>
              <b-navbar-item href="#">
                  Manager Moments
              </b-navbar-item>
              <b-navbar-item href="#">
                  Resume
              </b-navbar-item>
              <b-navbar-dropdown label="Info">
                  <b-navbar-item href="#">
                      About
                  </b-navbar-item>
                  <b-navbar-item href="#">
                      Contact
                  </b-navbar-item>
              </b-navbar-dropdown>
          </template>
      </b-navbar>
    </template>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Home/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld, 
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.breadcrumb a{
  color: #606060 !important;
}
/* .nav_bar {
  background-color:#F1FAEE !important;
} */

</style>
