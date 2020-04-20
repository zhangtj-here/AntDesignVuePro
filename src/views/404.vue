<template>
  <div style="text-align: center;">
    <IconFont type="icon-icon-404" style="font-size: 100px;" />
    <!-- <img :src="logo"> -->
    <Logo />
    <Logo1 style="width: 100px;" />
  </div>
</template>

<script>
import Logo from "@/assets/403.svg";
import Logo1 from "@/assets/404.svg";
// import logo from "@/assets/403.svg";
export default {
  components: {
    Logo,
    Logo1
  }
  // data() {
  //   return {
  //     logo
  //   }
  // }
};
</script>

<style scoped></style>
