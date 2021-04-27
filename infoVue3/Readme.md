VUE 3

What changed...
    + created with createApp()
    + data must now always be a method
    + components , directives & third-party modules are registered on "app" instead of Vue global object
    + Transitions: v-enter is now v-enter-from
    + VueRouter => createRouter (transitions work differently)
    + Vuex: Store is now created with createStore()

What's New
    + <teleport> Component
    + Fragment
    + Composition API may be used to replace Options API
    + Vue was internally re-written with TS => better TS sp
new Vue({
    ...
})
Vue.createApp({
    ...
}).mounted('#app')


in Vue3 you can use emits:['eventname'] to the component make code is clean and easy to understand
and props like vue2
example

app.component('the-button',{
    emits:['update'],
    template: '<button @click="updateMessage">Click me</button>',
    methods:{
        updateMessage(){
            this.$emit('update)
        }
    }
})


