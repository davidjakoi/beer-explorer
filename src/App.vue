<template>
  <v-app>
    <v-content>
      <HelloWorld/>
      <BeerList/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import BeerList from "./components/BeerList";

export default {
  name: "App",
  components: {
    HelloWorld,
    BeerList
  },
  data() {
    return {
      //
    };
  }
};
</script>
