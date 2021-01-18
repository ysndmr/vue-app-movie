<template>
  <div id="app">
    <div class="bg"></div>
    <app-header />
    <transition name="fade" mode="out-in" appear>
       <router-view/>
    </transition>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Header from './components/shared/Header.vue'
import "./assets/external/easy-modal-alert.min.js"

export default {
  name: 'App',
  data: function () {
    return {
      selectedComponents: Home
    };
  },
  components: {
    appHeader: Header
  }
}
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}
                      .fade-enter,
                      .fade-leave-to{
                      opacity: 0}

#app {
  font-family: Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
.bg{
  position: fixed;
  width: 100%;
  height:100%;
  left:0;
  top:0;
  z-index:-1;
  background-image: linear-gradient(to top, #000000, #3c101b, #740c25, #ae0025, #e50914);}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
