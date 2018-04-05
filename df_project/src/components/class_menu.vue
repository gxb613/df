<template>
  <div class="menu hide">
     <Menu theme="dark" :active-name ="active_name" @on-select="tolist" :open-names="['4']">
        <MenuGroup title="设备">
            <MenuItem name="foundation_class">
                基站类设备
            </MenuItem>
            <MenuItem name="network_class">
                网管类设备
            </MenuItem>
            <MenuItem name="device_class">
                核心网
            </MenuItem>
            <MenuItem name="choose_class" >
                传输类设备
            </MenuItem>
			      <Submenu name="4">
            <template slot="title">
                <Icon type="ios-gear"></Icon>
                基础设备
            </template>
            <MenuItem name="addresstree">省市区划分</MenuItem>
            <MenuItem name="fabtree">设备划分</MenuItem>
            <MenuItem name="networktree">厂商划分</MenuItem>
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
      active_name:"foundation_class"
    };
  },
  methods: {
    tolist(e) {
      switch (e) {
        case "foundation_class":
          this.$router.push({
            name: "foundation_class"
          });
          break;
        case "network_class":
          this.$router.push({
            name: "network_class"
          });
          break;
		  case "device_class":
          this.$router.push({
            name: "device_class"
          });
          break;
		  case "choose_class":
          this.$router.push({
            name: "choose_class"
          });
          break;
       case "addresstree":
          this.$router.push({
            name: "addresstree"
          });
          break;
       case "fabtree":
          this.$router.push({
            name: "fabtree"
          });
          break;
       case "networktree":
          this.$router.push({
            name: "networktree"
          });
          break;
      }
    }
  },mounted(){
    this.active_name = this.$router.history.current.name;
    console.log(this.$router.history.current.name);
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