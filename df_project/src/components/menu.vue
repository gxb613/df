<template>
  <div class="menu hide">
     <Menu theme="dark" :active-name ="active_name" @on-select="tolist">
        <Menu-group title="工单中心">
            <Menu-item name="1" >
                <Icon type="arrow-up-a" size="18"></Icon>申请中的工单
            </Menu-item>
            <Menu-item name="2">
                <Icon type="play" size="16"></Icon>受理中的工单
            </Menu-item>
            <Menu-item name="3">
                <Icon type="checkmark-round" size="18"></Icon>已完结的工单
            </Menu-item>
            <Menu-item name="4">
                <Icon type="stop" size="16"></Icon>已关闭的工单
            </Menu-item>
            <Menu-item name="5">
                <Icon type="record" size="16"></Icon>工单汇总
            </Menu-item>
        </Menu-group>
    </Menu>
    </div>
</template>

<script>
export default {
  name: "head",
  data() {
    return {
      username: "",
      password: "",
      active_name:"1"
    };
  },
  methods: {
    tolist(e) {
      this.active_name = e;
      switch (e) {
        case "1":
          this.$router.push({
            name: "list"
          });
          break;
        case "2":
          this.$router.push({
            name: "creat_list"
          });
          break;
      }
    }
  }
};
</script>
<style scoped>
.menu {
  background-color: rgb(109, 110, 113);
  width: 240px;
  position: absolute;
  top: 80px;
  bottom: 0px;
  left: 0px;
}
</style>