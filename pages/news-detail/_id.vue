<template>
  <div class="news-detail">
    <div v-for="(item, index) in news" :key="index" class="news-content">
      <p v-if="item.class === 'title' || item.class === 'text' || item.class === 'mark'" :class="item.class" v-html="item.text"></p>
      <img v-if="item.class === 'img'" :src="item.text" alt="" :style="item.isShow?item.imgHeight?{height:item.imgHeight}:'':{width: item.imgWidth}" :class="item.class">

      <div v-if="item.class === 'texts'" :class="item.class">
        <p v-for="(val, ind) in item.text" :key="ind" v-html="val"></p>
      </div>
      <p v-if="item.class === 'imgs'" :class="item.class">
        <img :src="item.text[0]" alt="" :style="item.isShow?item.imgHeight?{height:item.imgHeight}:'':{width: item.imgWidth}">
        <img :src="item.text[1]" alt="" :style="item.isShow?item.imgHeight?{height:item.imgHeight}:'':{width: item.imgWidth}">
      </p>
      <p v-if="item.class === 'img-group'" :class="item.class">
        <template v-for="(img, ind) in item.text">
          <img :key="'img'+ind" :src="img" alt="" :style="{width: item.imgWidth}"> 
        </template>
        
      </p>
      <div v-if="item.class === 'imgs-text'" :class="item.class">
        <p v-for="(val, i) in item.image" :key="i">
          <img :src="val" alt="" :style="item.isShow?item.imgHeight?{height:item.imgHeight}:'':{width: item.imgWidth}">
          <span>{{item.text[i]}}</span>
        </p>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import news from './news'

  export default {
    name: 'NEWS_DETAIL',
    components: {
    },
    data() {
      return {
        id: '',
        news: []
      }
    },
    created() {
      this.id = this.$route.params.id || 'news1'
      this.news = news[this.id]
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
  .news-detail{
    font-size: 14px;
    line-height: 24px;
    color: #333;
    background: #FFF;
    margin: 60px auto 60px;
  }

  .news-content{
    width: 1000px;
    margin: 0 auto;
  }
  .title{
    font-size: 16px;
    color: #333;
    margin-bottom: 24px;
    text-align: center;
    font-weight: bold;
  }
  .text{
    margin-bottom: 24px;
  }
  .mark{
    color: #ffbd27;
    margin-bottom: 16px;
    text-align: center;
    font-weight: bold;
  }
  .img{
    /* width: 511px; */
    margin: 0 auto;
    margin-bottom: 24px;
    display: block;
  }
  .imgs{
    text-align: center;
    font-size: 0;
  }
  .imgs img{
    width: 390px;
    margin: 0 15px;
    margin-bottom: 24px;
  }
  .img-group{
    text-align: center;
    font-size: 0;
  }
  .img-group img{
    display: block;
    width: 600px;
    margin: 0 auto;
  }
  .img-group img:last-child{
    margin-bottom: 24px;
  }

  .texts{
    margin-bottom: 24px;
  }
  .texts p{
    margin-bottom: 14px;
  }

  .imgs-text{
    display: flex;
    justify-content: center;
  }
  .imgs-text p{
    margin: 0 15px;
    text-align: center;
  }
  .imgs-text span{
    color: #999;
    text-align: center;
    display: block;
    margin-bottom: 24px;
    margin-top: 12px;
  }


</style>
