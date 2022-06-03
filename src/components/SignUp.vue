<template>

<h1>Sign Up</h1>
<div class="register">
  <input type="text" v-model="name" placeholder="Enter Name" />
  <input type="text" v-model="email" placeholder="Enter Email" />
  <input type="password" v-model="password" placeholder="Enter Password" />
  <button v-on:click="signUp">SignUp</button>
  <p>
  <router-link to="/login">Login</router-link>
  </p>
</div>
</template>

<script>
import axios from 'axios'
export default{
    name: "SignupComponent",
    data(){
      return {
        name:'',
        email:'',
        password: ''
      }
    },
    methods:{
      async signUp(){
        let result = await axios.post("http://localhost:3000/users",{
          username:this.name,
          email:this.email
        });

        console.warn(result);
        console.log(result);

        if(result.status == 201){
          // same name than is defined in the route
          this.$router.push({ name: 'HomeRoute' })
          localStorage.setItem("user-info", JSON.stringify(result.data));
        }
      }
    },
    // Funcion para trabajar con los datos en el localStorage
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({ name: 'HomeRoute' });
      }
    }
}

</script>