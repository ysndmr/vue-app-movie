<template>
  <div class="image__hero moviexfly">

    <div class="this.slideGrouphow-container" style="  height: 100vh;position: relative">
      <div class="image__hero--item fade" v-for="movie in this.$store.state.soonMovies" v-bind:key="movie.id">
        <div class="image__hero--bg" v-bind:style="{ backgroundImage: 'url(' + movie.src + ')' }"></div>

        <div class="image__hero--title">
          <span>Coming in</span><time>{{movie.when}}</time>
          <h1>{{movie.title}}</h1>
          <p>{{movie.description}}</p>
          <strong>Starring : {{movie.stars}}</strong>
          <a href="#"  v-on:click.prevent="openModalTrailer($event)" :data-title="movie.title" :data-id="movie.url" class="style-button"> Watch Trailer</a>
        </div>
      </div>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>

    <div style="text-align:center;position: relative;top: -180px;">

      <span  class="smallSlider" :class="{ 'active': index === 0 }" v-for="(movie, index)  in this.$store.state.soonMovies" v-bind:key="movie.id" @click="currentSlide(index+1
      )" ><img :src="movie.src" alt=""></span>

    </div>
    <ModalRoot />
  </div>
</template>

<script>
import {ModalBus} from "@/eventBus";
import ModalRoot from '@/components/ModalRoot';
import Trailer from '@/components/common/Trailer';

export default {
  name: 'Home',
  components : {
    ModalRoot
  },
  data(){
    return{
      sliderIn : 1,
      slideGroup  : null,
      smallGroup : null,
    }
  },
  methods : {
    openModalTrailer(event){
      this.$store.state.embedVideoUrl = event.target.getAttribute('data-id');
      this.$store.state.embedVideoTitle = event.target.getAttribute('data-title');
      ModalBus.$emit('open', { component: Trailer })
    },
    plusSlides(item) {
      this.showSlides(this.sliderIn += item);
    },
    currentSlide(item) {
      this.showSlides(this.sliderIn = item);
    },
    showSlides(item) {
      this.slideGroup = document.getElementsByClassName("image__hero--item");
      this.smallGroup = document.getElementsByClassName("smallSlider");
      if (item > this.slideGroup.length) {this.sliderIn = 1}
      if (item < 1) {this.sliderIn = this.slideGroup.length}
      for (let i = 0; i < this.slideGroup.length; i++) {
        this.slideGroup[i].style.display = "none";
      }
      for (let i = 0; i < this.smallGroup.length; i++) {
        this.smallGroup[i].className = this.smallGroup[i].className.replace(" active", "");
      }
      this.slideGroup[this.sliderIn-1].style.display = "block";
      this.smallGroup[this.sliderIn-1].className += " active";
    }
  }
}

</script>
<style lang="scss">
header.header{
  position: relative;
  z-index: 3;
}
.image__hero{
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -webkit-box-direction: normal;
  -moz-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -ms-flex-direction: column;
  position: relative;
  &--item{
    background: linear-gradient(to right, #000000 25%, transparent 100%);
    height: 100%;
    position: relative;
    overflow: hidden;
    top: -80px;
    display: none;
    &:first-child{
      display: block;
    }
  }
  &--title{
    line-height: 150%;
    width: 75%;
    text-align:left;
    bottom:140px;
    left:60px;
    position: absolute;
    h1{
      background: rgba(0, 0, 0, 0.4);
      padding: 10px;
      width: 55%;
      display: block;
    }
    time{
      background: #E50914;
      padding: 10px;
    }
    span{
      display: inline-block;
      padding:0 5px
    }
    p{
      text-transform: uppercase;
      padding-left: 6px;
      border-left: 2px solid #E50914;
    }
    strong {
      display: block;
      margin:10px 0
    }
  }
  &--bg{
    background-position: top;
    background-size: cover;
    position: absolute;
    top: 0;
    height: 100vh;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    animation: 30s ease 0s normal none infinite running zoomEffect;
    -webkit-animation: 30s  ease 0s normal none infinite running zoomEffect;
    -o-animation: 30s ease 0s normal none infinite running zoomEffect;
  }
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 40px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  .prev{
    left:0
  }
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
  }
  .smallSlider {
    cursor: pointer;
    width: 100px;
    border: 2px solid transparent;
    margin: 0 5px;
    display: inline-block;
    transition: background-color 0.6s ease;
    img{
      width: 100%;
      height: auto;
    }
  }

  .active, .smallSlider:hover {
    border-color: #E50914;
  }
}
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
@keyframes zoomEffect {
  from {transform: scale(1, 1)}
  to {transform: scale(1.8)}
}
</style>
