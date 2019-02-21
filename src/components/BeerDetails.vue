<template>
<v-container fill-height>
  <v-layout align-center>
    <v-card class="elevation-1">
      <v-img :src="details.image_url" height="200" width="200" contain align-center></v-img>
      <v-card-title primary-title>
        <h3>{{details.name}}</h3>
        <p >{{details.description}}</p>
      </v-card-title>
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
    }
  },
  mounted() {
    axios
      .get(`https://api.punkapi.com/v2/beers/${this.id}`)
      .then(response => (this.details = response.data[0]))
  }
}
</script>
