import Vue from 'vue'
import Vuex from 'vuex'
import users from '../stores/modules/users'
import posts from '../stores/modules/posts'
import todos from '../stores/modules/todos'
import comments from '../stores/modules/comments'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        users,
        posts,
        todos,
        comments
    }
})