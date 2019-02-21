<template>
<div>
  <p>{{name}}</p>
  <p>{{url}}</p>
  <img :src="url" alt="">
  </div>
</template>

<script>
export default {
  props: ["url", "name"]
}
</script>

