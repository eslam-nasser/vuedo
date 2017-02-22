<template>
   <div class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">
            <img src="../assets/logo.svg">
          </router-link>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse navbar-right" id="navbar-main">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/login">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isLoggedin: false
    }
  },
  created: function(){
    // this.refreshNav()
  },
  methods: {
      refreshNav: function(){
        var jwt = localStorage.getItem('id_token')
        if(jwt) {
            this.isLoggedin = true
        }
        console.log('test')
      }
  }
}
</script>

<style scoped>
.navbar-default {
    background: #4e5d6c;
    border-color: transparent;
}
.navbar-brand{
  width: 50px;
  padding: 3px;
  margin-left: 0 !important;
  position: relative;
}
.navbar-brand:after{
  content: 'VueDo';
  position: absolute;
  left: 100%;
  top: 50%;
  margin-top: -5px;
  color: rgba(255, 255, 255, 0.84);
  font-size: 20px;
  /*text-transform: uppercase*/
}
.navbar-nav>li>a{
  font-size: 15px;
}
/*.navbar-nav>li>a.router-link-active{
  color: #ebebeb;
  background-color: #485563;
}*/
@media (min-width: 768px){
  .navbar-nav>li>a {
      padding-top: 15px;
      padding-bottom: 15px;
  }
}
</style>
