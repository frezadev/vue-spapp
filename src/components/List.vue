<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <span>How to use the application</span>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'List'
    }
  }
}
</script>