<template>
  <div class="container">
      <h3>Todos</h3>
      <div class="todos">
          <div v-for="todo in allTodos" :key="todo.id" class="todos-container">
              <div class="each-todo">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/41da3NERJ4L.png" alt="todo.title">
                  <small>{{todo.title}}</small>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'Todos',
    computed: mapGetters(["allTodos"]),
    created(){
        this.fetchTodos()
    },
    methods:{
        ...mapActions(["fetchTodos"])
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
.each-todo img{
    height: 40px;
    width: 40px;
}
.each-todo{
    display: flex;
    align-items: center;
    width: 300px;
    padding:20px;
    background-image: linear-gradient(white, #f5f5f3);
    color:black;
    box-shadow: 0px 2px 2px rgba(0,0,0,.5);
    margin:5px;
}
.todos{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>