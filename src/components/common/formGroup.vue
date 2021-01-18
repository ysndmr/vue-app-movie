
<template>
  <form ref="movieForm" name="movieForm" class="form__group">
    <div class="form__group--container">
      <div class="form__group--image">
      <div style="width: 128px;height: 128px;border:1px solid #d7d5d5" >
      <img height="128" class="" alt="" id="movieImg"
           :src="movies.src == null ? this.$store.state.updateMovie.src : movies.src">  </div>
      <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form__group__input">
      <button class=" " type="button" @click="$refs.file.click()">Choose image</button>
      </div>
    </div>
    <div class="form__group--container" >
      <input :value="this.$store.state.updateMovie.title" @input="movies.title = $event.target.value"
          class="form__group--input"
          type="text"  id="title" name="title" required />
      <span data-placeholder="Movie Name" class="form__group--span">
      </span>
      <span class="message-error" id="spanTitle">Field is required</span>
    </div>

    <div class="form__group--container" >
      <textarea :value="this.$store.state.updateMovie.description" @input="movies.description = $event.target.value"
          class="form__group--input form__group--textarea"
          type="text" id="description"  name="description" required/>
      <span data-placeholder="Movie Description" class="form__group--span">
      </span>
      <span class="message-error" id="spanDescription">Must be at least 35 characters long </span>
      </div>


    <div class="form__group--container" >
      <select name="cars"  class="form__group--input" @change="movieYearChange($event)" id="type">
        <option disabled value="">Please select one</option>
        <option value="Drama">Drama</option>
        <option value="Actions"  selected="selected">Actions</option>
        <option value="Comedy">Comedy</option>
      </select>

      <span data-placeholder="Movie Type" class="form__group--span">
      </span>
    </div>
    <div class="form__group--container">
      <input :value="this.$store.state.updateMovie.stars" @input="movies.stars = $event.target.value"
          class="form__group--input"
          type="text"  id="stars" required/>
      <span data-placeholder="Movie Stars" class="form__group--span">
      </span>
    </div>

    <div class="form__group--container" >
      <input  :value="this.$store.state.updateMovie.year" @input="movies.year = $event.target.value"
          class="form__group--input"
          type="number"  id="year" max="4"/>
      <span data-placeholder="Movie Year" class="form__group--span">
      </span>
      <span class="message-error">Field is required</span>
    </div>

    <div class="form__group--container">
      <a v-on:click.prevent="saveMovie()"
          class="form__group-button style-button" id="submit" v-if="!this.$store.state.editMode"
    >
        + Save Movie
      </a>
      <a href="#" v-on:click.prevent="updateMovie()" v-if="this.$store.state.editMode" @click="$emit('onClose')"
         class="form__group-button style-button"  id="update"
      >
        Update changes
      </a>
      <a class="form__group-button style-button-type2" href="#" v-on:click.prevent="resetForm()">
        Reset Form
      </a>
      <a class="form__group-button style-button-type2" href="#" @click="$emit('onClose')" >
        Close
      </a>
    </div>

  </form>
