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



export default {
 login
 
}
