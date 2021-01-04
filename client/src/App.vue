<template>
  <div id="app">
    <Calculator @clickedEqualTo="updateList"></Calculator>
    <List ref="list"></List>
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import List from "./components/List.vue";
import io from "socket.io-client";

export default {
  name: "app",
  components: {
    Calculator,
    List
  },
  data() {
    return {
      socket: io("https://still-river-21571.herokuapp.com", {
        transport: ["websocket"]
      })
    };
  },
  created: async function() {
    await this.socket.emit("updatelist");
  },
  methods: {
    updateList: async function(value) {
      let temp = [];
      const self = this;
      if (value != "") {
        await this.axios
          .post("https://still-river-21571.herokuapp.com/calculations", {
            expression: value
          })
          .then(function(response) {})
          .catch(function(error) {
            console.log(error);
          });

        await this.socket.emit("updatelist");

        this.socket.on("newupdatedlist", async function() {
          await self.axios
            .get("https://still-river-21571.herokuapp.com/calculations")
            .then(function(response) {
              temp = response.data;
            })
            .catch(function(error) {
              console.log(error);
            });
          self.$refs.list.items = temp;
        });
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 30px;
}

h1 {
  font-size: 3em;
}

img {
  max-width: 50px;
  max-height: 80px;
  height: 80px;
}

body {
  background:white;
}

</style>
