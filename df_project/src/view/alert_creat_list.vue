<template>
  <div class="login_layout">
    <div class="login_layout_center">
			<h1>工单创建</h1>
			<div class="f-fl lable_txt"><label>使用材料：</label><Input placeholder="请输入工单编号" style="width:130px;"></Input></div>
			<div class="f-fl lable_txt"><label>处理过程和排障说明：</label><Input placeholder="请输入工单编号" style="width:130px;"></Input></div>
			<div class="f-fl lable_txt"><label>处理结果：</label>
			<Select v-model="model3" style="width:130px">
				<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			<div class="f-fl lable_txt"><label>备  注：</label><Input placeholder="请输入工单编号" style="width:130px;"></Input></div>
			<div class="f-fl lable_txt"><label>领导签字：</label>
			<Select v-model="model3" style="width:130px">
				<Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			<div class="f-fl lable_txt"><label>处理人员及电话：</label>
			<Select v-model="model3" style="width:130px">
				<Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			<div class="f-fl lable_txt"><label>领导签字：</label>
			<Select v-model="model3" style="width:130px">
				<Option v-for="item in cityList4" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			<div class="f-fl lable_txt"><label>处理人员及电话：</label>
			<Select v-model="model3" style="width:130px">
				<Option v-for="item in cityList5" :value="item.value" :key="item.value">{{ item.label }}</Option>
			</Select>
			</div>
			
    </div>
			<div class="f-fl">
			<Button type="info" class="button">取消</Button>
			<Button type="success" class="button">提交</Button>
			</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username: '',
      password:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_layout{width:100%;}
.login_layout_center{margin: auto;width: 80%;overflow: hidden; text-align:center;}
.lable_txt{width:300px; text-align:right; float:left;margin-top:20px;}
.button{float:left;width:200px; margin-left:20%; margin-top:20px;}
</style>