<template>
  <v-container fill-height>
    <v-layout column align-center>
      <v-btn to="/" color="blue lighten-1 white--text mb-3">Go back</v-btn>
      <v-card class="elevation-2 pa-4" width="500" align-center>
        <v-layout align-center justify-center column fill-height>
          <v-img :src="details.image_url" height="200" width="200" contain align-center></v-img>
          <v-card-title primary-title>
            <h3>{{details.name}}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{details.description}}</p>
            <h2>Brewer's tips:</h2>
            <p>{{details.brewers_tips}}</p>
          </v-card-text>
        </v-layout>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      id: this.$route.params.id,
      details: {}
    };
  },
  mounted() {
    axios
      .get(`https://api.punkapi.com/v2/beers/${this.id}`)
      .then(response => (this.details = response.data[0]));
  }
};
</script>
