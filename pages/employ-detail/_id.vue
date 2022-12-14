<template>
  <div class="employ-detail">
    <div v-for="(item, index) in employ" :key="index" class="employ-content">
      <p
        v-if="item.class === 'head' ||
        item.class === 'title'"
        :class="item.class"
        >{{item.text}}</p>

      <img v-if="item.class === 'img'" :src="item.text" alt="" :class="item.class">

      <p v-if="item.class === 'text' && typeof(item.text) === 'string'" :class="item.class">{{item.text}}</p>

      <div v-if="item.class === 'text' && typeof(item.text) === 'object'" :class="item.class">
        <p v-for="(text, ind) in item.text" :key="ind">{{text}}</p>
      </div>

      <div v-if="item.class === 'text' && item.texts" :class="item.class">
        <div v-for="(textItem, ind) in item.texts" :key="ind" class="text-in">
          <span v-for="(text, i) in textItem" :key="i">{{text}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import employ from './employ'

  export default {
    name: 'NEWS_DETAIL',
    components: {
    },
    data() {
      return {
        id: '',
        employ: []
      }
    },
    created() {
      this.id = this.$route.params.id || 'employ1'
      this.employ = employ[this.id]
    },
    mounted() {
      if (process.browser) {
        setTimeout(() => {
          let height = 640 / 1920 * window.innerWidth
          window.scroll(0, height)
        })
       
      }
    },
    methods: {

    }
  }

</script>

<style scoped>
  .employ-detail{
    font-size: 14px;
    color: #333;
    background: #FFF;
    margin: 60px auto 60px;
  }

  .employ-content{
    width: 1000px;
    margin: 0 auto;
  }
  .head{
    font-size: 16px;
    color: #333;
    margin-bottom: 35px;
    text-align: center;
    font-weight: bold;
  }
  .title{
    font-size: 16px;
    color: #333;
    margin-top: 35px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .text p{
    margin-bottom: 12px;
  }

  .img{
    width: 510px;
    margin: 0 auto;
    margin-bottom: 35px;
    display: block;
  }
  .texts{
    display: flex;

  }
  .text-in{
    margin-bottom: 12px;
  }
  .text-in span{
    margin-right: 60px;
  }

</style>
