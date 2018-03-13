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
                <span style="font-size:20px;color:#32c5d2">搜索条件</span>
        </div>
		<div class="search">
			<div class="f-fl">
				<label class="search_label">设置范围</label>
					<i-input :value.sync="value" placeholder="全部" class="label_input"></i-input>
					<i-button type="primary" class="btn_select">...</i-button>
					<i-button type="primary" class="btn_select_all">全部</i-button>
			</div>
			<div class="f-fl">
					<label class="search_label">厂商范围</label>
					<i-input :value.sync="value" placeholder="全部" class="label_input"></i-input>
					<i-button type="primary" class="btn_select">...</i-button>
					<i-button type="primary" class="btn_select_all">全部</i-button>
			</div>
			<div class="f-fl">
					<label class="search_label">设备类型</label>
					<i-input :value.sync="value" placeholder="全部" class="label_input"></i-input>
					<i-button type="primary" class="btn_select">...</i-button>
					<i-button type="primary" class="btn_select_all">全部</i-button>
			</div>
		</div>
		<div class="search">
			<div class="f-fl" style="width:60%;">
				<i-input :value.sync="value" placeholder="全部" class="input_widthmax"></i-input>
				<i-button type="primary" class="btn_select"  style="margin-left:10px;">搜索</i-button>
				<i-button type="primary" class="btn_select_all" style="margin-left:10px;">汇总xls</i-button>
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
				<i-button type="primary" class="btn_select" style="float:right;"><Icon type="minus"></Icon>关闭</i-button>
				<i-button type="primary" class="btn_select_all" style="float:right;"><Icon type="clipboard"></Icon>详情</i-button>
				<i-button type="primary" class="btn_select" style="float:right;"><Icon type="plus" style="padding-right:5%;"></Icon>创建</i-button>
        </div>
			 <i-table border :columns="columns2" :data="data3" style="width:100%; text-algin:center;">
				
			 </i-table>
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
                columns2: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center',
						fixed: 'left'
                    },
                    {
                        title: '编号',
                        key: 'number1',
                        width: 80
                    },
					 {
                        title: '单号',
                        key: 'number2',
                        width: 150
                    },
                    {
                        title: '时间',
                        key: 'time',
                        width: 150
                    },
                    {
                        title: '发起人',
                        key: 'name',
                        width: 100
                    },
                    {
                        title: '类型',
                        key: 'class',
                        width: 100
                    },
                    {
                        title: '设备',
                        key: 'address',
                        width: 150
                    },
                    {
                        title: '状态',
                        key: 'action',
                        fixed: 'right',
                        width: 200,
						render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data3: [
                    {
						number1:'123',
						number2:'OPG20180307-0004',
						time:'2018-12-12 23:23:23',
                        name: '王小明',
						class:'待审查',
                        address: '北京市朝阳区芍药居',
						action:'申请中'
                    },
                    {
                        number1:'123',
						number2:'OPG20180307-0004',
						time:'2018-12-12 23:23:23',
                        name: '王小明',
						class:'待审查',
                        address: '北京市朝阳区芍药居',
						action:'申请中'
                    },
                    {
                        number1:'123',
						number2:'OPG20180307-0004',
						time:'2018-12-12 23:23:23',
                        name: '王小明',
						class:'待审查',
                        address: '北京市朝阳区芍药居',
						action:'申请中'
                    },
                    {
                        number1:'123',
						number2:'OPG20180307-0004',
						time:'2018-12-12 23:23:23',
                        name: '王小明',
						class:'待审查',
                        address: '北京市朝阳区芍药居',
						action:'申请中'
                    }
                ]
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