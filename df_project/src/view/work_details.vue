<template>
  <div class="login_layout">
    <div class="list_left">
		<div class="list_left_title">
			<h1>工单搜索</h1>
			<h2><a href="#">工单中心</a> > 工单详情</h2>
			<i-input :value.sync="value" placeholder="请输入..." style="width:200px"></i-input>
			<i-button type="error">搜索</i-button>
			<h1>工单搜索</h1>
			<Row style="display:none;">
				<i-col span="3">派送时间：</i-col>
				<i-col span="3">2017:12:12</i-col>
			</Row>
			<div class="f-fl"><label>派送时间：</label><Input placeholder="请输入工单编号" style="width:200px;"></Input></div>
			<div class="f-fl"><label>故障类型：</label>
			<Select v-model="model3" style="width:200px">
				<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			<div class="f-fl"><label>故障处理：</label>
			<Select v-model="model3" style="width:200px">
				<Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			<div class="f-fl"><label>完成日期：</label><Input placeholder="请输入工单编号" style="width:200px;"></Input></div>
			<div class="f-fl"><label>返单日期：</label><Input placeholder="请输入工单编号" style="width:200px;"></Input></div>
			<div class="f-fl"><label>设备类型：</label>
			<Select v-model="model3" style="width:200px">
				<Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			<div class="f-fl"><label>设备名称：</label>
			<Select v-model="model3" style="width:200px">
				<Option v-for="item in cityList4" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			<i-button type="error">搜索</i-button>
			<h1>流转进度</h1>
			<div class="f-fl"><label style="font-size:20px;">代维公司</label></div>
			<h1>处理情况</h1>
			<div class="f-fl lable_txt"><label>使用材料：</label><label style="font-size:20px;">代维公司</label></div>
			<div class="f-fl lable_txt"><label>处理过程和排障说明：</label><label style="font-size:20px;">代维公司</label></div>
			<div class="f-fl lable_txt"><label>处理结果：</label><label style="font-size:20px;">代维公司</label></div>
			<div class="f-fl lable_txt"><label>备  注：</label><label style="font-size:20px;">代维公司</label></div>
			<div class="f-fl lable_txt"><label>领导签字：</label><label style="font-size:20px;">代维公司</label></div>
			<div class="f-fl lable_txt"><label>处理人员及电话：</label><label style="font-size:20px;">代维公司</label></div>
			<div class="f-fl lable_txt">
			<i-button type="info" style="width:100px;">转交工单</i-button>
			<i-button type="error" style="width:100px; margin-left:20%;">完结工单</i-button>
			</div>
			<div class="date_list">
			<h1>操作日志</h1>
				<row class="date_title">
					<i-col span="8">杨中进</i-col>
					<i-col span="8">2017/4/24   9:10:00</i-col>
					<i-col span="8">处理结果</i-col>
				</row>
				<row>
					<i-col span="6">处理公司</i-col>
					<i-col span="6">代维公司</i-col>
					<i-col span="6">处理人员及电话：</i-col>
					<i-col span="6">杨进中：18217099516</i-col>
				</row>
				<row>
					<i-col span="6">使用材料</i-col>
					<i-col span="18">无</i-col>
				</row>
				<row>
					<i-col span="6">处理过程和排障说明</i-col>
					<i-col span="18">到站点排查发现供电正常，BBU和传输设备掉电，排查发现电压转换器损坏，通知厂家更换</i-col>
				</row>
				<row>
					<i-col span="6">处理结果</i-col>
					<i-col span="18">厂家更换转换器，设备恢复正常运行</i-col>
				</row>
				<row>
					<i-col span="6">备  注</i-col>
					<i-col span="18">无</i-col>
				</row>
				<row>
					<i-col span="6">领导签字</i-col>
					<i-col span="18">无</i-col>
				</row>
			</div>
		</div>
	</div>
	<div class="list_right">
		<h1>工单信息</h1>
		<row class="row-size">
			<i-col span="12">工单号：</i-col>
			<i-col span="12">111</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">创建时间：</i-col>
			<i-col span="12">2017/4/24 9:10:00</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">故障等级:</i-col>
			<i-col span="12">重要</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">发起人:</i-col>
			<i-col span="12">AAA</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">站点名称:</i-col>
			<i-col span="12">上海信息技术大厦</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">发生地点:</i-col>
			<i-col span="12">控江路1555号上海信息技术大厦西侧裙楼(江浦路口)</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">故障设备:</i-col>
			<i-col span="12">断站</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">受理组:</i-col>
			<i-col span="12">代维</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">受理人:</i-col>
			<i-col span="12">陈科宇</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">派工类型:</i-col>
			<i-col span="12">优化</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">手机号码:</i-col>
			<i-col span="12">13901667214</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">告警代码:</i-col>
			<i-col span="12">198099803</i-col>
		</row>
		<row class="row-size">
			<i-col span="12">状态:</i-col>
			<i-col span="12">受理中</i-col>
		</row>
	</div>
</div>
</template>

<script>
export default {
        data () {
            return {
                cityList: [
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '华为',
                        label: '华为'
                    },
                    {
                        value: '中兴',
                        label: '中兴'
                    },
                    {
                        value: '东方有线',
                        label: '东方有线'
                    },
                    {
                        value: '广电',
                        label: '广电'
                    },
                    {
                        value: '代维',
                        label: '代维'
                    },
					{
                        value: '诺基亚贝尔',
                        label: '诺基亚贝尔'
                    }
                ],
		cityList2: [
                    {
                        value: '阿萨德',
                        label: '阿萨德'
                    },
                    {
                        value: '阿什顿',
                        label: '阿什顿'
                    },
                    {
                        value: '周星驰',
                        label: '周星驰'
                    },
                    {
                        value: '德瓦亲',
                        label: '德瓦亲'
                    },
                    {
                        value: '阿瑟斯',
                        label: '阿瑟斯'
                    },
                    {
                        value: '打撒撒',
                        label: '打撒撒'
                    }
                ],
		cityList3: [
                    {
                        value: '阿萨德',
                        label: '阿萨德'
                    },
                    {
                        value: '阿什顿',
                        label: '阿什顿'
                    },
                    {
                        value: '周星驰',
                        label: '周星驰'
                    },
                    {
                        value: '德瓦亲',
                        label: '德瓦亲'
                    },
                    {
                        value: '阿瑟斯',
                        label: '阿瑟斯'
                    },
                    {
                        value: '打撒撒',
                        label: '打撒撒'
                    }
                ],
		cityList4: [
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '优化',
                        label: '优化'
                    },
                    {
                        value: '维护',
                        label: '维护'
                    },
                    {
                        value: '工程',
                        label: '工程'
                    }
                ],		
            }
        }
    }	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_layout{width:100%;}
.list_left{width:70%;float:left; text-align:center;}
.list_left_title{width:97%;float:left;line-height:50px; padding:15px 0 0 3%;}
.list_right{width:30%;float:left;padding-top:15px;	}
.lable_txt{width:300px; text-align:right; float:left;margin-left:20%;}
label{font-size:16px;}
.date_list{width:100%; float:left;}
.date_title{padding:20px;text-align:center; border-bottom:1px solid #dedede;}
.row-size{font-size:16px; line-height:35px;}
</style>