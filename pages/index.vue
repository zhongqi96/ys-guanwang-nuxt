<template>
  <div class="page-about" ref="about">
    <div class="banner">
      <Carousel
        ref="banner"
        :height="bannerHeight.toString() + 'px'"
        arrow="never"
        :loop="true"
        indicator-position="none"
        @change="changeBanner"
      >
        <CarouselItem v-for="(item, index) in banner" :key="index">
          <img :src="item" alt="" class="banner-image">
        </CarouselItem>
      </Carousel>
      <p class="banner-icon">
        <span
          v-for="(item, index) in banner"
          :key="index"
          class="icon"
          :class="{'active': bannerIndex === index}"
          @click="change(index)"
        ></span>
      </p>
    </div>

    <div class="page-content">
      <div class="big-tab">
        <div class="tab-left tab-item" :class="{'active': pageTemp ? pageTemp === 1 : pageTab === 1}" @click="changeTab(1)" @mouseenter="enterTab(1)" @mouseleave="leaveTab(1)"><div class="bg"></div></div>
        <div class="tab-right tab-item" :class="{'active': pageTemp ? pageTemp === 2 : pageTab === 2}" @click="changeTab(2)" @mouseenter="enterTab(2)" @mouseleave="leaveTab(2)"><div class="bg"></div></div>
      </div>
      <section v-show="+pageTab === 1">
        <div class="page-box" :class="+pageTab === 1 ? 'model-active' : 'model-un-active'">
          <h2 class="page-title">公司简介</h2>
          <p class="page-text">易食纵横股份有限公司成立于 2011年7月20日，注册资本11000万元，是由易食控股有限公司出资成立的一家专业化铁路餐饮投资管理公司，与南昌铁路局、兰州铁路局、西安铁路局及郑州铁路局开展高铁动车组及既有线列车的餐饮服务业务合作。同时易食纵横分别与广州铁路局合资成立广州动车组餐饮有限公司，与海南铁路有限公司合资成立海南易铁动车组餐饮服务有限公司。</p>
          <p class="page-text">
            <span class="text">广州动车组餐饮有限公司于2007年初取得广州铁路局管辖的广深线动车组餐饮运营权，并于2007年4月18日正式保障广深线餐饮业务，2009年3月在广州市正式注册成立，现主要担当保障广州铁路局局内动车、高铁线路餐饮业务；海南易铁动车组餐饮服务有限公司于2010年12月30日开始保障海南东环铁路，2011年11月在海口正式注册成立，主要担当全球第一条热带地区—海南省环岛高铁及西环各站内餐饮服务工作。</span>
            <img :src="$imgUrl+'/about/pic-1.png'" class="image" alt="">
          </p>

          <p class="page-text">
            <img :src="$imgUrl+'/about/pic-2.png'" class="image" alt="">
            <span class="text">
              <span class="text-top">
              自运营以来，公司秉承海航集团“为社会做点事、为他人做点事”的企业理念，坚持“至诚、至善、至精、至美”的服务宗旨，以“诚信、业绩、创新”为追求目标，积极引进先进的管理理念和服务模式，并与2011年顺利通过ISO9001国际质量体系认证。
              </span>
              <span class="text-bottom">
                公司凭借对铁路餐饮行业多年的深入探讨和经验积累，已顺利的将航空配餐服务模式同铁路餐饮结合起来，致力于建设“美味、营养、安全、健康”的铁路餐饮服务品牌。我们相信，通过我们的不断努力和创新，一定能够创建中国铁路餐饮服务一流品牌。
              </span>
            </span>
          </p>
        </div>
      </section>
      <section v-show="+pageTab === 2">
        <div  class="page-box" :class="+pageTab === 2 ? 'model-active' : 'model-un-active'">
          <h2 class="page-title">公司优势</h2>
          <p class="page-text">易食纵横自2007年至今，积累了丰富的餐饮管理经验，在服务品质、产品研发、安全运营管理等方面探索了一条适合中国铁路餐饮的服务运营模式。致力于整合软硬件资源优势，为旅客提供安全丰富、健康美味的餐饮产品和服务，实现服务质量、经营效益和社会效应的最佳结合，从而更好地服务旅客大众和促进社会和谐。</p>
          <p class="page-text">
            <img :src="$imgUrl+'/about/pic-3.png'" class="image" alt="">
            <span class="text">
              <span class="text-head">规范的制度建设</span>
              <span class="text-bottom">依托海航集团的先进管理理念及完善闭环管理流程，建立了规范的人事管理、财务管理、运营管理、质量管理、服务管理、营销管理等管理SOP手册及规程制度。公司内部6个职能部门在人员招聘、培训管理、乘务营销、安全运营、采购等方面提供坚实保障。</span>
            </span>
          </p>

          <p class="page-text">
            <span class="text">
              <span class="text-head">优秀的服务品质</span>
              <span class="text-bottom">海航集团作为服务性企业历来重视服务质量，连续 8年获得旅客话民航第一名的殊荣，2011年成为内地首家、全球第七家“SKYTRAX五星航空公司”，易食纵横充分贯彻海航集团服务理念，以海航航空五星航空服务标准为标杆，从航空版块聘请专业资深航空乘务教员对于我司乘务人员进行服务礼仪培训，关注提升餐饮服务细节，勇于创新产品种类，全力打造铁路餐饮一流服务品牌。</span>
            </span>
            <img :src="$imgUrl+'/about/pic-4.png'" class="image" alt="">
          </p>

          <p class="page-text">
            <img :src="$imgUrl+'/about/pic-5.png'" class="image" alt="">
            <span class="text">
              <span class="text-head">先进的信息建设</span>
              <span class="text-bottom">为打造铁路餐饮一流品牌和具有海航特色的铁餐业务管理输出模式，易食纵横投入大量资金建设开发铁路餐饮信息ERP系统，对铁路餐饮运营实现互联网+信息化管理、同时开发并联微信公众平台微信小程序（舌尖上的旅途）、O2O-APP实现线上线下订餐延伸服务。</span>
            </span>
          </p>
          <p class="page-text">
            <span class="text">
              <span class="text-head">可靠的运营安全</span>
              <span class="text-bottom">易食纵横视食品安全为企业生命，以航空安全标准建立了运营安全、食品安全体系等管理制度，通过ISO9001—2008质量管理体系认证，产品从采购、入库、配品、售卖到回收各个流程确保质量安全，多年来从未发生食物中毒及因食品质量而受到相关行政部门处罚的恶性事件。在安全培训方面，我司建立三级安全教育培训体系，含公司级、部门级、班组级，强化落实培训效果；在安全管理思路上，我司引进6S安全管理模式，建立有《6S管理手册》、《6S标准手册》，并在我司全面推行安全阿米巴管理模式；我司安全管理方针：安全第一、预防为主、综合治理；运营安全实施多级管控并开展安全“阿米巴”管理，落实到安全管理人人有责。</span>
            </span>
            <img :src="$imgUrl+'/about/pic-6.png'" class="image" alt="">
          </p>
          <p class="page-text">
            <img :src="$imgUrl+'/about/pic-7.png'" class="image" alt="">
            <span class="text">
              <span class="text-head">优秀的培训管理</span>
              <span class="text-bottom">依托海航集团直属大专院校（三亚航空旅游职业学院、长沙南方职业学院），建立完善培训体系及人才培养方案，并在各运营基地设立培训教员岗位，为公司的服务品质、素质提升奠定坚实基础。</span>
            </span>
          </p>
          <p class="page-text">
            <span class="text">
              <span class="text-head">便捷的保障网络</span>
              <span class="text-bottom">
                易食纵横在广州、深圳、南昌、厦门、长沙、海口、三亚、郑州(洛阳)、兰州、西安等地均设立了服务保障基地，建立了完善的地面支撑体系，完全能确保各线路顺利运营。
              </span>
              <span class="text-top">
                同时易食控股有限公司在全国自有7家航空食品生产加工中央厨房（分布在北京、海口、三亚、乌鲁木齐、兰州、呼和浩特、宜昌），在国内与40多家航空食品企业建立了业务合作关系，在产品的研发、质量控制、配送保障等方面有足够的丰富资源和能力。
              </span>
            </span>
            <img :src="$imgUrl+'/about/pic-8.png'" class="image" alt="">
          </p>
        </div>
      </section>


    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import 'element-ui/lib/theme-chalk/index.css'
  import {Carousel, CarouselItem} from 'element-ui'

  // banner图
  const BANNER = [
    'https://image1.cdn.yishizongheng.com/shejian_gw/banner/banner-1.png',
    'https://image1.cdn.yishizongheng.com/shejian_gw/banner/banner-3.png',
    'https://image1.cdn.yishizongheng.com/shejian_gw/banner/banner-4.png',
    'https://image1.cdn.yishizongheng.com/shejian_gw/banner/banner-5.png',
    'https://image1.cdn.yishizongheng.com/shejian_gw/banner/banner-6.png'
  ]

  export default {
    name: 'PAGE_ABOUT',
    components: {
      Carousel,
      CarouselItem
    },
    data() {
      return {
        banner: BANNER,
        bannerIndex: 0,
        pageTab: 1,
        pageTemp: 1,
        bannerHeight: 700
      }
    },
    mounted() {
      this.bannerHeight = 700 / 1920 * this.$refs.about.offsetWidth
    },
    methods: {
      changeBanner(num) {
        this.bannerIndex = num
      },
      change(num) {
        this.bannerIndex = num
        this.$refs.banner.setActiveItem(num)
      },
      changeTab(num) {
        this.pageTab = num
      },
      enterTab(num) {
        this.pageTemp = num
      },
      leaveTab(num) {
        this.pageTemp = ''
      }
    }
  }

