<template>
  <v-card>
    <v-card-title class="px-4 body-2">Click on the name of the beer to get more details!
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="beers"
      disable-initial-sort
      class="elevation-1 mx-4"
      light
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td class="white blue--text subheading">
          <router-link :to="{ name: 'beer', params: { id: props.item.id } }">{{ props.item.name }}</router-link>
        </td>
        <td class="white blue--text subheading">
          <v-img class="ma-2" :src="props.item.image_url" height="50" width="25" contain></v-img>
        </td>
        <td class="white blue--text subheading">{{ props.item.first_brewed }}</td>
        <td class="white blue--text subheading">{{ props.item.abv }}%</td>
        <td class="white blue--text subheading">{{ props.item.tagline }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      search: "",
      beers: [],
      headers: [
        {
          text: "Name",
          value: "name",
          class: "blue lighten-1 white--text title",
          width: "300"
        },
        {
          text: "",
          value: "image",
          sortable: false,
          class: "blue lighten-1"
        },
        {
          text: "First brewed",
          value: "first_brewed",
          class: "blue lighten-1 white--text title"
        },
        {
          text: "ABV",
          value: "abv",
          class: "blue lighten-1 white--text title"
        },
        {
          text: "",
          value: "tagline",
          class: "blue lighten-1",
          sortable: false
        }
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
