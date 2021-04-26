<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="secondary" >
    <b-navbar-brand href="#">myDashboard</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Manager" right >
          <router-link class="m-2 text-secondary " to='/users'>Users</router-link>
          <router-link class="m-2 text-secondary " to='/posts'>Posts</router-link>
          <router-link class="m-2 text-secondary " to='/todos'>Todos</router-link>
          <router-link class="m-2 text-secondary " to='/comments'>Comments</router-link>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>
</style>