<template>
  <div class="containerlogin">
    <h3>Login Form</h3>
    <form  method="GET"  @submit.prevent="loginUser()" >
      <div >
        <label for="name">Username</label>
         <b-form-input
          id="name"
          v-model="username"
          type="email"
          placeholder="Username"
          required
        ></b-form-input>
      </div>
      <div >
        <label for="name">Password</label>
         <b-form-input
          id="name"
          v-model="password"
          type="password"
          placeholder="Password"
          required
        ></b-form-input>
      </div>
      <div class="submitbtn">
        <b-button type="submit" variant="success" class="mt-2">Login</b-button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username:'',
      password:'',
      useraccount : localStorage.setItem("username")
    }
  },
  methods:{
    loginUser(){
        if(this.username === '' || this.username == null){
          alert('username is required')
        }else if(this.password === ''   || this.password.length <=7 ){
          alert('your password must have At least 8 characters—the more characters, the better')
        }
        else if(this.password.includes("<" ,">")){
          alert('your password have  < or >  so can cause problems in Web browsers.')
        }
        else{
          this.username = localStorage.setItem("username",JSON.stringify(this.username))
          this.password = localStorage.setItem("password",JSON.stringify(this.password))
          location.reload('/users')
          location.replace('/homepage')
          this.$router.push({path:'/homepage'})
        }
    },
  }
}
</script>

<style>
.loginform .submitbtn button{
  height: 30px;
  width: 90px;
  margin:5px;
  background-color: forestgreen;
  border:none;
  color:white;
  font-weight: 400;
  letter-spacing: 2px;
}

</style>