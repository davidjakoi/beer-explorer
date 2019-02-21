<template>
  <div>
  <ListItem v-bind:key="beer.id" 
            v-for="beer in beers" 
            v-bind:url="beer.image_url"
            v-bind:name="beer.name">
  </ListItem>
  </div>
</template>

<script>
import ListItem from "./ListItem";
const axios = require('axios');
export default {
  components: {
    ListItem
  },
  data() {
    return {
      beers: {}
    }
  },
  mounted () {
    axios
      .get('https://api.punkapi.com/v2/beers')
      .then(response => this.beers = response.data)
  }
}
</script>
