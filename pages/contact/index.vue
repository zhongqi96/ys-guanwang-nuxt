<template>
    <div>
        <div class="page-content">
         <h2>公司地图</h2>
         <!-- <img :src="$imgUrl+'/contact/contact-map.png'" class="image" alt=""> -->
         <div id="location-map">

         </div>
         <h2>联系我们</h2>
         <div class="contact-list">
            
            <div class="contact-box">
                <div class="contact-item">
                   <img :src="$imgUrl+'/contact/contact_dianhua.png'" alt="">
                   <p>电话：020-83677229</p>
               </div>
                <div class="contact-item">
                   <img :src="$imgUrl+'/contact/contact_mail.png'" alt="">
                   <p>邮编：510610</p>
                </div>
            </div>
            
            <div class="contact-box item-left">
                <!-- <div class="contact-item">
                   <img :src="$imgUrl+'/contact/contact_chuanzhen.png'" alt="">
                   <p>传真：020-38677975</p>
                </div> -->
            
                 <div class="contact-item">
                    <img :src="$imgUrl+'/contact/contact_dizhi.png'" alt="">
                    <p>地址：广州市天河区林和西路167号威尼国际1445室</p>
                </div>
            </div>
         </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'PAGE_CONTACT',
    data() {
        return {

        }
    },
    mounted() {
        //组件初始化
        this.init()
    },
    methods: {
        init() {
           //地图初始
           var map = new BMap.Map('location-map',{
               enableHighResolution: true
           })
           
           // 中心点
            var point = new BMap.Point(113.328336,23.156759);
            map.centerAndZoom(point, 16);
            map.enableScrollWheelZoom(true);
            var marker = new BMap.Marker(point);
            map.addOverlay(marker);
            map.enableDragging();
        }
    }
}
</script>

<style scoped>

  .page-content {
    width: 1000px;
    margin: 90px auto 51px;
    text-align:center;
  }
  .page-content>h2 {
     font-size: 32px;
     text-align: center;
     margin-bottom: 38px;
     color: #333333;
  }

  .page-content .image {
      margin-bottom: 50px;
  }
  .contact-list {
      display: flex;
      justify-content: center;
  }
  .contact-box {
      display: flex;
      flex-direction: column;
  }
  .contact-item {
      display: flex;
      margin-bottom: 15px;
  }
  .contact-item img {
      width: 21px;
  }
  .contact-item p{
     height: 21px;
     font-size: 14px;
     line-height: 21px;
     margin-left: 12px;
     color: #333333;
     display: inline-block;
  }
  .item-right {
      width: 510px;
  }
  .item-left {
     margin-left: 80px;
  }
   
  #location-map {
      width: 630px;
      height: 568px;
      margin: 0 auto 60px;
  }
</style>

