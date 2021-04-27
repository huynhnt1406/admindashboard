import axios from 'axios'
const state = {
    comments:[]
}
const getters = {
    allComments: state => state.comments
}
const actions = {
    async fetchComments({commit}){
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments')
        commit('setComments',res.data)
    },
    async deleteComment({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        commit('removeComment',id)
    },
    async updateComment({commit},data){
        await axios.put(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
        commit('updateComment',data)
    }
}
const mutations = {
    setComments : (state,comments) => state.comments = comments,
    removeComment: (state,id) => state.comments = state.comments.filter(comment => comment.id !== id),
    updateComment : (state,data) => {
        const index = state.comments.findIndex(comment => data.id === comment.id)
        if(index !== -1){
            state.comments.splice(index,1,data)
        }
    } 
}
export default {
    state,
    getters,
    actions,
    mutations
}