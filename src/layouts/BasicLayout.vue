<template>
<a-layout id="components-layout-demo-side" style="min-height: 100vh">
		<a-layout-sider :trigger="null" collapsible v-model="collapsed" >
				<div class="logo" />
				<SiderMenu />
		</a-layout-sider>
		<a-layout>
				<a-layout-header style="background: #fff; padding: 0" >
						<a-icon  class="tigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="collapsed    =    ! collapsed"></a-icon>
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

<script>

import Header from './Header';
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";

export default {
    name: "BasicLayout",
    data() {
        return {
            collapsed: false,
        }
    },
		components: {
        Header,
				Footer,
				SiderMenu
		}
}

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
</style>
