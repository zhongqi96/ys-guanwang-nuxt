<template>
  <div class="page-news">
    <div v-for="(item, index) in newsList" :key="index" class="news-item hand" @click="jump(item)">
      <img :src="item.image" class="img" alt="">
      <div class="item-msg">
        <p class="title">{{item.title}}</p>
        <p class="text" v-html="item.text"></p>
      </div>
    </div>
    <!-- 翻页功能 -->
    <!-- <div v-if="news.length > 3" class="pagation">
      <span class="home page-item" @click="changePage(1)">首页</span>
      <span v-for="(item, index) in pageTotal" :key="index" @click="changePage(item)" :class="['page-item', {'active': page-1 === index}]">{{item}}</span>
    </div> -->
  </div>
</template>

<script type="text/ecmascript-6">

  const NEWS = [
    {
      title: '易食纵横股份有限公司关于易食（招）字2020第1号银川生产经营性物资供应商招商的项目公告',
      text: '一、招商人：易食纵横股份有限公司 二、招商项目 1.项目名称:2021年易食纵横股份有限公司银川生产经营性物资供应商招商项目...',
      image: 'https://image1.cdn.yishizongheng.com/shejian_gw/news/pic4.jpg',
      path: '/news-detail/news4'
    },
    {
      title: '高铁美食上新啦 | 温暖就是回家路上的一口“神仙米饭”呀',
      text: '年初的银杏还在枝头灿烂，转眼我们又将和旅客朋友们一起告别2019，迎来庚子鼠年，迎接全新时代，曙光在冬日缓缓升起，即将驱走寒冬，带来人间温暖,面对即将到来的春运大客流。为确保每一位旅客在奔波的路途中，享用上精美而有温度的美味餐食，让远方与家之间的距离变得不再那么遥远我们早早做好了准备…',
      image: 'https://image1.cdn.yishizongheng.com/shejian_gw/news/pic1.png',
      path: '/news-detail/news1'
    },
    {
      title: '兰州-上海虹桥新增开行动车组！首发日活动太精彩',
      text: '您的2019年度余额即将清零，在这辞旧迎新的日子里，让人鸡冻的消息来惹！受益于全国铁路年底大调图，兰州铁路局新增多条至东南沿海高铁线路，其中兰州西-上海虹桥动车组列车G3182/1次 已于昨日首发上线！这下，上午牛肉拉面，下午魔都打卡的“半日交通生活圈”更更更方便啦…',
      image: 'https://image1.cdn.yishizongheng.com/shejian_gw/news/pic2.png',
      path: '/news-detail/news2'
    },
    {
      title: '【北京冬奥会限量】教你轻松拥有未来三年最IN萌物~',
      text: '9月17日晚，在首钢冰球馆，本年度最强CP，本年度最萌冰雪组合，北京2022年冬奥会和冬残奥会吉祥物——“冰墩墩”“雪容融”正式亮相！尽管时间还徘徊在2019的冬天，但这两个小可爱的亮相依然把我们提前带到了那个即将因竞技体育而沸腾的冬季。冬季奥林匹克运动会简称为冬季奥运会、冬奥会。主要由全世界各地区举行…',
      image: 'https://image1.cdn.yishizongheng.com/shejian_gw/news/pic3.png',
      path: '/news-detail/news3'
    },
    // 更多新闻，往下面增加即可，自动实现分页 todo
  ]
  export default {
    name: 'NEWS',
    components: {
    },
    data() {
      return {
        news: NEWS,
        page: 1
      }
    },
    computed: {
      newsList() {
        return this.news.slice(this.page*4-4, this.page*4)
      },
      pageTotal() {
        let arr = []
        this.news.forEach((item, index) => {
          if (index%2 === 0 && index !== 0) {
            arr.push(index/2)
          }
        })
        return arr
      }
    },
    created() {
      console.log(this.$imgUrl, 123)
    },
    methods: {
      changePage(page) {
        this.page = page
        window.scrollTo(0, 30)
      },
      jump(url) {
        this.$router.push(url)
      }
    }
  }

</script>

<style scoped>
  .page-news{
    background: #FFF;
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 60px;
  }

  .news-item{
    width: 1000px;
    display: flex;
    align-items: center;
    margin-top: 60px;
  }
  .news-item .img{
    width: 356px;
    height: 250px;
    flex: 0 0 auto;
    transition: all 0.3s;
  }
  .news-item .img:hover {
    box-shadow: 0px 6px 20px 0px
		rgba(0, 0, 0, 0.3);
  }
  .news-item .item-msg{
    text-align: justify;
    margin-left: 93px;
  }

  .news-item .title{
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  .news-item .text{
    margin-top: 35px;
    font-size: 14px;
    color: #333;
    line-height: 24px;
  }

  .pagation{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin: 90px auto 0;
  }

  .page-item{
    width: 46px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    color: #333;
    margin-right: 8px;
    cursor: pointer;
    background: #d8d8d8;
    transition: all 0.2s;
  }
  .page-item:hover{
    background: #ffbd27;
    color: #FFF;
  }

  .page-item.active{
    background: #ffbd27;
    color: #FFF;
  }
  .page-item.home{
    width: 88px;
    margin-right: 24px;
  }
  .hand{
    cursor: pointer;
  }


</style>
