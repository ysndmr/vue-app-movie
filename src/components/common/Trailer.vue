<template>
	<div class="movies__details">
		<a class="movies__details--close" href="#" @click="$emit('onClose')">
			X
		</a>
		<div class="modal-title">{{ this.$store.state.updateDetailMovie.title }} {{ title }}</div>
		<object width="100%" height="333" v-if="!this.$store.state.updateDetailMovie.url == '' ">
			<param name="movie" :value=" this.$store.state.updateDetailMovie.url +'?autoplay=1'">
			<embed :src="this.$store.state.updateDetailMovie.url +'?autoplay=1'" type="application/x-shockwave-flash" width="100%" height="333">
		</object>
		<img width="200" height="200" v-if="this.$store.state.updateDetailMovie.url == undefined " :src="this.$store.state.updateDetailMovie.src" :alt="this.$store.state.updateDetailMovie.title">
		<div class="movies__details--information">
			<h2>{{ this.$store.state.updateDetailMovie.description }}</h2>
		</div>
		<div class="movies__details--information" v-if="!this.$store.state.updateDetailMovie.stars == ''">
			<span>Stars </span> {{ this.$store.state.updateDetailMovie.stars }}
		</div>
		<div class="movies__details--information" v-if="!this.$store.state.updateDetailMovie.type == ''">
			<span>Type </span> {{ this.$store.state.updateDetailMovie.type }}
		</div>
		<div class="movies__details--information" v-if="!this.$store.state.updateDetailMovie.year == ''">
			<span>Year </span> {{ this.$store.state.updateDetailMovie.year }}
		</div>
		<div class="movies__details--information" v-if="!this.$store.state.updateDetailMovie.rating == ''">
			<span> Imdb </span> {{ this.$store.state.updateDetailMovie.rating }}
		</div>
	
	</div>
</template>

<script>
export default {
	name: "trailer",
	data() {
		return {
			title: null
		}
	},
	created() {
		if (this.$store.state.updateDetailMovie.url == undefined) {
			this.title = 'Image'
		} else {
			this.title = 'Trailer'
		}
	},
	destroyed() {
		this.$store.state.updateDetailMovie = []
	},
}
</script>

<style lang="scss" scoped>
.movies__details {
	&--close {
		position: absolute;
		right: 0;
		background: #000;
		padding: 17px 25px;
		top: 32px;
		color: #fff;
		
		&:hover {
			background: #e50914;
		}
	}
	
	&--information {
		display: block;
		margin: 1px 0;
		text-align: left;
		background: rgb(0 0 0);
		padding: 10px;
		color: #fff;
		line-height: 150%;
		
		span {
			display: inline-block;
			background: #e50914;
			padding: 10px;
			color: #fff;
			font-weight: 700;
		}
	}
}

.modal-title {
	font-weight: bold;
	font-size: 1.3rem;
	margin-bottom: 1rem;
	color: #555;
}
</style>