<template>
  <div class="container">
        <h3 class="mt-2 mb-2" >Users List</h3>
        <div class="users">
            <b-list-group v-for="user in allUsers" :key="user.id">
                <b-list-group-item class="mb-2">
                    <div class="user-left">
                        <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="user.name">
                        <div class="user-info">
                            <p>{{user.name}}</p>
                            <small>{{user.email}}</small>
                        </div>
                    </div>
                    <div class="user-right">
                        <router-link class="link" :to="{name:'UserDetail',params:{id:user.id}}">Detail</router-link>
                    </div>
                </b-list-group-item>
            </b-list-group>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'Users',
    computed: mapGetters(["allUsers"]),
    created(){
        this.fetchUsers()
    },
    methods:{
        ...mapActions(["fetchUsers"])
    }
}
</script>

<style>
.user-left img{
    height: 50px;
    width:50px;
    margin:10px;
}
.user-left {
    display: flex;
    justify-content: center;
    align-items: center;
}
.list-group-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.link{
    color:black;
    padding:1vh 2vh 1vh 2vh;
    background-color: #f5f5f3;
    box-shadow: 0 1px 1px rgba(0,0,0,.6);
}
.link:hover{
    color:forestgreen;
    text-decoration: none;
}
</style>