<template>
  <div class="login_layout">
     <headpage />
     <div class="menu hide">
     <Menu theme="dark" active-name   ="1">
        <Menu-group title="工单中心">
            <Menu-item name="1">
                <Icon type="arrow-up-a" size="18"></Icon>申请中的工单
            </Menu-item>
            <Menu-item name="2">
                <Icon type="play" size="16"></Icon>受理中的工单
            </Menu-item>
            <Menu-item name="3">
                <Icon type="checkmark-round" size="18"></Icon>已完结的工单
            </Menu-item>
            <Menu-item name="4">
                <Icon type="stop" size="16"></Icon>已关闭的工单
            </Menu-item>
            <Menu-item name="5">
                <Icon type="record" size="16"></Icon>工单汇总
            </Menu-item>
        </Menu-group>
    </Menu>
    </div>
    <div class="val">
      <div class="title">工单中心</div>
      <div class="search">
        <div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">修改工单</span>
				<span style="font-size:14px;color:#999;width:80px; padding:10px; line-height:30px;">OPG20180307-0003</span>
        </div>
		<div class="search">
			<div class="f-fl">
				<label class="search_label">设置范围</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">选择</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
			<div class="f-fl">
					<label class="search_label">厂商范围</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">选择</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
			<div class="f-fl">
					<label class="search_label">设备类型</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">选择</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
			<div class="f-fl">
					<label class="search_label">通知类型</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">选择</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
			<div class="f-fl">
					<label class="search_label">故障设备</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">选择</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
			<div class="f-fl">
					<label class="search_label">故障类型</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">选择</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
		</div>
		<div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">故障描述</span>
        </div>
		
		<h3 style="margin:10px; color:#999;">问题描述：</h3><Input type="textarea" :rows="4" placeholder="请输入..." class="creat_input"></Input>
		<h3 style="margin:10px; color:#999;">结单描述：</h3><Input type="textarea" :rows="4" placeholder="请输入..." class="creat_input"></Input>
		<div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">跟单操作</span>
        </div>
		<div class="revise_btn">
			<Button type="primary" class="revise_close">关闭</Button>
			<Button type="primary" class="revise_censor">审核</Button>
			<Button type="primary" class="revise_appoint">派单</Button>
			<Button type="primary" class="revise_over">结单</Button>
			<Button type="primary" class="revise_question">处理故障</Button>
		</div>
		<div class="caption" style="margin-top:20px;">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">工单详情</span>
        </div>
		<div class="revise_details">
			<div class="revise_details_layout">
				<div class="revise_details_title">
					<h2>#85:推送测试组</h2>
					<p>袁军 2018-03-07 15:57:34 </p>
					<p>已阅</p>
				</div>
				<div class="revise_people">
					<p>
					<img src="/static/images/people.png" style="float:right;" />
					<span >彭晓魏</span>
					<span>2018-03-07 14:11:07</span>
					</p>
				</div>
				<div class="revise_msg">
					<p>使用材料：asdasdasd</p>
					<p>处理过程：阿萨德撒所多</p>
					<p>处理结果：阿四大四大</p>
					<p class="revise_msgC">2018-03-07 14:11:07</p>
				</div>
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
.creat_input{width:50%;}
.creat_btn{margin-top:25px; margin-left:10px;}
.revise_btn{width:100%; margin-top:20px;}
.revise_close{background:#32c5d2;border:none;}
.revise_censor{background:#3598dc;border:none;}
.revise_appoint{background:#c49f47;border:none;}
.revise_over{background:#e7505a;border:none;}
.revise_question{background:#32c5d2;border:none;}
.revise_details{width:90%; padding:5%;}
.revise_details_layout{width:80%; border:1px solid #999; padding:9.7%; float:left;}
.revise_details_title{width:50%; float:left;}
.revise_details_title p{color:#578ebe;}
.revise_people{width:100%; width:50%; float:left;}
.revise_people span{float:left; text-align:right; width:70%; line-height:30px;}
.revise_msg{width:100%; float:left; border-top:2px solid #bfcad1; margin:5% 0px;}
.revise_msg p{margin:20px 0; line-height:1.7; font-size:14px;}
.revise_msgC{color:#337ab7;}
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