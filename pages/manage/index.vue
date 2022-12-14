<template>
    <div>
        <div class="page-content">
         <h2>供应商须知</h2>
         <div class="page-text">
             <img :src="$imgUrl+'/manage/pic1.png'" class="manage-image" alt="">
             <span class="span-content">
              <span class="text-head">
                资质需求
              </span>
              <span>
                  加盟必备资质：包括企业营业执照、税务登记证、组织机构代码证。另外还应具备如下资质证明。
              </span>
              <span>
                  行业资质：针对特殊物资，需要提供产品许可认证、质量体系认证及产品专利证书等，如食品行业认证、药品行业认证、电子电器行业认证、特种设备行业认证、船级社认证、民航专用设备认证、航空器材认证、车辆行业认证、软件行业认证、物流行业认证等。
              </span>
              <span>
                  其他要求: 供应商需提供经营产品的检验报告、物流配送范围、售后服务等基本信息。
              </span>
            </span>
         </div>
         <div class="page-text">
             <span class="span-content">
              <span class="text-head text-right">
                档案审核
              </span>
              <span>
                包括供应商的必备资质、行业资质、产品类别、物流配送范围、售后服务、供应商联系信息、供应商分类（如OEM、代理商等）、财务状况和商业信誉等。
              </span>
              <span>
                代理商、分销商、零售商的档案审核要求：代理商应提供相应物资代理授权证明书;
              </span>
              <span>
                注册资金不低于100万人民币。
              </span>
              <span>
                财务状况和商业信誉文件材料（如最近一年经审计后的财务报表，最近三年主要业绩情况）。
              </span>
              <span>
                OEM供应商、制造商的档案审核审核要求：注册资金不低于100万人民币；
              </span>
              <span>
                  如该类物资必需具备生产许可才能生产的，生产厂家必须具备该类物资的生产许可证；
              </span>
              <span>
                  提供高价值物资、用于保障生产和安全的物资，供应商必须成立3年以上；
              </span>
              <span>
                  提供高价值物资、供用于保障生产和安全的物资，供应商必须建立规范的质量管理体系（例如，通过ISO9000质量管理体系认证等）；
              </span>
              <span>
                  财务状况和商业信誉文件材料（如最近一年经审计后的财务报表，最近三年主要业绩情况）
              </span>
              <span>
                  原材料供应商的档案审核要求：必须具有生产或销售该类物资资格；必须具有该类物资的物流运输条件；
              </span>
              <span>
                  财务状况和商业信誉文件材料（如最近一年经审计后的财务报表，最近三年主要业绩情况）。
              </span>
            </span>
            <div class="manage-image-width">
                <img :src="$imgUrl+'/manage/pic2.png'" class="manage-image" alt="">
                <img :src="$imgUrl+'/manage/pic3.png'" class="manage-image image-bottom" alt="">
            </div>
         </div>
         <div class="page-text">
             <img :src="$imgUrl+'/manage/pic4.png'" class="manage-image" alt="">
              <span class="span-content">
              <span class="text-head">
                现场审核
              </span>
              <span>
                对重要物资的供应商，在审批期间可由采购单位、申购单位和技术部门、质量部门等代表组成审核小组，视情形安排对供应商进行现场审核。
              </span>
              <span>
                现场审核包括审核其资产及负债、组织及人员结构、生产设备、厂房、研发能力、质量体系、生产流程、供应能力、物流运输、市场及主要用户、环保等信息；审核其主要上游供应商的资质；核实各类资质证明文件的有效性；走访服务客户，验证其产品质量及履约能力。
              </span>
            </span>
         </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'PAGE_MANAGE',
    components: {

    }
}
</script>

<style scoped>
  .page-content {
    width: 1000px;
    margin: 90px auto;
  }
  .page-content>h2 {
     font-size: 32px;
     text-align: center;
     margin-bottom: 60px;
     color: #333333;
  }
  .page-text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 41px;
  }
  .manage-image {
     width: 400px;
     height: 300px;
  }

  .manage-image-width {
    width: 400px;
  }

  .span-content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
    text-align: justify;
    width: 540px;
  }
  .text-right {
      text-align: right;
  }
  .image-bottom{
      margin-top: 38px;
  }
  .span-content .text-head{
      height: 26px;
      font-size: 20px;
      line-height: 20px;
      color: #333333;
      margin-bottom: 16px;
      font-weight: bold;
  }
</style>