</script>

<style scoped>
  .page-about{
    background: #FFF;
    min-width: 1000px;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
  }

  .page-content{
    width: 1000px;
    margin: 60px auto 30px;
  }
  .banner{
    position: relative;
  }
  .banner-image{
    width: 100%;
    height: 100%;
  }
  .banner-icon{
    position: absolute;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    height: 16px;
    z-index: 2;
  }
  .banner-icon .icon{
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background: #FFF;
    margin-right: 12px;
    display: inline-block;
  }
  .banner-icon .icon:last-child{
    margin-right: 0;
  }
  .banner-icon .icon.active{
    background: #fd5d4f
  }

  .big-tab{
    height: 194px;
    margin: 0 auto;
    color: #FFF;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .big-tab .tab-item{
    width: 400px;
    height: 174px;
    background-size: 100% 100%;
    transition: all 0.3s;
    display: flex;
    align-items: center;
  }
  .big-tab .tab-left{
    background: #f64c45;
  }
  .big-tab .tab-right{
    background:  #ffbd27;
  }
  .big-tab .tab-left .bg{
    width: 400px;
    height: 174px;
    background-image: url("https://image1.cdn.yishizongheng.com/shejian_gw/about/left.png");
  }
  .big-tab .tab-right .bg{
    width: 400px;
    height: 174px;
    background-image: url("https://image1.cdn.yishizongheng.com/shejian_gw/about/right.png");
  }
  .big-tab .tab-left.active{
    height: 194px;
    box-shadow: 0 0 20px 4px
    rgba(246, 76, 69, 0.3);
  }
  .big-tab .tab-right.active{
    height: 194px;
    box-shadow: 0 0 20px 4px
    rgba(255, 189, 39, 0.3);
  }
  .page-title{
    font-size: 32px;
    margin-top: 80px;
    margin-bottom: 38px;
    text-align: center;
  }
  .page-text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
    margin-bottom: 60px;
    text-align: justify;
  }
  .page-text .text{
    width: 510px;

  }
  .page-text .image{
    width: 420px;
  }
  .page-text .text-head{
    font-size: 16px;
    font-weight: bold;
  }
  .page-text .text-bottom{
    margin-top: 30px;
    display: block;
  }
  .page-box{
    transition: all 0.3s
  }
  .page-box .text{
    width: 510px;
  }
  .page-box .image{
    width: 420px;
  }

  .model-active {
    animation: fadeIn 1s;
  }


  .model-un-active {
    animation: fadeout 1s
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }




</style>
