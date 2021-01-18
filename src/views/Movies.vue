<template>
  <div class="home container moviexfly">
    <div class="container__list">
      <div class="container__list--item"  v-for="movie in this.$store.state.movies" v-bind:key="movie.id">
        <div class="container__list--information">
          <div class="container__list--title">
            <h1>{{ movie.title }}</h1>
            <h4>{{ movie.year }}, {{ movie.stars }}, {{movie.rating}}<small>/10</small></h4>
            <span>{{ movie.totalTime }}</span>
            <p>{{movie.type}}</p>
          </div>
          <div class="container__list--description">
            <p>
              {{movie.description}}
            </p>
            <a href="#" class="style-button">Watch Now</a>
          </div>
        </div>
        <div class="container__list--cover" v-bind:style="{ backgroundImage: 'url(' + movie.src + ')' }"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  &__list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 0.3rem;
    &--item{
      position: relative;
      display: block;
      min-height: 25rem;
      overflow: hidden;
      transition: all 0.4s;
      &:hover{
        cursor: pointer;
        .container__list--cover{
          animation: 10s ease 0s normal none infinite running zoomEffect;
          -webkit-animation: 10s  ease 0s normal none infinite running zoomEffect;
          -o-animation: 10s ease 0s normal none infinite running zoomEffect;
          -moz--o-animation: 10s  ease 0s normal none infinite running zoomEffect
        }
      }
    }
    &--information{
      position: relative;
      width: 100%;
      height: 100%;
      background-blend-mode: multiply;
      z-index: 2;
      background: linear-gradient(to right, #000000 25%, transparent 100%);
      text-align: left;
      padding:40px 20px
    }
    &--title{
      position: relative;
      padding: 25px;
      width: 65%;
      h1, h4{
        font-weight: 700;
      }
      h1{
        color: #fff;
        font-size: 2.8rem;
        letter-spacing: -2px;
        margin-top: 10px;
        text-shadow: 2px 2px 2px #4e3c3c;
      }
      h4{
        color:#fff
      } span{
          display: inline-block;
          margin-top: 15px;
          color: #000;
          padding: 5px;
          border: 1px solid #fff;
          background-color: #fff;
        }
      p{
        display: inline-block;
        color: #fff;
        margin-left: 10px;

      }
    }
    &--description{
      padding: 15px 25px;
      height: 50%;
      width: 65%;
      p{
        color: #fff;
        line-height: 150%;
        font-size: 1rem;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        padding-left: 15px;
        border-left: 2px solid #E50914;
      }
    }
    &--cover{
      position: absolute;
      top: 0;
      z-index: 1;
      height: 100%;
      right: 0;
      background-size: cover;
      width: 80%;
      background-position: 50% 50% !important;
    }
  }
}
</style>
