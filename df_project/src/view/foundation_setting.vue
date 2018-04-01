<template>
  <div class="login_layout">
     <headpage />
     <div class="menu">
     <Menu theme="dark" active-name   ="1">
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
            <MenuItem name="4">
                传输类设备
            </MenuItem>
			<MenuItem name="5">
                基础设置
            </MenuItem>
        </MenuGroup>
    </Menu>
    </div>
    <div class="val">
      <div class="title">基础设置</div>
      <div class="table">
        <div class="mb_20">
          <Button type="primary">导入EXCEL</Button>
		  <Button>导出EXCEL</Button>
        </div>
        <Table :columns="columns1" :data="data1">
		</Table>
      </div>
    </div>
  </div>
</template>

<script>
import headpage from '../components/head'
export default {
  name: 'list',
  data () {
    return {
     columns1: [
		  {
             type: 'selection',
             width: 60,
             align: 'center'
          },
          {
              title: '序号',
              key: '1'
          },
          {
              title: '设备种类',
              key: '2'
          },
          {
              title: '厂商',
              key: '3'
          },
      ],
      data1: [
          {
              1: '1',
              2: '基站类设备',
              3: '华为',
          },{
              1: '1',
              2: '网管',
              3: '中兴',
          },
          {
              1: '1',
              2: '传输',
              3: '贝尔',
          }
      ],
    }
  },
  components:{
    headpage
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_layout{height:130px;}
.menu{background:#363e4f;width:240px;position: absolute;top: 80px;bottom: 0px;left: 0px;}
.val{background:rgb(236, 234, 234);position: absolute;top: 80px;bottom: 0px;left: 240px;right:0}
.title{font-size:24px;padding:10px 2%; font-weight:bold;}
.table{width:96%;margin:10px 2%;background:#fff;overflow:hidden;padding:20px;padding-left:20px}
.table .ivu-btn{margin:0 10px}

</style>