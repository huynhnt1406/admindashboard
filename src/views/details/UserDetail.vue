<template>
  <div class="container">
    <h3>User {{data.id}}</h3>
    <div class="user">
        <div>
            <label for="name">Full Name</label>
            <b-form-input
                v-model="data.name"
            ></b-form-input>
        </div>
        <div>
            <label for="username">User Name</label>
            <b-form-input
                v-model="data.username"
            ></b-form-input>
        </div>
        <div>
            <label for="email">Email</label>
            <b-form-input
                v-model="data.email"
            ></b-form-input>
        </div>
        <div>
            <label for="city">City</label>
            <b-form-input
                v-model="data.address.city"
            ></b-form-input>
        </div>
        <div>
            <label for="street">Street</label>
            <b-form-input
                v-model="data.address.street"
            ></b-form-input>
        </div>
        <div class="actbtn">
            <b-button variant="danger" @click="deleteUSER(data.id)" class="mt-2 mr-2">Delete</b-button>
            <b-button variant="success" @click="updateUSER(data)" class="mt-2 mr-2">Update</b-button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
    name:'UserDetail',
    props:['id'],
    data(){
        return{
            data:{
                id:'',
                name:'',
                username:'',
                email:'',
                address:{
                    city:'',
                    street:''
                }
            }
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
            .then(res => this.data = res.data)
    },
    methods:{
        ...mapActions(["deleteUser","updateUser"]),
        deleteUSER(id){
            if(id){
                alert('deleted successfully')
                this.deleteUser(id)
                this.$router.push({path:'/users'})
            }else{
                alert('delete failed')
                this.$router.push({path:'/users'})
            }
        },
        updateUSER(data){
            if(data){
                alert('updated successfully')
                this.updateUser(data)
                this.$router.push({path:'/users'})
            }else{
                alert('update failed')
                this.$router.push({path:'/users'})
            }
        }
    }
}
</script>

<style>

</style>