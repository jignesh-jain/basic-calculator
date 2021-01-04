<template>
  <div>
    <div>
      <p>Recent 10 Calculations</p>
    </div>
    <div>
      <ul>
        <li id="listWrapper" v-for=" item in items" :key="item.index">{{ item.expression }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      items: [],
      socket: io("https://still-river-21571.herokuapp.com", {
        transport: ["websocket"]
      })
    };
  },
  created: async function() {
    const self = this;
    this.socket.on("newupdatedlist", async function() {
      await self.axios
        .get("https://still-river-21571.herokuapp.com/calculations")
        .then(async function(response) {
          self.items = response.data;
        });
    });
  }
};
</script>

<style>
#listWrapper {
  width: 30%;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  margin: auto;
  box-sizing: border-box;
  border-radius: 5px;
  height: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 5px #4b4b4c;
  float: center;
  font-weight: bold;
  background: lightcyan;
  border-color: black;
  border: double;
}
p {
  font-weight: bold;
  font-size: 2em;
  font-style: italic;
  text-decoration: underline;
}
</style>