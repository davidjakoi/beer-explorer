<template>
  <v-card>
    <v-card-title>Click on the name of the beer to get more details!
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="beers" class="elevation-1" dark :search="search">
      <template slot="items" slot-scope="props">
        
        <td class="white blue--text"><router-link :to="{ name: 'beer', params: { id: props.item.id } }">{{ props.item.name }}</router-link></td>
        
        <td class="white blue--text">
          <v-img :src="props.item.image_url" height="50" width="25" contain></v-img>
        </td>
        <td class="white blue--text">{{ props.item.first_brewed }}</td>
        <td class="white blue--text">{{ props.item.abv }}</td>
        <td class="white blue--text">{{ props.item.tagline }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
const axios = require("axios");
export default {
  components: {
    
  },
  data() {
    return {
      search: "",
      beers: [],
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name",
          width: "300",
          class: "blue lighten-1"
        },
        { text: "", value: "sdasa", sortable: false, class: "blue lighten-1" },
        {
          text: "First brewed",
          value: "first_brewed",
          class: "blue lighten-1"
        },
        { text: "ABV", value: "abv", class: "blue lighten-1" },
        { text: "", value: "tagline", class: "blue lighten-1", sortable: false }
      ]
    };
  },
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then(response => (this.beers = response.data));
  }
};
</script>
