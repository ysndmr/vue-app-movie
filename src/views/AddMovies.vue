<template>
  <div class="add-movies">

    <div class="space-between">
      <input type="text" name="search" placeholder="Filter search..." id="filterSearch" v-model="search" />
      <Button class="style-button" @click="openFormGroup">
        + Add Movie
      </Button>
    </div>
    <table>
      <tr>
        <th>Movie Image</th>
        <th>Movie Name</th>
        <th>Movie Description</th>
        <th>Movie Stars</th>
        <th>Movie Type</th>
        <th>Movie Year</th>
        <th colspan="2">Actions</th>
      </tr>

      <tr v-for="(movie, index) in filteredMovies" v-bind:key="movie.id">
        <td><img :src="movie.src" :alt="movie.title"> </td>
        <td>{{movie.title}}</td>
        <td>{{movie.description}}</td>
        <td>{{movie.stars}}</td>
        <td>{{movie.type}}</td>
        <td>{{movie.year}}</td>
        <td><a href="#" class="style-button" @click="openFormGroupUpdate" v-on:click.prevent="updateMovie(movie)">Update</a></td>
        <td><a href="#" class="style-button"  v-on:click.prevent="deleteMovie(index)">Delete</a></td>
      </tr>
    </table>
    <ModalRoot />
  </div>

</template>


<script>
import { ModalBus } from '@/eventBus'
import ModalRoot from '@/components/ModalRoot'
import FormGroup from '@/components/common/formGroup'


export default {
  name: "AddMovies",
  components : {
    ModalRoot
  },
  data(){
    return{
      editMode : false,
      search:''
    }
  },
  computed : {
    filteredMovies: function (){
      return this.$store.state.movies.filter((movie) =>{
        return movie.title.match(this.search.toUpperCase())
      })
    }
  },
  methods: {
    openFormGroup () {
      this.$store.state.editMode = false;
      ModalBus.$emit('open', { component: FormGroup, title: 'Add Movies' })
    },
    openFormGroupUpdate () {

      ModalBus.$emit('open', { component: FormGroup, title: 'Update Movies', props : this.$store.state.updateMovie })
    },
    updateMovie(movie){
      /* eslint-disable */
      this.$store.state.editMode = true;
      this.$store.state.updateMovie =  {
        id : movie.id,
        title : movie.title,
        description : movie.description,
        stars : movie.stars,
        src : movie.src,
        type : movie.type,
        year : movie.year
      }
    },
    deleteMovie(index){
      this.$store.dispatch('deleteMovie', index);
      this.$store.state.modalBox = {
        title: 'Success',
        content: "You deleted movie!!",
        type: "modal",
        setTimeOut: 3000,
        className : 'scale',
        autoOpen: false,
        modalTypeClass: "succes"
      }
      this.$store.dispatch('setModalBox', this.$store.state.modalBox);
    }

  }
}
</script>

<style lang="scss" scoped>
.add-movies{
  padding: 20px;
  .space-between{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    #filterSearch{
      width: 200px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      font-size: 16px;
      background-color: white;
      background-image: url('https://www.flaticon.com/svg/vstatic/svg/3126/3126554.svg?token=exp=1610917789~hmac=10b0e718e5d97c5f64d2d031e1d790a1');
      background-position: 10px 10px;
      background-repeat: no-repeat;
      background-size: 30px 35px;
      padding: 12px 20px 12px 50px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
      height: 60px;
      margin-top: 25px;
      &:focus {
        width: 30%;
        outline: 0;
      }
    }
  }
}
table{
  display: block;
  width: 100%;
  width: -moz-max-content;
  max-width: 100%;
  overflow: auto;
  table-layout: fixed;
  th{
    &:last-child{
      text-align: center;
    }
  }
  td, th{
    text-align: left;
    padding: 10px 20px;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 1px;
    color: #fff;
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #e50914;
    border-right: 1px solid #e50914;
    vertical-align: middle;
    .style-button{
      padding: 10px;
      margin-top: 0;
      text-transform: none;
      color:#fff
    }
  }
  tr{
    background: rgba(0,0,0,.3);
    cursor: pointer;
    &:hover{
      background: rgba(0,0,0,.6);
    }
  }
  thead {
    background: rgba(0,0,0,.2);
  }
  background: rgba(0,0,0,.2);

  th{
    font-size:1rem
  }
}
td{
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
  &:first-child{
    width: 120px;
  }
  img{
    width: 100%;
    height: auto;
  }
}

</style>