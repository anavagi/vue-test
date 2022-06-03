<template>
<HeaderComponent/>
<h1>Hello User, Welcome on Update Restaurant Page</h1>
<from class="add">
  <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name"/>
  <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address"/>
  <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact"/>
  <button type="button" v-on:click="updateRestaurant">Update restaurant</button>
</from>

</template>
<script>
import HeaderComponent from './Header.vue'
import axios from 'axios'

export default{
    name: "UpdateComponent",
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
      async updateRestaurant(){
        console.warn(this.restaurant);
        const result = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id,{
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        });
        if(result.status==200){
          this.$router.push({ name: 'HomeRoute' });
        }
        console.warn("result",result);
      }
    },
    async mounted()
    {
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({ name: 'SignupRoute' });
        this.$router.push({ name: 'LoginRoute' });
      }
      const result = await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id)
      console.warn(result)
      this.restaurant = result.data
    }
}

</script>
