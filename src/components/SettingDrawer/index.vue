<template>
  <div>
    <!--<a-button type="primary" @click="showDrawer">
						Open
				</a-button>-->
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    /*showDrawer() {
                this.visible = true
            },*/
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  text-align: center;
  font-size: 20px;
  color: #fff;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
