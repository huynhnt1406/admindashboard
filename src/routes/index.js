import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../views/Users'
import Posts from '../views/Posts'
import Todos from '../views/Todos'
import Comments from '../views/Comments'
import UserDetail from '../views/details/UserDetail'
import PostDetail from '../views/details/PostDetail'
import CommentDetail from '../views/details/CommentDetail'
import Login from '../components/Login'
const routes = [
    {
        path:'/',
        name:'Login',
        component:Login,
    },
    {
        path:'/users',
        name:'Users',
        component:Users,
        beforeRouteEnter: (to, from, next) =>{ 
            const loggedIn = true
            if(loggedIn){
                next()
            }else{
                alert('you have to login first')
                next('/login')
            }
        }
    },
    {
        path:'/posts',
        name:'Posts',
        component:Posts,
        beforeRouteEnter: (to, from, next) =>{ 
            const loggedIn = true
            if(loggedIn){
                next()
            }else{
                alert('you have to login first')
                next('/login')
            }
        }
    },
    {
        path:'/todos',
        name:'Todos',
        component:Todos,
        beforeRouteEnter: (to, from, next) =>{ 
            const loggedIn = true
            if(loggedIn){
                next()
            }else{
                alert('you have to login first')
                next('/login')
            }
        }
    },
    {
        path:'/comments',
        name:'Comments',
        component:Comments,
        beforeRouteEnter: (to, from, next) =>{ 
            const loggedIn = true
            if(loggedIn){
                next()
            }else{
                alert('you have to login first')
                next('/login')
            }
        }
    },
    {
        path:'/comments/commentdetail/:id',
        name:'CommentDetail',
        component:CommentDetail,
        props:true
    },
    {
        path:'/users/userdetail/:id',
        name:'UserDetail',
        component:UserDetail,
        props:true
    },
    {
        path:'/posts/postdetail/:id',
        name:'PostDetail',
        component:PostDetail,
        props:true
    },

]

Vue.use(VueRouter)

export default new VueRouter({
    routes,
    mode:'history'
})