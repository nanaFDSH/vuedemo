<template>
  <div>
    <vHeader></vHeader>
    <div>我是 index.vue</div>
    <vContent></vContent>
    <div class="article_list">
      <Hello></Hello>
      <ul>
        <li v-for="item in list">
          我是{{item.name}}
          <span v-text="$utils.goodTime(item.name)"></span>
        </li>
      </ul>
    </div>
    <vFooter></vFooter>
  </div>
</template>

<script>
  import vContent from './Content.vue'
  import vHeader from '../components/Header.vue'
  import vFooter from '../components/Footer.vue'
  import Hello from '../components/Hello.vue'

  export default{
    components: {vContent,Hello,vHeader,vFooter},
    data(){
      return{
        list:[{'name':'张三'},{'name':'李四'}]
      }
    },
    created(){
      this.getData()
    },
    methods:{
      getData(){
//        this.$api.get('topics', null, r => {
//          console.log(r.data)
//          this.list = r.data
//        })
      }
    }
  }
</script>
