<template>
  <div class="login_layout">
     <headpage />
	 <menupage />
    <div class="val">
      <div class="title">设备中心 <span style="font-size:12px;">网管类设备</span> </div>
      <div class="search">
        <div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">搜索条件</span>
        </div>
		<div class="search">
			<div class="f-fl" style="width:60%;">
				<i-input :value.sync="value" placeholder="全部" class="input_widthmax"></i-input>
				<i-button type="primary" class="btn_select"  style="margin-left:10px;">搜索</i-button>
			</div>
		</div>
      </div>
		  <div class="list_btn">
				<div class="caption">
					<Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
					<span style="font-size:20px;color:#32c5d2">设备列表 </span>
					<i-button type="primary" class="btn_select" style="float:right;"><Icon type="minus"></Icon>关闭</i-button>
					<i-button type="primary" class="btn_select_all" style="float:right;"><Icon type="clipboard"></Icon>详情</i-button>
					<i-button type="primary" class="btn_select" style="float:right;"><Icon type="plus" style="padding-right:5%;"></Icon>创建</i-button>
			</div>
				 <i-table border :columns="columns2" :data="data3" style="width:100%; text-algin:center;">
					
				 </i-table>
		  </div>
		  </div>
    </div>
	
  </div>
</template>

<script>
import headpage from '../components/head'
import menupage from '../components/class_menu'
export default {
  name: 'list',
  data () {
            return {
                columns2: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center',
						fixed: 'left'
                    },
					{
                        title: '编号',
                        key: 'number',
                        width: 80
                    },
                    {
                        title: '系统名',
                        key: 'name',
                        width: 120
                    },
					 {
                        title: '区域',
                        key: 'address_or',
                        width: 150
                    },
                    {
                        title: '厂商',
                        key: 'class',
                        width: 150
                    },
                    {
                        title: '开通',
                        key: 'onoff',
                        width: 100
                    },
                ],
                data3: [
                    {
						number:'123',
						name:'esight',
						address_or:'无',
						class:'中兴',
						onoff:'开通'
                    },
                    {
						number:'123',
						name:'esight',
						address_or:'无',
						class:'中兴',
						onoff:'开通'
                    },
					{
						number:'123',
						name:'esight',
						address_or:'无',
						class:'中兴',
						onoff:'开通'
                    },
					{
						number:'123',
						name:'esight',
						address_or:'无',
						class:'中兴',
						onoff:'开通'
                    },
					{
						number:'123',
						name:'esight',
						address_or:'无',
						class:'中兴',
						onoff:'开通'
                    },
                ]
            }
  },
  components:{
    headpage,menupage
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_layout{height:60%;}
.menu{background-color: rgb(109, 110, 113);width:240px;position: absolute;top: 80px;bottom: 0px;left: 0px;}
.val{background:rgb(236, 234, 234);position: absolute;top: 80px;bottom: 0px;left: 240px;right:0}
.title{font-size:24px;padding:10px 2%; font-weight:bold; color:#697882;}
.search{width:96%;margin:0 2%;background:#fff;overflow:hidden;padding:20px 0px;padding-left:20px}
.search_label{font-size:16px;padding-right: 10px;padding-top:4px;display: block;float: left;}
.search .f-fl{float:left;padding:0 10px 10px 10px; }
.label_input{width:35%; float:left;}
.list_btn{width:96%;margin:10px 2%;background:#fff;overflow:hidden;padding:20px;padding-left:20px}
.list_btn .ivu-btn{margin:0 1px}
.f-fl{width:33%;}
.caption{width:100%; border-bottom:1px solid #eef1f5;line-height:40px;}
.btn_select{background:#217ebd; float:left; height:32px;}
.btn_select_all{background:#e12330; border:#e12330; float:left;height:32px;}
.input_widthmax{width:70%; float:left; }

@media screen and (max-width:1000px)
{
	.hide{display:none;}
	.val {left:0px;}
	.search_label{width:100%; font-size:16px; color:#000;}
	.f-fl{width:100%; font-size:16px;  color:#000;}
	.label_input{width:80%;}
}
@media screen and (min-width:320px) and (max-width:479px)
{
	.label_input{width:50%;}
	.search{padding-left:10px;}
	.input_widthmax{width:50%;}
}
@media screen and (min-width:450px) and (max-width:767px)
{
	.label_input{width:50%;}
	.search{padding-left:10px;}
}

@media screen and (min-width:768px) and (max-width:820px)
{
	.search_label{font-size:16px;}
}
@media screen and (min-width:820px) and (max-width:1120px)
{
	.search_label{font-size:16px;}
}

</style>