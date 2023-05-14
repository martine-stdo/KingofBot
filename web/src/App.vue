<template>
  <div>
    <div>Bot昵称: {{ bot_name }}</div>
    <div>Bot战力: {{ bot_rating }}</div>
  </div>

  <router-view/>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';
export default {
  name: "App",
  setup: () => {
    let bot_name = ref("");
    let bot_rating = ref("");

    $.ajax({
      url:"http://localhost:3001/pk/getbotinfo/",
      type: "get",
      success: resp => {
       bot_name.value = resp.name;
       bot_rating.value = resp.rating;
      }
    })

    return {
      bot_name,
      bot_rating
    }
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
