<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
    <!--<a-button>按钮</a-button>-->
    <!--<a-button>按钮</a-button>-->
    <!--<div id="nav">
      <router-link to="/dashboard/analysis">Dashboard</router-link> |
      <router-link to="/form">Forms</router-link>
    </div>-->
  </div>
</template>
<script type="text/javascript">
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";
import moment from "moment";
export default {
  data() {
    return {
      locale: enUS
    };
  },
  watch: {
    "$route.query.locale": function(val) {
      this.locale = val === "enUS" ? enUS : zhCN;
      moment.locale(val === "enUS" ? "en" : "zh-cn");
    }
  }
};
</script>

<style lang="less"></style>
