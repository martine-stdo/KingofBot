<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import $ from 'jquery'

export default {
  components: {
    NavBar
  },

  setup() {
    $.ajax({
      url: "http://localhost:3001/user/account/token",
      type: "post",
      data: {
        username: 'jjt',
        password: '123456',
      },
      success(resp) {
        console.log(resp)
      },
      error(resp) {
        console.log(resp)
      }
    });

    $.ajax({
      url: "http://localhost:3001/user/account/info",
      type: "get",
      headers: {
        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NDJhODk4ZjMzNDk0MTEzOGYyOGJmNmM5YmJlMWNhNyIsInN1YiI6IjIiLCJpc3MiOiJzZyIsImlhdCI6MTY4NTE3Mjg3NSwiZXhwIjoxNjg2MzgyNDc1fQ.seWAl09lrJdM9ojKX3KQSx8juqa6zEi6d31HsI-C9vo"
      },
      success(resp) {
        console.log(resp)
      },
      error(resp) {
        console.log(resp)
      }
    });

    
  }
}

</script>

<style>
body {
  background-image: url("https://s1.ax1x.com/2022/10/16/xBcp6S.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
