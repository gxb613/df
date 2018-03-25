<template>
  <div class="adtree" v-if="fabtree">
    <label>选择节点</label>
    <Tree :data="data1"></Tree>
    <div class="btn_box">
      <Button type="error" class="tree_btn">确认</Button>
      <Button type="ghost" class="tree_btn">取消</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "head",
  props: {
     fabtree : false
  },
  data() {
    return {
      data1: []
    };
  },
  methods: {
     onsubmit() {
       this.$service.login.call(this);
      },
   },mounted(){
      this.$service.adtree.call(this,'fabtree');
   }
};
</script>
<style scoped>
.adtree {
    width: 100%;
    max-width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
    background: #fff;
    z-index: 999;
    border: 1px solid #e5e5e5;
    padding:0 10px;
    margin-left: -180px;
    margin-top: -100px;
}
.adtree label{
  line-height: 46px;
    display: block;
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
    color: #f11f1f;
}
.ivu-tree ul{font-size:16px;}
.btn_box{overflow: hidden;
    border-top: 1px solid #e5e5e5;}
.tree_btn{float:right;margin:10px 0;margin-left:10px;}
</style>