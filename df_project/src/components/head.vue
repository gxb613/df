<template>
  <div class="heads">
    <p><img src="/static/images/logo.png" /></p>
    <p class="f-fr"><img src="/static/images/icon.png" /><span style="margin-left: 10px;">网络管理系统</span></p>
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
.heads p{float:left; font-size:20px;height:80px;padding:10px}
.heads p.f-fr{float:right;line-height:60px;}
</style>