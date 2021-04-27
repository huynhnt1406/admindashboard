<template>
  <div class="container">
    <h3>Comment {{data.id}}</h3>
    <div class="comment">
        <div>
            <label for="email">Email</label>
            <b-form-input
                v-model="data.email"
            ></b-form-input>
        </div>
            <div>
                <label for="name">Name</label>
                <b-form-textarea
                    v-model="data.name"
                    rows="2"
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
            <b-button variant="danger" @click="deleteCOMMENT(data.id)" class="mt-2 mr-2">Delete</b-button>
            <b-button variant="success" @click="updateCOMMENT(data)" class="mt-2 mr-2">Update</b-button>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
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
            .then(res => this.data = res.data)
    },
    methods:{
        ...mapActions(["deleteComment","updateComment"]),
        deleteCOMMENT(id){
            if(id){
                alert('delete successfully')
                this.deleteComment(id)
                this.$router.push({path:'/comments'})
            }else{
                alert('delete failed')
                this.$router.push({path:'/comments'})
            }
        },
        updateCOMMENT(data){
            if(data){
                alert('update successfully')
                this.updateComment(data)
                this.$router.push({path:'/comments'})
            }else{
                alert('update failed')
                this.$router.push({path:'/comments'})
            }
        }
    }
    
}
</script>

<style>

</style>