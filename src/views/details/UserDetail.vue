<template>
  <h3>hello</h3>
</template>

<script>
import axios from 'axios'
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
            .then(res => console.log(res.data))
    }
}
</script>

<style>

</style>