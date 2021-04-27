import axios from 'axios'
const state = {
    posts:[]
}
const getters = {
    allPosts: state => state.posts
}
const actions = {
    async fetchPosts({commit}){
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('setPosts',res.data)
    },
    async deletePost({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        commit('removePost',id)
    },
    async updatePost({commit},data){
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
        commit('updatePost',data)
    }
}
const mutations = {
    setPosts : (state,posts) => state.posts = posts,
    removePost: (state,id) => state.posts = state.posts.filter(post => post.id !== id),
    updatePost : (state,data) => {
        const index = state.posts.findIndex(post => data.id === post.id)
        if(index !== -1){
            state.posts.splice(index,1,data)
        }
    } 
}
export default {
    state,
    getters,
    actions,
    mutations
}