<template>
  <div id="app">
    <template id="nav">
      <b-navbar type="is-light">
          <template #start>
             <b-breadcrumb class="ml-3 mt-5" size="is-size-6" type="is-light" align="is-left">
                <b-breadcrumb-item class="breadcrumb has-text-weight-bold" >Ken Kraft</b-breadcrumb-item>
                <b-breadcrumb-item class="breadcrumb" >Leadership and Development</b-breadcrumb-item>
            </b-breadcrumb>
          </template>
          <template #end>
              <b-navbar-item href="#">
                   <router-link class="has-text-dark" to="/">Home</router-link>
              </b-navbar-item>
              <b-navbar-item href="#">
                   <router-link class="has-text-dark" to="/blog">Manager Moments</router-link>
              </b-navbar-item>
              <b-navbar-item href="#">
                   <router-link class="has-text-dark" to="/resume">Resume</router-link>
              </b-navbar-item>
              <b-navbar-dropdown class="has-text-dark" label="Info">
                  <b-navbar-item href="#">
                       <router-link class="has-text-dark" to="/aboutme">About</router-link>
                  </b-navbar-item>
                  <b-navbar-item href="#">
                       <router-link class="has-text-dark" to="/aboutme">Contact</router-link>
                  </b-navbar-item>
              </b-navbar-dropdown>
          </template>
      </b-navbar>
    </template>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.breadcrumb a{
  color: #606060 !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
