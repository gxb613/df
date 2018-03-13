<template>
  <div class="login_layout top">
    <div class="login_layout_center">
        <div class="login_left"></div>
        <div class="login_right">
            <div><img src="/static/images/index_logo.png" width="60%"/></div>
            <Input v-model="username" class="login_input" placeholder="请输入账号"></Input>
            <Input v-model="password" class="login_input" placeholder="请输入密码"></Input>
            <input type="checkbox" style="margin-top:12px; float: left;" />
            <p style="margin-left:10px;">记住密码</p>
            <p style="margin-left:150px;"><a href="#">忘记密码</a></p>
            <input type="button" value="登陆" @click="onsubmit" class="login_btn">
        </div>
		<div class="login_left">
			<Carousel>
				<Carousel-item>
					<div class="demo-carousel"><img src="/static/images/opg_bg1.jpg"/></div>
				</Carousel-item>
				<Carousel-item>
					<div class="demo-carousel"><img src="/static/images/opg_bg2.jpg"/></div>
				</Carousel-item>
				<Carousel-item>
					<div class="demo-carousel"><img src="/static/images/opg_bg3.jpg"/></div>
				</Carousel-item>
			</Carousel>
		</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      username:'',
      password:''
    }
  },
   methods: {
     onsubmit() {
       this.$service.login.call(this);
      },
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_layout{width:100%;}
.login_layout.top{top: 50%;position: absolute;margin-top: -170px;}
.login_layout_center{margin: auto;width: 80%;overflow: hidden;}
.login_left{width:55%;overflow:hidden; float: left;margin-left:5%;}
.login_left img{width:100%; height:375px;}
.login_right{width:40%; float: left; }
.login_input{width:100%;line-height: 45px; float: left; margin-top: 20px;}
.login_btn{width:100%; height:32px; line-height: 32px; float: left; border-radius:10px; background: #2baee9; border: none; margin-top: 20px; font-size: 14px; color: #fff;}
.login_right p{font-size:14px; float:left; margin-top:8px;}
@media screen and (max-width:1000px)
{
	
    .login_left img {width:100%;}
    .row img{width:100%;}
    .login_input ,.login_btn {width:80%;}

}
@media screen and (max-width:768px){
	.login_left,.login_right{width:100%; margin-left:0px; margin-top:20px;}
	.login_layout.top{top:0px; margin-top:0px;}
    .login_layout_center{margin-top:0px;width:100%;}
	}
</style>