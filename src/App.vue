<template>
  <div>
    <navigation></navigation>
    <div class="container-fluid">
      <div class="row-fluid">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Nav'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

