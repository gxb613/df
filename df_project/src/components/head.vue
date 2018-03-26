<template>
  <div class="heads">
  <div class="head_left"><img src="/static/images/logo.png" /></div>
  <div class="head_right">  
	<p class="f-fr">
		<span style="margin-left: 10px;">彭晓魏</span>
		<span><img src="/static/images/people.png" style="padding:10px; float:right;" /></span>
	</p>
	<Icon type="search" size="20" style="margin-right:20px; float:right; line-height:90px;"></Icon>
  </div>	
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      username: '',
      password:''
    }
  }
}
</script>
<style scoped>
.heads{width:100%;height:80px;background:#fff;}
.head_left{width:30%; float:left;padding:10px;}
.head_right{width:70%;float:right;padding:10px;}
.head_right p.f-fr{float:right; line-height:90px;}

</style>