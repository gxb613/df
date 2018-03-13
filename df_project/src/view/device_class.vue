<template>
  <div class="login_layout">
     <headpage />
     <div class="menu">
     <Menu theme="dark" active-name   ="1">
        <Menu-group title="设备">
            <Menu-item name="1">
                基站类设备
            </Menu-item>
            <Menu-item name="2">
                网管类设备
            </Menu-item>
            <Menu-item name="3">
                核心网
            </Menu-item>
            <Menu-item name="4">
                传输类设备
            </Menu-item>
			<Menu-item name="5">
                基础设置
            </Menu-item>
        </Menu-group>
    </Menu>
    </div>
    <div class="val">
      <div class="title">设备中心 <span style="font-size:12px;">核心网</span> </div>
      <div class="search">
        <div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">网络拓扑</span>
        </div>
		<div class="search">
			<p style="color:#337ab7; font-size:14px;">浦东</p>
			<p><img src="/static/images/pudong_160.png" /></p>
			<p style="color:#337ab7; font-size:14px;">杨浦</p>
			<p><img src="/static/images/yangpu_160.png" /></p>
		</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import headpage from '../components/head'
export default {
  name: 'list',
  data () {
    return {
     columns1: [
		  {
             type: 'selection',
             width: 60,
             align: 'center'
          },
          {
              title: '序号',
              key: '1'
          },
          {
              title: '设备种类',
              key: '2'
          },
          {
              title: '厂商',
              key: '3'
          },
      ],
      data1: [
          {
              1: '1',
              2: '基站类设备',
              3: '华为',
          },{
              1: '1',
              2: '网管',
              3: '中兴',
          },
          {
              1: '1',
              2: '传输',
              3: '贝尔',
          }
      ],
    }
  },
  components:{
    headpage
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