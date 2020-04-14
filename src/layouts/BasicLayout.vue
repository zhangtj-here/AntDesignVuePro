<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="tigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed = !collapsed"
        ></a-icon>
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>

  <!--<div>
			<Header />
			<SiderMenu />
			<router-view />
			<Footer />
	</div>-->
</template>

<!-- <template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
    	<a-breadcrumb style="margin: 16px 0">
  		  <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>
						<router-link to="/dashboard/analysis">Dashboard</router-link> |
        </a-breadcrumb-item>
        <a-breadcrumb-item><router-link to="/form">Forms</router-link></a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
    	<div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
    		<router-view/>
    	</div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template> -->

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";

export default {
  name: "BasicLayout",
  data() {
    return {
      collapsed: false
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu
  }
};
</script>

<style scoped>
.tigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}
.tigge:hover {
  background-color: #eeeeee;
}
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
