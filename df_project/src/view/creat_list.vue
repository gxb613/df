<template>
  <div class="login_layout">
     <headpage />
     <menupage />
    <div class="val">
      <div class="title">工单中心</div>
      <div class="search">
        <div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">创建工单</span>
				<span style="font-size:14px;color:#999;width:80px; padding:10px; line-height:30px;">标准信息</span>
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
                <span style="font-size:20px;color:#32c5d2">新建工单</span>
				<span style="font-size:14px;color:#999;width:80px; padding:10px; line-height:30px;">工单描述</span>
        </div>
		
		<h3 style="margin:10px; color:#999;">描述：</h3><Input type="textarea" :rows="4" placeholder="请输入..." class="creat_input"></Input>
		<div class="creat_btn">
		<Button type="primary" class="btn_select">取消</Button>
		<Button type="primary" class="btn_select_all" style="margin-left:10px;">创建并派发</Button>
		</div>
      </div>
    </div>
  </div>
</template>

<script>
import headpage from "../components/head";
import menupage from "../components/menu";
export default {
  name: "list",
  data() {
    return {};
  },
  components: {
    headpage,
    menupage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_layout {
  height: 60%;
}
.val {
  background: rgb(236, 234, 234);
  position: absolute;
  top: 80px;
  bottom: 0px;
  left: 240px;
  right: 0;
}
.title {
  font-size: 24px;
  padding: 10px 2%;
  font-weight: bold;
  color: #697882;
}
.search {
  width: 96%;
  margin: 0 2%;
  background: #fff;
  overflow: hidden;
  padding: 20px 0px;
  padding-left: 20px;
}
.search_label {
  font-size: 16px;
  padding-right: 10px;
  padding-top: 4px;
  display: block;
  float: left;
}
.search .f-fl {
  float: left;
  padding: 0 10px 10px 10px;
}
.label_input {
  width: 35%;
  float: left;
}
.list_btn {
  width: 96%;
  margin: 10px 2%;
  background: #fff;
  overflow: hidden;
  padding: 20px;
  padding-left: 20px;
}
.list_btn .ivu-btn {
  margin: 0 1px;
}
.f-fl {
  width: 33%;
}
.caption {
  width: 100%;
  border-bottom: 1px solid #eef1f5;
  line-height: 40px;
}
.btn_select {
  background: #217ebd;
  float: left;
  height: 32px;
}
.btn_select_all {
  background: #e12330;
  border: #e12330;
  float: left;
  height: 32px;
}
.input_widthmax {
  width: 70%;
  float: left;
}
.creat_input {
  width: 50%;
}
.creat_btn {
  margin-top: 25px;
  margin-left: 10px;
}
@media screen and (max-width: 1000px) {
  .hide {
    display: none;
  }
  .val {
    left: 0px;
  }
  .search_label {
    width: 100%;
    font-size: 16px;
    color: #000;
  }
  .f-fl {
    width: 100%;
    font-size: 16px;
    color: #000;
  }
  .label_input {
    width: 80%;
  }
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  .label_input {
    width: 50%;
  }
  .search {
    padding-left: 10px;
  }
  .input_widthmax {
    width: 50%;
  }
}
@media screen and (min-width: 450px) and (max-width: 767px) {
  .label_input {
    width: 50%;
  }
  .search {
    padding-left: 10px;
  }
}

@media screen and (min-width: 768px) and (max-width: 820px) {
  .search_label {
    font-size: 16px;
  }
}
@media screen and (min-width: 820px) and (max-width: 1120px) {
  .search_label {
    font-size: 16px;
  }
}
</style>