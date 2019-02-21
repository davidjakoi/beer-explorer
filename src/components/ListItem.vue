<template>
<v-layout row wrap>
  <p>{{name}}</p>
  <v-img :src="url" alt="" width="100" height="50"></v-img>
</v-layout>
</template>

<script>
export default {
  props: ["url", "name"]
}
</script>

