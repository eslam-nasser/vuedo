<template>
  <div class="login-warpper">
    <div class="logo">
        <img src="../assets/logo.svg">
        <h4>VueDo</h4>
    </div>
    <!-- Login -->
	<div class="login-form clearfix">
    <h4>Login</h4>
    <div class="alert alert-danger" v-bind:class="{ 'show-error': showError, 'hide-error': !showError }">
      Wrong username or password!!, you are lost boy?!!
        <svg height="20" width="20">
            <circle cx="10" cy="10" r="7" stroke="#ecf0f1" stroke-width="1" fill="none" />
        </svg>
    </div>
    <form v-on:submit="auth($event)">
		<div class="form-group">
			<div class="label-control">Username</div>
			<input type="text" class="form-control" v-model="authUser.username" autofocus>
		</div>
		<div class="form-group">
			<div class="label-control">Password</div>
			<input type="password" class="form-control" v-model="authUser.password">
		</div>
		<button id="login_btn" class="btn btn-info pull-right">Let me in</button>
    </form>
	</div><!--/login-form-->
    <router-link
        class="btn btn-default btn-block register-btn"
        :to="{path: '/register' }"
        >
        Don't have an account? Signup now
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            authUser: {},
            showError: false
        }
    },
    methods:{
        auth: function(e){
            e.preventDefault()
            // console.log(this.authUser)
            this.$http.post('http://localhost:3000/users/auth', this.authUser)
                .then(res =>{
                    // console.log(res.body)
                    if( res.body.success === true ){
                        localStorage.setItem('id_token', res.body.token)
                        localStorage.setItem('user_id', res.body.user_id)
                        this.$router.push('/')
                        // console.log(res.body)
                    }else{
                        console.log('What the hell man!')
                        this.showError = true;
                        var self = this;
                        setTimeout(function(){
                            self.showError = false;
                        }, 2100);
                    }
                });
        }
    },
    created: function(){
        window.document.title = 'Login | VueDo'
        localStorage.removeItem('id_token')
        localStorage.removeItem('user_id')
        console.log('Old token removed!')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
    position: absolute;
    left: 10px;
    top: 10px;
    display: flex;
    align-items: center;
}
.logo img{
    width: 85px;
    text-align: center
}
.logo h4{font-size: 28px}
.login-form{
    width: 400px;
    margin: 30px auto;
    padding: 20px;
    background-color: #34495e;
}
.login-form h4{
    padding: 0;
    margin: 0;
    margin-bottom: 10px
}
.login-form input{
    background-color: #2b3e50;
    border: 1px solid rgba(238, 238, 238, .2);
    display: block;
    margin-top: 5px;
    color: #FFF;
}
.alert-danger {
    background-color: #d9534f;
    border-color: transparent;
    color: #ebebeb;
    overflow: hidden;
    transition: .14s;
    position: relative;
}
.alert-danger.hide-error{
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    border: 0;
}
.alert-danger.show-error{
    height: auto;
    padding: 15px;
    border: 1px solid transparent;
}
.alert-danger span{
    cursor: pointer;
    color: #FFF;
    float: right;
    font-size: 21px;
    position: absolute;
    top: 11px;
    right: 15px;
}
.register-btn{
    width: 400px;
    margin: 30px auto;
}
svg{
    position: absolute;
    top: 17px;
    right: 10px;
}
.alert-danger svg circle{opacity: 0}
.alert-danger.show-error svg circle{
  stroke-dashoffset: 50px;
  stroke-dasharray: 50px;
  -webkit-animation: loading 2s linear forwards;
          animation: loading 2s linear forwards;
}
@-webkit-keyframes loading {
  0% {
    stroke-dashoffset: 50px;
    opacity: 1
  }
  95% {
    stroke-dashoffset: 0;
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

@keyframes loading {
  0% {
    stroke-dashoffset: 50px;
    opacity: 1
  }
  95% {
    stroke-dashoffset: 0;
    opacity: 1
  }
  100% {
    opacity: 0
  }
}

</style>
