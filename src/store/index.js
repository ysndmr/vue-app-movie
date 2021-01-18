
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    updateMovie : [],
    newArray : [],
    editMode : false,
    modalBox : {
      title : '',
        content: "",
        type: "",
        setTimeOut: 3000,
        className : '',
        autoOpen: false,
        modalTypeClass: ""
    },
    soonMovies : [
      {
        title : "Marvel's Jessica Jones",
        stars :"Krysten Ritter,David Tennant,Rachael Taylor",
        description : "Haunted by a traumatic past, Jessica Jones uses her gifts as a private eye to find her tormentor before he can harm anyone else in Hell's Kitchen.",
        when : '2021 March',
        src : 'https://occ-0-435-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcBEokjH4yBUnJcoCerGHuigJArkU_QuqFaD00ho_WT7LdTTNqJRrtmFkDffLLhpy4W6ivi4YUMmHL8OIws2qoZ3okLB.jpg?r=142'
      },
      {
        title : "O Brother, Where art thou?",
        stars :"George Clooney, John Turturro, Tim Blake Nelson",
        description : "Drie gevangenen ontsnappen uit een gevangenis in Mississippi tijdens de Grote Depressie en gaan, in de trant van de Odyssee van Homerus, op zoek naar een verstopte buit..",
        when : '2021 May',
        src : 'https://occ-0-571-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfYF-Mv3FCZ-KAx_nT1x6MusdtHV4ils9lzA_9iIa4KpaFFDBZUVrOAdKxKVcyljVIwEnZRgNkPC5YCG4Ewo1WJS9YO1.webp?r=ae0'
      },
      {
        title : "Line of Duty",
        stars :"Aaron Eckhart, Courtney Eaton, Ben McKenzie ",
        description : "Een in ongenade gevallen agent racet tegen de klok om de dochter van de politiechef te redden van een gestoorde verdachte. Een journaliste livestreamt zijn zoektocht.",
        when : 'Now',
        src : 'https://occ-0-571-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXmEM72XCbajd6NgY_lPVbA9KdKZWawSOAlwmqoucS4P_Yb7MksCkNyNCz9bDW_95k9cn9TEqB7k1Z9Pq67WyQH8YTA-.webp?r=1ec'
      }
    ],
    movies : [
      {
        id: 0,
        title: 'Fight Club',
        src: 'https://images-na.ssl-images-amazon.com/images/I/713OBFnCXjL._AC_SL1414_.jpg',
        type:'Drama',
        description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
        totalTime : '2h 19min',
        year : '1999',
        stars: 'Brad Pitt, Edward Norton',
        rating : '8.9'
      },
      {
        id: 1,
        title: 'Forrest Gump',
        src: 'https://wallpapercave.com/wp/BZnOcTG.jpg',
        type:'Drama',
        description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        totalTime : '2h 22min',
        year : '1994',
        stars: ' Tom Hanks, Robin Wright, Gary Sinise',
        rating : '8.8'
      },
      {
        id: 2,
        title: 'House of Cards',
        src: 'http://makeit.netflix.com/assets/trainers/frank-bg-f6f8c082322a48b823ba72d51d08e52227a28d301ef2318a0b373f69cd35cb09.jpg',
        type:'Drama',
        description: 'A widow tries to find out why her daughter\'s strange behavior, a reaction to her father\'s death, is progressively worsening.',
        totalTime : '2h 22min',
        year : '1993',
        stars: ' Frank Underwood',
        rating : '8.8'
      },
      {
        id: 3,
        title: 'Orange Is the New Black',
        src: 'http://makeit.netflix.com/assets/trainers/red-bg-sm-c75797530969233ccfc19dc3022641ff2fd91143d513d96bb0437fd8d1972931.jpg',
        type:'Drama',
        description: 'When a past crime catches up with her, a privileged New Yorker ends up in a women\'s prison, where she quickly makes friends and foes.',
        totalTime : '2h 22min',
        year : '2013',
        stars: ' Taylor Schilling, Kate Mulgrew, Laura Prepon',
        rating : '5.8'
      },
      {
        id : 4,
        title : "Marvel's Jessica Jones",
        totalTime : '2h 22min',
        type:'Drama',
        year : '2013',
        stars :"Krysten Ritter,David Tennant,Rachael Taylor",
        description : "Haunted by a traumatic past, Jessica Jones uses her gifts as a private eye to find her tormentor before he can harm anyone else in Hell's Kitchen.",
        when : '2021 March',
        src : 'https://occ-0-435-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcBEokjH4yBUnJcoCerGHuigJArkU_QuqFaD00ho_WT7LdTTNqJRrtmFkDffLLhpy4W6ivi4YUMmHL8OIws2qoZ3okLB.jpg?r=142'
      },
      {
        id:5,
        title : "O Brother, Where art thou?",
        totalTime : '2h 22min',
        type:'Drama',
        year : '2013',
        stars :"George Clooney, John Turturro, Tim Blake Nelson",
        description : "Drie gevangenen ontsnappen uit een gevangenis in Mississippi tijdens de Grote Depressie en gaan, in de trant van de Odyssee van Homerus, op zoek naar een verstopte buit..",
        when : '2021 May',
        src : 'https://occ-0-571-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfYF-Mv3FCZ-KAx_nT1x6MusdtHV4ils9lzA_9iIa4KpaFFDBZUVrOAdKxKVcyljVIwEnZRgNkPC5YCG4Ewo1WJS9YO1.webp?r=ae0'
      },
      {
        id:6,
        title : "Line of Duty",
        totalTime : '2h 22min',
        type:'Drama',
        year : '2013',
        stars :"Aaron Eckhart, Courtney Eaton, Ben McKenzie ",
        description : "Een in ongenade gevallen agent racet tegen de klok om de dochter van de politiechef te redden van een gestoorde verdachte. Een journaliste livestreamt zijn zoektocht.",
        when : 'Now',
        src : 'https://occ-0-571-1489.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXmEM72XCbajd6NgY_lPVbA9KdKZWawSOAlwmqoucS4P_Yb7MksCkNyNCz9bDW_95k9cn9TEqB7k1Z9Pq67WyQH8YTA-.webp?r=1ec'
      },
      {
        id:7,
        title : "Lupin",
        totalTime : '2h 12min',
        type:'Adventure',
        year : '2021',
        stars :"Omar Sy, Vincent Londez, Antoine Gouy  ",
        description : "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
        when : 'Now',
        src : 'https://www.moviemeter.nl/afbeeldingen/artikel/1920x1080/netflix-kijktip-misdaadserie-lupin-met-bekroonde-acteur-omar-sy-21001610019120.jpg'
      }
    ]
  },
  getters : {
    getMovies(state){
      return state.movies;
    }
  },
  /* eslint-disable */
  mutations: {
    setMovieData(state, payLoad){
      this.state.movies.unshift(payLoad);
    },
    setUpdateData(state, payLoad){
      state.movies.splice(payLoad, 1)
    },
    deleteMovie(state, payLoad){
      state.movies.splice(payLoad, 1)
    }
  },
  /* eslint-disable */
  actions: {
    saveMovie({commit}, payLoad){
     commit('setMovieData', payLoad);
    },
    updateMovie({commit}, payLoad){
      /* eslint-disable */
      commit('setUpdateData', payLoad);
    },
    deleteMovie({commit}, payLoad){
      /* eslint-disable */
      commit('deleteMovie', payLoad);
    },
    setModalBox({commit}, payLoad){
      const modal = new SimplyModal(payLoad);
      modal.open();
    }
  }
})
