<template>
  <div class="menu hide">
     <Menu theme="dark" :active-name ="active_name" @on-select="tolist">
        <MenuGroup title="设备">
            <MenuItem name="1">
                基站类设备
            </MenuItem>
            <MenuItem name="2">
                网管类设备
            </MenuItem>
            <MenuItem name="3">
                核心网
            </MenuItem>
            <MenuItem name="4" >
                传输类设备
            </MenuItem>
			      <Submenu name="4">
            <template slot="title">
                <Icon type="ios-gear"></Icon>
                基础设备
            </template>
            <MenuItem name="4-1">省市区划分</MenuItem>
            <MenuItem name="4-2">设备划分</MenuItem>
            <MenuItem name="4-3">厂商划分</MenuItem>
            <MenuItem name="4-4">故障级别和分类</MenuItem>
        </Submenu>
        </MenuGroup>
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