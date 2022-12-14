<template>
<footer class="v-footer">
    <div id="index-footer">
            <div class="footer-nav-box">
                <div class="footer-nav">
                    <ul>
                        <li v-for="(item, index) in nav" :key="index" class="footer-nav-list">
                            <nuxt-link to="" @click="$emit('routeHandle', item.path)">{{item.name}}</nuxt-link>
                            <ul class="footer-nav-child">
                                <li v-for="(route, ind) in item.child" :key="ind">
                                    <nuxt-link :to="route.path" @click.native="change(route.path)">{{route.name}}</nuxt-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="footer-code">
                     <img :src="$imgUrl+'/footer/footer-weixin-code.png'">
                     <div class="footer-weixin-icon">
                         <img :src="$imgUrl+'/footer/footer-weixin-icon.png'">
                         <span>扫一扫关注我们吧</span>
                     </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>版权所有 © 2019-2020易食纵横股份有限公司 鄂ICP备19020999号</p>
            </div>
    </div>
</footer>
</template>

<script>
  export default {
    name: 'FOOTER',
    props: {
      nav: {
        type: Array,
        default: () => []
      }
    },
    methods: {
        change(path) {
            if(this.$route.fullPath.includes(path)){
                window.scroll(0, 0);
            }
        }
    }
  }
</script>

<style scoped>
div#index-footer {
    background-color: #333333;
    text-align: center;
    min-width: 1200px;
}
/* 底部各个跳转 */
.footer-nav-box {
    min-width: 1200px;
    overflow: hidden;
    padding: 54px 0 52px 0;
    display: inline-block;
}

.footer-nav {
    display: inline-block;
    vertical-align: top;
}

li.footer-nav-list {
    display: inline-block;
    margin-left: 66px;
}
li.footer-nav-list:first-child {
    margin-left: 0;
}

li.footer-nav-list>a {
    color: #fff;
    font-size: 18px;
    line-height: 18px;
    text-align: left;
    cursor:default;
}
.footer-nav-child {
    margin-top:10px;
}
.footer-nav-child li {
    font-size: 16px;
    line-height: 16px;
    padding-top: 16px;
    text-align: left;
}

.footer-nav-child li a {
    color: #aaaaaa;
}

.footer-nav-child li a:hover {
    color:#fff;
}

/* 二维码 */
.footer-code {
   display: inline-block;
   margin-left: 184px;
}

.footer-weixin-icon {
    margin-top: 16px;
}

.footer-weixin-icon img{
    display: inline-block;
    vertical-align: middle;
}

.footer-weixin-icon span {
    vertical-align: middle;
    font-size: 18px;
    line-height: 18px;
    color: #fff;
    margin-left: 10px;
}

/* footer备案信息 */
.footer-bottom {
    overflow: hidden;
    width: 100%;
    line-height: 12px;
    color: #999999;
    font-size: 12px;
    text-align: center;
    padding: 30px 0 32px 0;
    border-top: 1px solid #666666;
}
</style>
