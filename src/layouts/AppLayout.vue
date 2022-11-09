<template>
  <social-media />
  <navbar-news />
  <div>
    <slot></slot>
  </div>
</template>

<script>
import SocialMedia from "../components/navbar/SocialMedia.vue";
import NavbarNews from "../components/navbar/NavbarNews.vue";
export default {
  name: "AppLayout",
  components: {NavbarNews, SocialMedia}
}
</script>

<style scoped>

</style>