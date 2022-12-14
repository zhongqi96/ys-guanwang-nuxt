<template>
    <header class="v-header clearfix">
        <div id="index-header">
             <nuxt-link to="/" class="icon-img"><img :src="$imgUrl+'/logo/logo.png'"></nuxt-link>
             <div class="i-h-nav">
                 <ul class="h-nav-list">
                     <li v-for="(item, index) in nav" :key="index">
                         <nuxt-link :to="item.path" :class="{'active': index === navIndex}">{{item.name}}</nuxt-link>
                         <!-- <ul class="h-nav-list-child">
                             <li v-for="(route, ind) in item.child" :key="ind"><nuxt-link :to="route.path">{{route.name}}</nuxt-link></li>
                        </ul> -->
                     </li>
                 </ul>
             </div>
             <div class="contact-info">
                 <img :src="$imgUrl+'/header/icon_phone.png'">
                 <div class="phone">
                     <p>联系方式</p>
                     <p>020-83677229</p>
                 </div>
             </div>
        </div>
    </header>
</template>

<script>

export default {
  name:'HEADER',
  props: {
    nav: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      // nav: NAV,
      navIndex: -1
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal){
        let path = val.fullPath
        this.routeHandle(path)
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    routeHandle(path) {
      let ind = -1
      this.nav.forEach((item, index) => {
        if (path === '/') {
          ind = 0
        } else {
          if (path.includes(item.path)) {
            ind = index
          }
        }
      })
      if (ind > -1) {
        this.navIndex = ind
      }
    }
  }
}
</script>

<style scoped>

#index-header {
   /*width: 100%;*/
   min-width: 1200px;
   background: #fff;
   z-index: 666;
   text-align: center;
   height: 80px;
   line-height: 80px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   position: fixed;
   top: 0;
  left: 0;
  right: 0;
   box-shadow: 0px 6px 20px 0px
		rgba(0, 0, 0, 0.05);
}
 .icon-img {
   display: flex;
   margin-right: 33px;
 }
.contact-info {
    display: flex;
    margin-left: 30px;
}
.contact-info img{
  width: 22px;
  height: 32px;
  flex: 0 0 auto;
}
 .contact-info>.phone {
     display: flex;
     flex-direction: column;
     text-align: left;
    font-size: 16px;
    line-height: 18px;
    color: #333333;
    vertical-align: middle;
    margin-left: 10px;
 }
 .contact-info>.phone>p {
     /*width: 113px;*/
 }
 .h-nav-list {
     display: flex;
     height: 80px;
 }
 .h-nav-list>li {
     position: relative;
     padding: 0 30px;
 }

 .h-nav-list>li>a {
     display: inline-block;
     font-size: 18px;
     color: #333333;
     letter-spacing: 0px;
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
     /* -webkit-transition: all 0.5s ease;
     -o-transition: all 0.5s ease;
     transition: all 0.5s ease; */
     height: 78px;
 }

 .h-nav-list>li:hover>a, .h-nav-list .nuxt-link-exact-active{
     color:#e50113;
     border-bottom: 2px solid #e50113;
 }
 .h-nav-list>li .nuxt-link-active{
	/* border-bottom: 2px solid transparent; */
 }

.h-nav-list>li .active{
  color:#e50113;
  border-bottom: 2px solid #e50113;
}

 .h-nav-list>li:first-child .nuxt-link-active.nuxt-link-exact-active{
    color:#e50113;
  }
  .h-nav-list-child li a.nuxt-link-exact-active{
		border: none;
	}

 .h-nav-list-child {
     display: none;
     position: absolute;
     top: 80px;
     left: 50%;
     overflow: hidden;
     width: 162px;
     margin-left: -72px;
     background: #fff;
     opacity: 0;
     /* 兼容IE8及以下的IE浏览器 */
     filter: alpha(opacity=0);
     z-index: 999;
     box-shadow: 0px 0px 20px 0px
		rgba(0, 0, 0, 0.05);
     border-top: 2px solid #f1f1f1;
 }

  .h-nav-list>li:hover .h-nav-list-child {
      display: block;
      height: auto;
      /* -webkit-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease; */
      opacity: 100;
      filter: alpha(opacity=1);
  }

 ul.h-nav-list-child>li {
     text-align: center;
     height: 32px;
     line-height: 32px;
     margin-right: 18px;
 }

 ul.h-nav-list-child>li:first-child {
     margin-top: 21px;
 }

 ul.h-nav-list-child>li:last-child {
     margin-bottom: 33px;
 }

 ul.h-nav-list-child>li>a {
     overflow: hidden;
     color: #333333;
     display: block;
     font-size: 18px;
     letter-spacing: 0px;
 }

 ul.h-nav-list-child li a:hover{
	 color: red;
  }

</style>
