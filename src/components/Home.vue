<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <span>How to use the application</span>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Readme'
    }
  }
}
</script>