<template>
<h1>Login</h1>
<div class="login">
  <input type="text" v-model="email" placeholder="Enter Email" />
  <input type="password" v-model="password" placeholder="Enter Password" />
  <button v-on:click="login">Login</button>
  <p>
  <router-link to="/sign-up">Sign Up</router-link>
  </p>
</div>
</template>
<script>
import axios from 'axios'
export default{
    name: "LoginComponent",
    data()
    {
        return {
            email: '',
            password: '',
        }
    },
    methods:{
        async login(){
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            // console.warn(result);
            if(result.status == 200 && result.data.length>0 ){
                console.warn(result);
                // same name than is defined in the route
                this.$router.replace({ name: 'HomeRoute' })
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
            }
        }
    },
    mounted()
    {
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({ name: 'HomeRoute' });
      }
    }
}

</script>
