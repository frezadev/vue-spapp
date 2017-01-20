<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header"> 
                <button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false"> 
                    <span class="sr-only">Toggle navigation</span> 
                    <span class="icon-bar"></span> 
                    <span class="icon-bar"></span> 
                    <span class="icon-bar"></span> 
                </button> 
                <a href="#" class="navbar-brand">SPA</a> 
            </div> 
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"> 
                <ul class="nav navbar-nav"> 
                    <li v-for="menu in menus" v-bind:class="{ active: menu.link == selected }"><router-link :to="menu.link">{{ menu.text }}</router-link></li> 
                </ul> 
            </div> 
        </div>
    </nav>
</template>

<script>
// import Vue from 'vue'

export default {
  name: 'navigation',
  data: function () {
    return {
      menus: [
        { text: 'Home', link: '/home' },
        { text: 'Chart', link: '/chart' },
        { text: 'List', link: '/list' },
        { text: 'List using Vuex', link: './listvuex' }
      ],
      selected: '/home'
    }
  }
}

</script>