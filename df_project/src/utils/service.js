import http from './commom';
var login = function () {//确认订单
  this.$Loading.start();
  let _this = this
  http.get('tools/account?entry=login&task=login&account=' + this.username + '&password=' + this.password).then((res) => {
    _this.$Loading.finish();
    sessionStorage.token = res.sessionkey;
    _this.$router.push({
      name: 'indexnav'
    })
  }).catch((res) => {
    _this.$Loading.error();
    _this.$Message.info(res);
  })
}

var adtree = function (status) {//确认订单
  this.$Loading.start();
  let _this = this
  http.get('tools/base?entry=' + status + '&task=query&op=getall').then((res) => {
    _this.$Loading.finish();
    console.log(res);
    for (let i = 0; i < res.core.data.length; i++) {
      res.core.data[i].label = res.core.data[i].text;
      res.core.data[i].value = res.core.data[i].id;
      for (let j = 0; j < res.core.data[i].children.length; j++) {
        res.core.data[i].children[j].label = res.core.data[i].children[j].text
        res.core.data[i].children[j].value = res.core.data[i].children[j].text
        for (let k = 0; k < res.core.data[i].children[j].children.length; k++) {
          res.core.data[i].children[j].children[k].label = res.core.data[i].children[j].children[k].text
          res.core.data[i].children[j].children[k].value = res.core.data[i].children[j].children[k].text
        }
      }
    }
    console.log(res.core.data);
    this.list[status] = res.core.data;
  }).catch((res) => {
    _this.$Loading.error();
    _this.$Message.info(res);
  })
}


var deviceList = function (obj) {//确认订单
  this.$Loading.start();
  let _this = this
  http.get('tools/device?entry=device1&task=query&op=search&keyword=&adnodeid=0&fabnodeid=0&networknodeid=5', { obj }).then((res) => {
    _this.$Loading.finish();
    this.total = res.total
    //device_task.call(this,"device1",res.task_id,0);
  }).catch((res) => {
    _this.$Loading.error();
    _this.$Message.info(res);
  })
}

var device_task = function (device,id,start) {//确认订单
  this.$Loading.start();
  let obj = {
    draw:1,
    length:start+20,
    start
  }
  let _this = this
  http.get('tools/device?entry='+device+'&task=query&op=tablegettable&task_id=' + id,obj).then((res) => {
    _this.$Loading.finish();
    console.log(res);
  }).catch((res) => {
    _this.$Loading.error();
    _this.$Message.info(res);
  })
}

var device_index = function () {//确认订单
  this.$Loading.start();
  let _this = this
  http.get('http://dianxin.laiqu.me/tools/device?entry=device2&task=query&op=search&keyword=' + this.keyword).then((res) => {
    _this.$Loading.finish();
    console.log(res);
    this.total = res.total
    device_task.call(this,"device2",res.task_id,0);
  }).catch((res) => {
    _this.$Loading.error();
    _this.$Message.info(res);
  })
}

export default {
  login, adtree, deviceList,
  device_index

}
