<template>
    <div class="container">
        <h3 class="mt-2 mb-2">Comments</h3>
        <div class="comments">
            <b-list-group v-for="comment in allComments" :key="comment.id">
                <b-list-group-item class="mb-2">
                    <div class="comment-left">
                        <img src="https://assets2.rappler.com/2013/04/1588411692-6-comment-moderation-policy-4x3.jpg" alt="comment.name">
                        <div class="user-info">
                            <p>{{comment.email}}</p>
                            <small>{{comment.name}}</small>
                        </div>
                    </div>
                    <div class="comment-right">
                        <router-link class="link" :to="{name:'CommentDetail',params:{id:comment.id}}">Detail</router-link>
                    </div>
                </b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'Comments',
    computed: mapGetters(["allComments"]),
    created(){
        this.fetchComments()
    },
    methods:{
        ...mapActions(["fetchComments"]),
    }
}
</script>

<style>
.comment-left img{
    height: 50px;
    width:50px;
    margin:10px;
}
.comment-left {
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