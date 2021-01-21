<template>
<div>
  <div class="modal-title">{{this.$store.state.embedVideoTitle}} Trailer</div>
  <object width="100%" height="333">
    <param name="movie" :value="this.$store.state.embedVideoUrl +'?autoplay=1'">
    <embed :src= "this.$store.state.embedVideoUrl +'?autoplay=1'" type="application/x-shockwave-flash" width="100%" height="333">
  </object>
</div>
</template>

<script>
export default {
name: "trailer",
destroyed() {
  this.$store.state.embedVideoUrl = null,
  this.$store.state.embedVideotitle = null
},
}
</script>

<style scoped>
.modal-title{
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #555;
}
</style>