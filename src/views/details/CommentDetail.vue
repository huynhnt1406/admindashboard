<template>
  <h3>comment detail</h3>
</template>

<script>
import axios from 'axios'
export default {
    name:'CommentDetail',
    props:['id'],
    data(){
        return{
            data:{
                id:'',
                name:'',
                email:'',
                body:''
            }
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.id}`)
            .then(res => console.log(res.data))
    }
}
</script>

<style>

</style>