<template>
  <div class="login_layout">
     <heaspage />
     <menupage />
     <networktree :networktree="networktree"/>
     <addresstree :adtree="adtree"/>
     <fabtree  :fabtree="fabtree"/>
    
    <div class="val">
      <div class="title">工单中心</div>
      <div class="search">
        <div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">搜索条件</span>
        </div>
		<div class="search">
			<div class="f-fl">
				<label class="search_label">设置范围</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">...</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
			<div class="f-fl">
					<label class="search_label">厂商范围</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">...</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
			<div class="f-fl">
					<label class="search_label">设备类型</label>
					<Input v-model="value" placeholder="全部" class="label_input"></Input>
					<Button type="primary" class="btn_select">...</Button>
					<Button type="primary" class="btn_select_all">全部</Button>
			</div>
		</div>
		<div class="search">
			<div class="f-fl" style="width:60%;">
				<Input v-model="value" placeholder="全部" class="input_widthmax"></Input>
				<Button type="primary" class="btn_select"  style="margin-left:10px;">搜索</Button>
				<Button type="primary" class="btn_select_all" style="margin-left:10px;">汇总xls</Button>
			</div>
		</div>
      </div>
      <div class="list_btn">
        <div class="mb_20">
          <Button type="primary">创建工单</Button><Button type="primary">搜索</Button>
          <Button>重置</Button><Button>导出EXCEL</Button>
        </div>
			<div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">工单列表</span>
				<Button type="primary" class="btn_select" style="float:right;"><Icon type="minus"></Icon>关闭</Button>
				<Button type="primary" class="btn_select_all" style="float:right;"><Icon type="clipboard"></Icon>详情</Button>
				<Button type="primary" class="btn_select" style="float:right;"><Icon type="plus" style="padding-right:5%;"></Icon>创建</Button>
        </div>
			 <Table  border :columns="columns2" :data="data3" style="width:100%; text-algin:center;">
			 </Table>
             <Page :total="20" style="float:right;margin-top:10px;"></Page>
      </div>
    </div>
  </div>
</template>

<script>
import heaspage from '../components/head'
import addresstree from '../components/addresstree'
import fabtree from '../components/fabtree'
import menupage from '../components/menu'
import networktree from '../components/networktree'
export default {
  name: 'list',
     data () {
            return {
                adtree:false,
                networktree:false,
                fabtree:false,
                value:'',
                columns2: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center',
                        f
                    },
                    {
                        title: '编号',
                        key: 'dbid',
                        width: 80
                    },
					 {
                        title: '单号',
                        key: 'ordersn',
                        width: 150
                    },
                    {
                        title: '时间',
                        key: 'createtime',
                        width: 150
                    },
                    {
                        title: '发起人',
                        key: 'creator',
                        width: 100
                    },
                    {
                        title: '类型',
                        key: 'errortype',
                        width: 100
                    },
                    {
                        title: '设备',
                        key: 'device',
                        width: 150
                    },
                    {
                        title: '状态',
                        key: 'action',
                        width: 200,
                    }
                ],
                data3: []
            }
  },
  components:{
    heaspage,addresstree,menupage,networktree,fabtree
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_layout{height:60%;}
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