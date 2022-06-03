<template>
<HeaderComponent/>
<h1>Hello User, Welcome on Add Restaurant Page</h1>
<from class="add">
  <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name"/>
  <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address"/>
  <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact"/>
  <button type="button" v-on:click="addRestaurant">Add new restaurant</button>
</from>

</template>
<script>
import HeaderComponent from './Header.vue'
import axios from 'axios'

export default{
    name: "AddComponent",
    components:{
        HeaderComponent
    },
    data(){
      return{
        restaurant:{
          name: '',
          address: '',
          contact:''
        }
      }
    },
    methods:{
      // async nos permite devovler un estado de la peticion
      async addRestaurant(){
        const result = await axios.post("http://localhost:3000/restaurants",{
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        });
        if(result.status==201){
          this.$router.push({ name: 'HomeRoute' });
        }
        console.warn("result",result);
      }
    },
    mounted()
    {
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({ name: 'SignupRoute' });
        this.$router.push({ name: 'LoginRoute' });
      }
    }
}

</script>
