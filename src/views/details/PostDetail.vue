<template>
    <h3>PostDetail</h3>
</template>

<script>
import axios from 'axios'
export default {
    name:'PostDetail',
    props:['id'],
    data(){
        return{
            data:{
                id:'',
                title:'',
                body:''
            }
        }
    },
    created(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            .then(res => this.data = res.data)
    }
}
</script>

<style>

</style>