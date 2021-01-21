<template>
<div class="movies__details">
  <div class="modal-title">{{ this.$store.state.updateDetailMovie.title}} Trailer</div>
  <object width="100%" height="333">
    <param name="movie" :value=" this.$store.state.updateDetailMovie.url +'?autoplay=1'">
    <embed :src= "this.$store.state.updateDetailMovie.url +'?autoplay=1'" type="application/x-shockwave-flash" width="100%" height="333">
  </object>
  <div class="movies__details--information">
    <h2>{{ this.$store.state.updateDetailMovie.description}}</h2>
  </div>
  <div class="movies__details--information">
    <span>Stars </span> {{this.$store.state.updateDetailMovie.stars}}
  </div>
  <div class="movies__details--information">
    <span>Year </span> {{this.$store.state.updateDetailMovie.year}}
  </div>
  <div class="movies__details--information">
    <span> Imdb </span> {{this.$store.state.updateDetailMovie.rating}}
  </div>

</div>
</template>

<script>
export default {
name: "trailer",
destroyed() {
 this.$store.state.updateDetailMovie = []
},
}
</script>

<style lang="scss" scoped>
.movies__details{
  &--information{
    display: block;
    margin: 1px 0;
    text-align: left;
    background: rgb(0 0 0);
    padding: 10px;
    color: #fff;
    line-height: 150%;
    span{
      display: inline-block;
      background: #e50914;
      padding: 10px;
      color: #fff;
      font-weight: 700;
    }
  }
}
.modal-title{
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #555;
}
</style>