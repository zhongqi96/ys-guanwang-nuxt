<template>
    <div>
        <div class="page-content">
            <h2>运营线路</h2>
            <div v-for="(item,index) in dataList" :key="index">
                <h4>{{item.title}}</h4>
                <span class="span-content">
                    <span v-if="item.textTop.length != 0" class="span-top">
                        {{item.textTop}}
                    </span>
                    <span v-if="item.textBottom.length != 0" class="span-bottom">
                        {{item.textBottom}}
                    </span>
                </span>
                <img :src=item.image class="image" alt="">
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'PAGE_BUSINESS',
    components: {

    },
    data() {
        return {
            dataList:[
            {
                title:"易食纵横股份有限公司",
                textTop:"服务保障厦门基地、西安基地、兰州基地、南昌基地、郑州基地、洛阳基地，保障车底179对，员工2000多名。",
                textBottom:"运营线路包括：厦重线、厦昆线、厦武线、厦上线、厦深线、厦杭线、厦宁线、厦郑线、厦景线、厦南线（厦门-南京）、厦南线（厦门-南昌）、厦港线、厦北线、环线、厦诏线、厦汉线、厦成线、厦门北始发车次（高峰线）、厦门站车次（高峰线）、西兰线、西广线、西深线、西津线、西义线、西宝线、西延线、西京线、西福线、西成线、昆明线、济南线改、威海线、杭州线、汉中宁强高峰、大荔高峰、西大线、西宁线、西汉线兰州-天水（东岔、西安）、兰州-天水（中川）、兰州-太原、兰州-西安、兰州-东岔（嘉峪关、张掖、西安）、兰州-嘉峪关（西安）、兰州-敦煌（中川）、兰州-敦煌（嘉峪关、中川）、兰州-嘉峪关、兰州-乌鲁木齐、兰州-中川、兰州-杭州（天水、东岔）、兰州-北京（西安）、兰州-西安、兰州-广州、兰州-徐州、兰州-重庆、兰州-重庆（陇南）、兰州-成都、兰州-青岛（济南）、南福、南武线、南深线、南宁线、南厦线、南郑线、南重线、南杭线、南广线、南衢线、昌九婺源线、京商线、京武线、郑京线、郑兰线、郑威线、城际（周口、南阳）、郑汉线、郑合线、洛北线、洛福线、洛广线、洛上线、洛宁线、宝鸡-连云港、宝鸡-重庆。",
                image:'https://image1.cdn.yishizongheng.com/shejian_gw/business/business-map1.png'
            },
            {
                title:"广州动车组餐饮有限公司",
                textTop:"服务保障广州南基地、广州东基地、长沙南基地、深圳北基地、佛山西基地、潮汕基地，保障车底311对，员工3000多名。",
                textBottom:"运营线路包括：贵广线、北海线、百色线、南广线、成都线、昆明线、江湛线、重庆线、宜昌线、济南线、郑州线、武广线、潮汕线、蚌埠线、信阳线、上海线、兰州线、北京线、怀化线、广深港线、广深港重庆线、广珠线、广梅线、广怀线、北京线、广深线、武广线、长珠线、江湛线、北京线、桂林线、上海线、西安线、合肥线、温州线、南京线、宁波线、厦门线、昆明线、贵阳线、兰州线、重庆线、成都线、沈阳线、南宁线、香港线、黔张常线、怀邵衡线、南京线、厦门线、潮汕线、城际线、武广线、桂林线、怀化线、昆明线、西安线、广深港、上海线、重庆线、郑州线、江湛线、成都线、昆明线、福州线、厦门线、潮广线、潮深线。",
                image:'https://image1.cdn.yishizongheng.com/shejian_gw/business/business-map2.png'
            },
            {
                title:"海南易铁动车组餐饮服务有限公司",
                textTop:"",
                textBottom:"服务保障海口基地，保障车底16对，员工近150多名。",
                image:'https://image1.cdn.yishizongheng.com/shejian_gw/business/business-map3.png'
            }
        ]
        }
    }
}
</script>

<style scoped>
  .page-content {
    width: 1000px;
    margin: 90px auto 0;
    text-align: center;
  }
  .page-content h2 {
     font-size: 32px;
     text-align: center;
     margin-bottom: 38px;
     color: #333333;
  }
  .page-content h4 {
     font-size: 20px;
     line-height: 20px;
     text-align: center;
     margin-bottom: 12px;
     color: #333333;
  }
  .page-content .image {
      margin-bottom: 90px;
  }
  .span-content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #333333;
    text-align: justify;
    line-height: 24px;
  }
  .span-top {
     margin-bottom: 12px;
  }
  .span-bottom{
     margin-bottom: 38px;
  }
</style>
