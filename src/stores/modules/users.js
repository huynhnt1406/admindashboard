import axios from 'axios'
const state = {
    users:[]
}
const getters = {
    allUsers: state => state.users
}
const actions = {
    async fetchUsers({commit}){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('setUsers',res.data)
    },
    async deleteUser({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        commit('removeUser',id)
    },
    async updateUser({commit},data){
        await axios.put(`https://jsonplaceholder.typicode.com/users/${data.id}`)
        commit('updateUser',data)
    }
}
const mutations = {
    setUsers : (state,users) => state.users = users,
    removeUser : (state,id) => state.users = state.users.filter(user => user.id !== id),
    updateUser : (state,data) => {
        const index = state.users.findIndex(user => data.id === user.id)
        if(index !== -1){
            state.users.splice(index,1,data)
        }
    } 
}
export default {
    state,
    getters,
    actions,
    mutations
}