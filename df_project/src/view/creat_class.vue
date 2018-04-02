<template>
  <div class="login_layout">
     <headpage />
     <menupage />
    <div class="val">
      <div class="title">工单中心</div>
      <div class="search">
        <div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">新增设备</span>
				<span style="font-size:14px;color:#999;width:80px; padding:10px; line-height:30px;">基础信息</span>
        </div>
		<div class="search">
			<div class="f-fl">
				<label class="search_label">站名</label>
					<Input v-model="device1.sitename" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl">
					<label class="search_label">站号（自动）</label>
					<Input v-model="device1.sitenum" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl">
					<label class="search_label">位置</label>
					<Input v-model="device1.area" placeholder="全部" class="label_input"></Input>					
			</div>
			<div class="f-fl">
					<label class="search_label">厂商</label>
					<Input v-model="device1.fab" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl">
					<label class="search_label">设备类型</label>
					<Input v-model="device1.network" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl">
					<label class="search_label">开通日期</label>
					<Input v-model="device1.opendate" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl">
				<label class="search_label">拼音</label>
					<Input v-model="device1.pinyin" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl">
					<label class="search_label">地址</label>
					<Input v-model="device1.address" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl">
					<label class="search_label">经度</label>
					<Input v-model="device1.lng" placeholder="全部" class="label_input"></Input>					
			</div>
			<div class="f-fl">
					<label class="search_label">纬度</label>
					<Input v-model="device1.lat" placeholder="全部" class="label_input"></Input>
			</div>
		</div>
      </div>
	  <div class="search" style="margin-top:20px;">
        <div class="caption">
                <Icon type="ios-cog" size="20" color="#32c5d2"></Icon>
                <span style="font-size:20px;color:#32c5d2">工参信息</span>

        </div>
		<div class="search">
			<div class="f-fl2">
				<label class="search_label2">ID1</label>
					<Input v-model="device1.workparam.cellid1[0]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">ID2</label>
					<Input v-model="device1.workparam.cellid1[1]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">ID3</label>
					<Input v-model="device1.workparam.cellid1[2]" placeholder="全部" class="label_input"></Input>					
			</div>
			<div class="f-fl2">
					<label class="search_label2">ENB ID</label>
					<Input v-model="device1.workparam.enbid" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">TAC</label>
					<Input v-model="device1.workparam.tac" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">站高</label>
					<Input v-model="device1.workparam.height" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
				<label class="search_label2">方位角1</label>
					<Input v-model="device1.workparam.rotationAngle[0]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">方位角2</label>
					<Input v-model="device1.workparam.rotationAngle[1]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">方位角3</label>
					<Input v-model="device1.workparam.rotationAngle[2]" placeholder="全部" class="label_input"></Input>					
			</div>
			<div class="f-fl2">
					<label class="search_label2">PCI1</label>
					<Input v-model="device1.workparam.pci[0]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">PCI2</label>
					<Input v-model="device1.workparam.pci[1]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">PCI3</label>
					<Input v-model="device1.workparam.pci[2]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">逻辑根1</label>
					<Input v-model="device1.workparam.logicroot[0]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">逻辑根2</label>
					<Input v-model="device1.workparam.logicroot[1]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">逻辑根3</label>
					<Input v-model="device1.workparam.logicroot[2]" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">机械下倾</label>
					<Input v-model="device1.workparam.xiaqin2" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">电子下倾</label>
					<Input v-model="device1.workparam.xiaqin3" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">下倾角（自动）</label>
					<Input v-model="device1.workparam.xiaqin" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">上行中心频率</label>
					<Input v-model="device1.workparam.fequp" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">下行中心频率</label>
					<Input v-model="device1.workparam.feqdown" placeholder="全部" class="label_input"></Input>
			</div>
			<div class="f-fl2">
					<label class="search_label2">EARFCN（自动）</label>
					<Input v-model="device1.workparam.earfcn" placeholder="全部" class="label_input"></Input>
			</div>
		</div>
				<Button type="primary" class="btn_select" style="margin-right:20px;">取消</Button>
				<Button type="primary" class="btn_select_all" style="margin-right:20px;">新增</Button>
				<Button type="primary" class="btn_select_all" style="margin-right:20px;">自动补全</Button>
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
    return {
      device1: {
        sitename: "",
        sitenum: "",
        area: "",
        fab: "",
        network: "",
        opendate: "",
        pinyin: "",
        address: "",
        lng: "",
        lat: "",
        workparam: {
          cellid1: "",
          enbid: "",
          tac: "",
          height: "",
          rotationAngle: "",
          pci: "",
          logicroot: "",
          xiaqin2: "",
          xiaqin3: "",
          xiaqin: "",
          fequp: "",
          feqdown: "",
          earfcn: ""
        }
      }
    };
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
  padding-right: 10px;
  padding-top: 4px;
  display: block;
  float: left;
  width: 25%;
  text-align: right;
  font-size: 14px;
}
.search .f-fl {
  float: left;
  padding: 0 10px 10px 10px;
  width: 50%;
}
.label_input {
  float: left;
  width: 60%;
}
.ivu-input {
}

.search_label2 {
  padding-right: 10px;
  padding-top: 4px;
  display: block;
  float: left;
  font-size: 14px;
  width: 35%;
  text-align: right;
}
.search .f-fl2 {
  float: left;
  padding: 0 10px 10px 10px;
  width: 30%;
}
.label_input2 {
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