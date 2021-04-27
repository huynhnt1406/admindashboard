<template>
    <div>
        <h3>Post {{data.id}}</h3>
        <div class="post">
            <div>
                <label for="title">Title</label>
                <b-form-textarea
                    v-model="data.title"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
            </div>
            <div>
                <label for="body">Body</label>
                <b-form-textarea
                    v-model="data.body"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
            </div>
        </div>
        <div class="actbtn">
            <b-button variant="danger" @click="delelePOST(data.id)"  class="mt-2 mr-2">Delete</b-button>
            <b-button variant="success" @click="updatePOST(data)" class="mt-2 mr-2">Update</b-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
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
    },
    methods:{
        ...mapActions(["deletePost","updatePost"]),
        deletePOST(id){
            if(id){
                alert('delete successfully')
                this.deletePost(id)
                this.$router.push({path:'/posts'})
            }else{
                alert('delete failed')
                this.$router.push({path:'/post'})
            }
        },
        updatePOST(data){
            if(data){
                alert('update successfully')
                this.updatePost(data)
                this.$router.push({path:'/posts'})
            }else{
                alert('update failed')
                this.$router.push({path:'/post'})
            }
        }
    }
}
</script>

<style>

</style>