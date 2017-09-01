<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>我是被引入的hello组件</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  font-weight: normal;
  color: #42b983;
}
</style>
