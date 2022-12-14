<template>
  <div>
    <v-header :nav="nav"></v-header>
    <main class="content-container" ref="container">
      <div class="big-banner"><img v-if="imageUrl" :src="imageUrl" alt=""></div>
       <nuxt/>
    </main>
    <v-footer :nav="nav"></v-footer>
  </div>
</template>

<script>
 import VHeader from '~/components/home/header'
 import VFooter from '~/components/home/footer'

 const NAV = [
   {
     name: '关于我们',
     path: '/',
     child: [
       {name: '公司简介', path: '/'},
       {name: '公司优势', path: '/about'},
     ]
   },{
     name: '公司业务',
     path: '/business',
     child: [
       {name: '运营路线', path: '/business'}
     ]
   },{
     name: '公司新闻',
     path: '/news',
     child: [
       {name: '公司新闻', path: '/news'}
     ]
   },{
     name: '供应商管理',
     path: '/manage',
     child: [
       {name: '供应商须知', path: '/manage'}
     ]
   },{
     name: '加入我们',
     path: '/employ',
     child: [
       {name: '招聘信息', path: '/employ'}
     ]
   },{
     name: '联系方式',
     path: '/contact',
     child: [
       {name: '联系方式', path: '/contact'}
     ]
   },

 ]

  const IMAGES = [
   {path: 'business', url: 'https://image1.cdn.yishizongheng.com/shejian_gw/banner/business-banner.png'},
   {path: 'news', url: 'https://image1.cdn.yishizongheng.com/shejian_gw/banner/news-banner.png'},
   {path: 'manage', url: 'https://image1.cdn.yishizongheng.com/shejian_gw/banner/manage-banner.png'},
   {path: 'employ', url: 'https://image1.cdn.yishizongheng.com/shejian_gw/banner/employ-banner.png'},
   {path: 'contact', url: 'https://image1.cdn.yishizongheng.com/shejian_gw/banner/contact-banner.png'},
   {path: 'employ-detail', url: 'https://image1.cdn.yishizongheng.com/shejian_gw/banner/employ-banner.png'},
   {path: 'news-detail', url: 'https://image1.cdn.yishizongheng.com/shejian_gw/banner/news-banner.png'}
 ]
  export default {
    components: {
      VHeader,
      VFooter
    },
    data() {
      return {
        nav: NAV
      }
    },
    computed: {
      imageUrl() {
        let pathArr = ['']
        let result = IMAGES.find(item => {
          return this.$route.fullPath.includes(item.path);
        })
        return result ? result.url : ''
      }
    },
    created() {
    },
  }
</script>


<style>
.content-container {
  margin-top: 80px;
  min-height: calc(100vh - 427px);
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.big-banner{
  /* width: 100%; */
  max-width: 1920px;
  background: #ccc;
  min-width: 1000px;
  margin: 0 auto;
}
.big-banner>img {
   width: 100%;
}
</style>

