<template>
    <div>
        <ul>
            <li id ="listWrapper" v-for=" item in items" :key="item.index">
                {{ item.expression }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items : []
        }
    },
    created : async function() {
        const self = this;
        await this.axios.get("https://still-river-21571.herokuapp.com/calculations").then( async function (response) {
            console.log(response);
            self.items = response.data;
    })  
    }
}

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
  font: bold;
}
</style>