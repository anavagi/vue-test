<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <div class="profile">
        <a v-on:click="logout" href="#">Logout</a>
        <router-link to="/">Profile</router-link>
    </div>
</div>
</template>

<script>
export default{
    name: 'HeaderComponent',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name: 'LoginRoute'});
        }
    }
}
</script>
