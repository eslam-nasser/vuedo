<template>
  <div class="login-warpper">
    <!-- Login -->
	<div class="login-form clearfix">
    <h4>Login</h4>
    <div class="alert alert-danger" v-bind:class="{ 'show-error': showError, 'hide-error': !showError }">
      Wrong username or password!!, you are lost boy?!!
      <span v-on:click="hideError()">
          <i class="icon ion-ios-close-empty"></i>
      </span>
    </div>
    <form v-on:submit="auth($event)">
		<div class="form-group input_1">
			<div class="label-control">Username</div>
			<input type="text" class="form-control" v-model="authUser.username" autofocus>
		</div>
		<div class="form-group input_2">
			<div class="label-control">Password</div>
			<input type="password" class="form-control" v-model="authUser.password">
		</div>
		<button id="login_btn" class="btn btn-info pull-right">Let me in</button>
    </form>
	</div><!--/login-form-->
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
                        localStorage.setItem('user_loggedin', true)
                       this.$router.push('/myBoards')
                    }else{
                        console.log('What the hell man!')
                        this.showError = true;
                    }
                });
        },
        hideError: function(){
            this.showError = false;
        } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

</style>
