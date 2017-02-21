<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  /*General styling for the whole app*/
  body{
    font-family: 'Oswald', sans-serif;
    background-color: #2b3e50 !important;
  }
  .vue-scrollbar__scrollbar-vertical .scrollbar{
    background: rgba(52, 73, 94, 0.6) !important;
    border-radius: 2px;
  }
  .vue-scrollbar__scrollbar-vertical, .vue-scrollbar__scrollbar-vertical .scrollbar{
    width: 5px !important;
  }
</style>
