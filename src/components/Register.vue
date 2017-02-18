<template>
  <div class="register-warpper">
    <!-- Register -->
	<div class="register-form clearfix">
    <h4>Register</h4>
    <form v-on:submit="register($event)" @submit.prevent="validateBeforeSubmit">
		<div class="form-group">
			<div class="label-control">Your full name</div>
			<input 
                type="text" 
                class="form-control"
                v-model="newUser.fullname"
                v-validate="'required'" 
                name="fullName"
                :class="{'input': true, 'is-danger': errors.has('fullName') }" 
                autofocus>
            <span v-show="errors.has('fullName')" class="help is-danger">{{ errors.first('fullName') }}</span>
		</div>
        <div class="form-group">
			<div class="label-control">Your username</div>
			<input 
                type="text" 
                class="form-control" 
                v-model="newUser.username"
                name="username"
                v-validate="'required'" 
                :class="{'input': true, 'is-danger': errors.has('username') }">
            <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
		</div>
		<div class="form-group">
			<div class="label-control">Your email</div>
            <input 
                type="email" 
                name="email" 
                class="form-control" 
                v-validate="'required|email'" 
                :class="{'input': true, 'is-danger': errors.has('email') }" 
                v-model="newUser.email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </div>
        <div :class="{'form-group': true, 'has-error': errors.has('password')}">
            <div class="control-label">New password</div>
            <input v-validate="'required|confirmed'" type="password" class="form-control" id="password" name="password">
            <p class="help-block" v-if="errors.has('password')">{{errors.first('password')}}</p>
        </div><!--end form group-->

        <div :class="{'form-group': true, 'has-error': errors.has('password_confirmation')}">
            <div class="control-label">Verify password</div>
            <input v-validate="'required'" type="password" class="form-control" id="password_confirmation" name="password_confirmation" v-model="newUser.password">
        </div><!--end form group-->

		<button id="register_btn" class="btn btn-info pull-right">Sign me up!</button>
    </form>
	</div><!--/register-form-->
  </div>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

export default {
    name: 'register',
    data () {
        return {
            newUser: {}
        }
    },
    methods:{
        register: function(e){
            e.preventDefault()
            // console.log(this.newUser)
            this.$http.post('http://localhost:3000/users/register', this.newUser)
                .then(res =>{
                   if( res.body.success === true ){
                        localStorage.setItem('id_token', res.body.token)
                        localStorage.setItem('user_id', res.body.user_id)
                        this.$router.push('/')
                        // console.log(res.body)
                    }else{
                        console.log('What the hell man!')
                        this.showError = true;
                    }
                });
        },
        validateBeforeSubmit() {
            // Validate All returns a promise and provides the validation result.
            this.$validator.validateAll().then(success => {
                if (! success) {
                    return;
                }
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register-form{
    width: 400px;
    margin: 30px auto;
    padding: 20px;
    background-color: #34495e;
}
.register-form h4{
    padding: 0;
    margin: 0;
    margin-bottom: 10px
}
.register-form input{
    background-color: #2b3e50;
    border: 1px solid rgba(238, 238, 238, .2);
    display: block;
    margin-top: 5px;
    color: #FFF;
}
.help.is-danger, .help-block{
    color: #e74c3c;
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 11px
}
.input.is-danger{border: 1px solid #e74c3c}
.has-error .control-label, .has-error .radio, .has-error .checkbox, .has-error .radio-inline, .has-error .checkbox-inline, .has-error.radio label, .has-error.checkbox label, .has-error.radio-inline label, .has-error.checkbox-inline label, .has-error .form-control-feedback
{color: #FFF}
.has-error .form-control, .has-error .form-control:focus{border: 1px solid #d9534f}
</style>
