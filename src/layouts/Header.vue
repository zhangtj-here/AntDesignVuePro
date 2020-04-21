<template>
  <div class="header">
    <a-dropdown>
      <!-- <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        Hover me <a-icon type="down" />
      </a> -->
      <a-icon type="global" />
      <a-menu
        slot="overlay"
        @click="localeChange"
        :selectedKeys="[$route.query.locale || 'zhCN']"
      >
        <a-menu-item key="zhCN">
          中文
        </a-menu-item>
        <a-menu-item key="enUS">
          english
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    localeChange({ key }) {
      this.$router.push({
        query: { ...this.$route.query, locale: key }
      });
      this.$i18n.locale = key;
    }
  }
};
</script>

<style scoped>
.header {
  float: right;
  margin-right: 30px;
}
</style>
