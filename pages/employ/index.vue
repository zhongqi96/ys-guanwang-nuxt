<template>
  <div class="page-employ">
    <div v-for="(item, index) in employList" :key="index" class="employ-item hand" @click="jump(item)">
      <img :src="item.image" class="img" alt="">
      <div class="item-msg">
        <p class="title">{{item.title}}</p>
        <p class="text" v-html="item.text"></p>
      </div>
    </div>

    <div v-if="employ.length > 3" class="pagation">
      <span class="home page-item" @click="changePage(1)">首页</span>
      <span v-for="(item, index) in pageTotal" :key="index" @click="changePage(item)" :class="['page-item', {'active': page-1 === index}]">{{item}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  const MSG = [
    {
      title: '广州动车组餐饮有限公司2020年餐饮乘务员招聘',
      text: '根据公司发展需要，拟开展2020年餐饮乘务员招聘工作，具体通知如下：<br />一、招聘岗位：动车高铁餐吧乘服员/VIP商务座专座服务员 <br />二、工作地点：广州、深圳、厦门、南昌、西安、郑州等基地 <br />三、身高：动车高铁餐吧乘服员163CM以上；VIP商务座专职服务员165CM以上。五官端正，体态匀称，形象气质佳。如形象，语言表达好，有其他特长，身高可以适当方宽。',
      image: 'https://image1.cdn.yishizongheng.com/shejian_gw/employ/pic1.png',
      path: '/employ-detail/employ1'
    }
  ]

  export default {
    name: 'PAGE_EMPLOY',
    components: {
    },
    data() {
      return {
        employ: MSG,
        page: 1
      }
    },
    computed: {
      employList() {
        return this.employ.slice(this.page*3-3, this.page*3)
      },
      pageTotal() {
        let arr = []
        this.employ.forEach((item, index) => {
          if (index%2 === 0 && index !== 0) {
            arr.push(index/2)
          }
        })
        return arr
      }
    },
    created() {

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
  .page-employ{
    background: #FFF;
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0 60px;
  }
  .employ-item{
    width: 1000px;
    display: flex;
    align-items: center;
    margin-top: 60px;
  }
  .employ-item .img{
    width: 356px;
    height: 250px;
    flex: 0 0 auto;
    transition: all 0.3s;
  }

  .employ-item .img:hover {
    box-shadow: 0px 6px 20px 0px
		rgba(0, 0, 0, 0.3);
  }

  .employ-item .item-msg{
    margin-left: 93px;
  }

  .employ-item .title{
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  .employ-item .text{
    margin-top: 25px;
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
    line-height: 30px;
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