</template>
<script>
export default {
  data() {
    return {
      elm : null,
      updateDataId : null,
      update:'',
      movies: {
        id : null,
        src: null,
        title: null,
        description: '',
        type: '',
        stars: null,
        year : null
      },
      index:null,
      buttonSend:null,
      validForm : true,
      valid : {
        title: {
          span :null
        },
        description :{
          span : null
        }
      }

    }
  },
  destroyed() {
    this.$store.state.updateMovie = []
  },
  mounted () {
    this.movies = {
      id: this.$store.state.updateMovie.id,
      src : document.getElementById("movieImg").src,
      title : document.getElementById('title').value,
      description: document.getElementById('description').value,
      stars : document.getElementById('stars').value,
      year : document.getElementById('year').value,
      type : document.getElementById('type').value
    }
  },
  methods : {
    onChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file){
      const reader = new FileReader();
      reader.onload = (e) => {
        this.movies.src = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    movieYearChange(e){
      this.movies.type = e.target.value;
    },
    saveMovie(){
      this.valid.title = document.movieForm.title;
      this.valid.description = document.movieForm.description;
      this.valid.title.span = document.getElementById('spanTitle');
      this.valid.description.span = document.getElementById('spanDescription');
      if (this.valid.title.value ==null || this.valid.title.value==""){
        this.valid.title.parentNode.classList.add('invalid');
        this.valid.title.span.style.display = "block";
        this.validForm = true;
        this.$store.state.modalBox = {
          title: 'Error',
          content: "Name can't be blank",
          type: "modal",
          setTimeOut: 3000,
          className : 'scale',
          autoOpen: false,
          modalTypeClass: "error"
        }
        this.$store.dispatch('setModalBox', this.$store.state.modalBox);
        return false;
      } else{
        this.validForm = false;
        this.valid.title.parentNode.classList.remove('invalid');
        this.valid.title.span.style.display = "none";
      }
      //debugger // eslint-disable-line no-debugger
      if(this.valid.description.value.length < 35 ){
        this.valid.description.parentNode.classList.add('invalid');
        this.valid.description.span.style.display = "block";
        this.$store.state.modalBox = {
          title: 'Error',
          content: "Description must be at least 35 characters long and cant be blank.",
          type: "modal",
          setTimeOut: 3000,
          className : 'scale',
          autoOpen: false,
          modalTypeClass: "error"
        }
        this.$store.dispatch('setModalBox', this.$store.state.modalBox);
        this.validForm = true;
      }else{
        this.validForm = false;
        this.valid.description.parentNode.classList.add('invalid');
        this.valid.description.span.style.display = "block";

      }
      //debugger // eslint-disable-line no-debugger
        if(!this.validForm){
          this.valid.title.parentNode.classList.remove('invalid');
          this.valid.title.span.style.display = "none";
          this.valid.description.parentNode.classList.remove('invalid');
          this.valid.description.span.style.display = "none";
          this.movies.id = this.$store.state.movies.length + 1;
          this.$store.dispatch('saveMovie', this.movies);
          this.$store.state.modalBox = {
            title: 'Success',
            content: "You added your movies!",
            type: "alert",
            setTimeOut: 3000,
            className : 'scale',
            autoOpen: false,
            modalTypeClass: "succes"
          }
          this.$store.dispatch('setModalBox', this.$store.state.modalBox);
        }
    },
    resetForm(){
      this.$refs.movieForm.reset()
    },
    updateMovie(){
      this.updateDataId = this.$store.state.movies.findIndex (item => item.id ==  this.$store.state.updateMovie.id)
      this.$store.dispatch('updateMovie', this.updateDataId);
      this.$store.dispatch('saveMovie', this.movies);
      this.$store.state.modalBox = {
        title: 'Success',
        content: "You updated succes!",
        type: "alert",
        setTimeOut: 3000,
        autoOpen: false,
        modalTypeClass: "success"
      }
      this.$store.dispatch('setModalBox', this.$store.state.modalBox);
    }
  }
}
</script>
<style lang="scss">
.message-error{
  display: none;
  position: relative;
  bottom: 25px;
  color: red;
}
.disabled {
  pointer-events: none;
  cursor: default;
}
.form__group{
  &--image{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
    align-items: center;
    button{
      margin-left: 15px;
      letter-spacing: 1px;
      border: 1px solid #ddd;
      outline: none;
      padding: 16px 32px;
      font-size: 12px;
    }
  }
  &--container{
    width: 100%;
    position: relative;
    border-bottom: 2px solid #d7d5d5;
    margin-bottom: 23px;
    &:first-child{
      border-bottom: 0;
    }
    &:last-child{
      margin-top: 0;
      display: flex;
      border-bottom: 0;
      justify-content: space-between;
      a{
        margin-top: 0;
        &:nth-child(2){
          border-color: #d8d5d5;
          color:#d8d5d5;
          &:hover{
            color:#8e8e8e;
            &:before{
              background: #d8d5d5;

            }
          }
        }
      }
    }
  }
  &--input{
    display: block;
    width: 100%;
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
    outline: none;
    border: none;
    height: 45px;
    &:focus{
      + .form__group--span:before{
        width: 100%;
      }
      + .form__group--span:after{
      top: -13px;
      }
  }
  }
  &--textarea{
      min-height: 115px;
      padding-top: 13px;
      padding-bottom: 13px;
  }
  &--span {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    text-align: left;

    &:before, &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0
    }

    &:before {
      bottom: -2px;
      width: 0;
      height: 2px;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
      background: rgba(219, 21, 99, 1);
      background: -webkit-linear-gradient(45deg, #d5007d, #e53935);
      background: -o-linear-gradient(45deg, #d5007d, #e53935);
      background: -moz-linear-gradient(45deg, #d5007d, #e53935);
      background: linear-gradient(45deg, #d5007d, #e53935);
    }

    &:after {
      content: attr(data-placeholder);
      width: 100%;
      top: 0;
      font-size: 13px;
      color: #999999;
      line-height: 1.2;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.4s;
    }
  }
}
.form-group--error {
  animation-name: shakeError;
  animation-fill-mode: forwards;
  animation-duration: .6s;
  animation-timing-function: ease-in-out;
}
.invalid{
  border-color:red
}
.form-group--error .error , .form-group--error + .error{
  display: block;
  color: #E50914;
}
.description .error{
  z-index: 10000;
  position: relative;
}
@keyframes shakeError {
  0% {
    transform: translateX(0); }
  15% {
    transform: translateX(0.375rem); }
  30% {
    transform: translateX(-0.375rem); }
  45% {
    transform: translateX(0.375rem); }
  60% {
    transform: translateX(-0.375rem); }
  75% {
    transform: translateX(0.375rem); }
  90% {
    transform: translateX(-0.375rem); }
  100% {
    transform: translateX(0); } }
</style>