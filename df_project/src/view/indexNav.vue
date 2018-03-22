<template>
<div class="login_layout">
    <headpage />
    <div class="nav_main">
      <div class="nav">
        <div class="con-show01" @click="click_work">
            <div class="con-show02">
                <div class="con-show03">
                    <div class="nav_text">
                        <h1><img src="/static/images/2.png" /></h1>
                        <h2>工单中心</h2>
                        <p>故障报修和处理</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="con-show01" @click="click_class">
            <div class="con-show02">
                <div class="con-show03">
                    <div class="nav_text">
                        <h1><img src="/static/images/3.png" /></h1>
                        <h2>设备管理</h2>
                        <p>故障报修和处理</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="con-show01">
            <div class="con-show02">
                <div class="con-show03">
                    <div class="nav_text">
                        <h1><img src="/static/images/4.png" /></h1>
                        <h2>人员管理</h2>
                        <p>故障报修和处理</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="con-show01">
            <div class="con-show02">
                <div class="con-show03">
                    <div class="nav_text">
                        <h1><img src="/static/images/5.png" /></h1>
                        <h2>绩效考核</h2>
                        <p>故障报修和处理</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="con-show01 mt-65 ml_115">
            <div class="con-show02">
                <div class="con-show03">
                    <div class="nav_text">
                        <h1><img src="/static/images/6.png" /></h1>
                        <h2>统计输出</h2>
                        <p>故障报修和处理</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="con-show01 mt-65">
            <div class="con-show02">
                <div class="con-show03">
                    <div class="nav_text">
                        <h1><img src="/static/images/7.png" /></h1>
                        <h2>网络配置</h2>
                        <p>故障报修和处理</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="con-show01 mt-65">
            <div class="con-show02">
                <div class="con-show03">
                    <div class="nav_text">
                        <h1><img src="/static/images/8.png" /></h1>
                        <h2>大盘展示</h2>
                        <p>故障报修和处理</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="con-show01 mt-65">
            <div class="con-show02">
                <div class="con-show03">
                    <div class="nav_text">
                        <h1><img src="/static/images/1.png" /></h1>
                        <h2>厂商接入</h2>
                        <p>故障报修和处理</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
	  <div class="mobile_nav">
		<ul>
			<li>工单中心</li>
			<li>设备管理</li>
			<li>人员管理</li>
			<li>绩效考核</li>
			<li>统计输出</li>
			<li>网络配置</li>
			<li>大盘展示</li>
			<li>厂商接入</li>
		</ul>
	  </div>
    </div>
</div>
</template>

<script>
import headpage from '../components/head'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components:{
      headpage
    },
	methods:
	{
		click_work:function() 
		{
        this.$router.push({path:'/list'});
         }
    },
	methods:
	{
		click_class:function() 
		{
        this.$router.push({path:'/foundation_class'});
         }
    },
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt-65{margin-top:-65px;}
.ml_115{margin-left:115px !important}
.login_layout{height:100%;background: url("/static/images/bg.jpg") 0 80px #566a71;; }
.nav_main{width:100%; float:left; overflow: hidden}
.nav{width:950px;height:426px;position: absolute;margin-top:-183px;top:50%;left:50%;margin-left:-475px}
.con-show01{width: 200px;height: 250px;float: left;margin-left: 10px;overflow: hidden;transform:rotate(120deg);}
.con-show02{width: 100%;height: 100%;overflow: hidden;transform:rotate(-60deg);}
.con-show03{width: 100%;height: 100%;overflow: hidden;transform:rotate(-60deg);position: relative;background: #EB0029;}
.con-show03 > div{width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 1;text-align: center;color: #fff;cursor: pointer;transition: opacity 1;}
.margin-left{margin-left: 115px;}
.margin-top{margin-top: -70px;}
.nav_text h1{margin-top:40px; line-height: 40px;}
.nav_text h2{font-size:24px;}
.nav_text p{font-size:14px; margin-top: 20px; line-height:30px;}
.mobile_nav{display:none;}
@media screen and (min-width:736px) and (max-width:884px)
{
	.nav{width:100%;top:56%; margin-left:-360px}
	.con-show01{width:150px;}
	.nav img{width:20%;}
	.mt-65{margin-top:-105px;}
	.ml_115{margin-left:95px !important;}
	.nav_text h1{margin-top:60px;}
	.login_layout{background_size:100%;}
}
@media screen and (max-width:735px)
{
	.nav{display:none;}
	body{background:#6d6e71;}
	.login_layout{background:none; background:#6d6e71;}
	.mobile_nav{width:100%;float:left; display:block;}
	.mobile_nav ul,li{width:100%;float:left;}
	.mobile_nav li{width:100%; float:left; font-size:20px; line-height:70px; color:#fff; background:#eb0029; text-align:center; border:1px solid #dedede;}
}
</style>