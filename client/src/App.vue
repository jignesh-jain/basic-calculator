<template>
  <div id="app">
    <Calculator @clickedEqualTo="updateList"></Calculator>
    <List ref="list"></List>
  </div>
</template>

<script>

import Calculator from './components/Calculator.vue';
import List from './components/List.vue';
import io from 'socket.io-client';

// import app from '../vue.config'

//  var HttpsProxyAgent = require('https-proxy-agent');
//  let p = 'https://still-river-21571.herokuapp.com/';
//  let agent = new HttpsProxyAgent(p);

//  let opts = {
//                secure: true,
//                rejectUnauthorized: false,
//                reconnect: true,
//                agent: agent
//             };

export default {
  name: 'app',
  components: {
    Calculator,
    List
  },
  data() {
    return {
      socket: io("https://still-river-21571.herokuapp.com", { transport : ['websocket'] }),
    }
  },
  created : async function() {

    let test = "Hello from created";
    // let temp = [];

    // //const self = this;
    // console.log("created");
    // console.log(app);

    await this.socket.emit('updatelist' , test);

    // this.socket.on("newupdatedlist", async function(message) {

    //   console.log("Reached client");
    //   console.log(message);

    //   await self.axios.get("https://still-river-21571.herokuapp.com/calculations/calculations").then( function (response) { 
    //     console.log("Get");
    //     console.log(response.data);
    //     temp = response.data;
    //   }).catch(function(error){
    //     console.log(error);
    //   });
    //   self.$refs.list.items = temp;
    //   });
  },  
  methods : {
    updateList : async function (value) {
      let temp = [];
      const self = this;
      if (value != "") {
        // this.$refs.list.items.push(value);
        // this.$refs.list.$forceUpdate();

        await this.axios.post("https://still-river-21571.herokuapp.com/calculations", {
          expression : value
        })
        .then(function(response) {
          console.log("Post");
          console.log(response);
        } )
        .catch(function(error){
          console.log(error);
        });

        let test = "Hello from client";

        await this.socket.emit('updatelist' , test);

        this.socket.on("newupdatedlist", async function(message) {
          console.log("Reached client");
          console.log(message);

        await self.axios.get("https://still-river-21571.herokuapp.com/calculations")
        .then( function (response) { 
          console.log("Get");
          console.log(response.data);
          temp = response.data;
        }).catch(function(error){
          console.log(error);
        });
          self.$refs.list.items = temp;
        });
      }
    }
  } , 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 30px;
}

h1{
  font-size: 3em;
}

img{
  max-width: 50px;
  max-height: 80px;
  height: 80px;
}
</style>
