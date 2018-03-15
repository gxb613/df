import http from './commom';

  var login = function(){//确认订单
    this.$Loading.start();
    let _this = this
    http.get('tools/account?entry=login&task=login&account='+this.username+'&password='+this.password).then((res) => {
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

  var adtree = function(status){//确认订单
    this.$Loading.start();
    let _this = this
    http.get('tools/base?entry='+status+'&task=query&op=getall').then((res) => {
      _this.$Loading.finish();
      console.log(res);
      for(let i = 0;i<res.core.data.length;i++){
        res.core.data[i].title =  res.core.data[i].text;
        for(let j = 0;j<res.core.data[i].children.length;j++){
          res.core.data[i].children[j].title = res.core.data[i].children[j].text
          for(let k = 0;k<res.core.data[i].children[j].children.length;k++){
            res.core.data[i].children[j].children[k].title = res.core.data[i].children[j].children[k].text
          }
        }
      }
      console.log(res.core.data);
      this.data1 = res.core.data;
    }).catch((res) => {
      _this.$Loading.error();
      _this.$Message.info(res);
    })
  }

  



export default {
 login,adtree
 
}
