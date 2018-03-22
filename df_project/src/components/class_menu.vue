<template>
  <div class="menu hide">
     <Menu theme="dark" :active-name ="active_name" @on-select="tolist">
        <Menu-group title="设备">
            <Menu-item name="1">
                基站类设备
            </Menu-item>
            <Menu-item name="2">
                网管类设备
            </Menu-item>
            <Menu-item name="3">
                核心网
            </Menu-item>
            <Menu-item name="4">
                传输类设备
            </Menu-item>
			<Menu-item name="5">
                基础设置
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
            name: "foundation_class"
          });
          break;
        case "2":
          this.$router.push({
            name: "network_class"
          });
          break;
		  case "3":
          this.$router.push({
            name: "device_class"
          });
          break;
		  case "4":
          this.$router.push({
            name: "choose_class"
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