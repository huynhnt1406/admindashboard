<template>
  <div class="container">
      <h3 class="mt-2 mb-2">Posts</h3>
      <div class="posts">
        <b-list-group v-for="post in allPosts" :key="post.id">
            <b-list-group-item class="mb-2">
                <div class="post-left">
                    <img src="https://media-exp1.licdn.com/dms/image/C561BAQFbeH7c2teNqA/company-background_10000/0/1525706311646?e=2159024400&v=beta&t=Sw_B4EHRLaqrk1DPQfBEQ1nHZeqzSUGZ4PJ_9DFZ_EE" alt="post.name">
                    <div class="post-info">
                        <p>{{post.title}}</p>
                        <small>{{post.body}}</small>
                    </div>
                </div>
                <div class="post-right">
                    <router-link class="link" :to="{name:'PostDetail',params:{id:post.id}}">Detail</router-link>
                </div>
            </b-list-group-item>
        </b-list-group>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'Posts',
    computed: mapGetters(["allPosts"]),
    methods:{
        ...mapActions(["fetchPosts"])
    },
    created(){
        this.fetchPosts()
    },
    beforeRouteEnter(to, from ,next){
        const uname = localStorage.getItem('username')
        const pname = localStorage.getItem('password')
        console.log(pname,uname);
        if(uname !== null || pname !== null){
            next()
        }else{
            next('/')
        }
    }
}
</script>

<style>
.post-left img{
    height: 150px;
    width: 200px;
}
.post-left{
    display: flex;
    justify-content: center;
    align-items: center;
}
.post-info{
    margin-left:5vh;
    margin-right: 5vh;
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