<template>
  <div id="addition">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <label>Number1:</label>
    <input type="number" v-model.number="number1">
    <br>
    <label>Number2:</label>
    <input type="number" v-model.number="number2">
    <br>
    <el-button @click="getSum">Click</el-button>
    <br>
    <br>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import { getJSON } from "./requests.js";

var api = 'http://localhost:5000/api/addition';

export default {
  data () {
    return {
      number1: "0",
      number2: "0",
      result: "0.0"
    }
  },
  methods: {
    /**
     * Since the callback is actually moving the data somewhere where it can be
     * used by this instance, it has to be its own instance method.
     *
     * Sets `result` to the `response` attribute of the object sent by the
     * Python function addition.addition_response()
     *
     * @param {object} data: The JSON data returned by getJSON()
     */
    getSumCallback: function(data){
        this.result = data['response'];
    },

    /**
     * Calls the `addition` service from the exposed API
     */
    getSum: function() {
        var params = '?' + 'number1=' + this.number1 + '&' + 'number2=' + this.number2;
        getJSON(api + params, this.getSumCallback)
    }
  }
}
</script>

<style>
#addition {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
