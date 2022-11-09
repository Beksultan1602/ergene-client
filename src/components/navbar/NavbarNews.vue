<template>
<div class="shadow-md mb-6">
  <div class="container mx-auto">
    <div>
      <img class="my-6" src="../../assets/logo-header-2.png" alt="">
      <div class="flex items-center gap-16">
        <button :class="activeNav ? 'border-sky-300' : ''" class="text-xl font-semibold uppercase inline hover:border-sky-300 border-b-4">Главная</button>
        <button class="text-xl font-semibold uppercase hover:border-sky-300 border-b-4 border-transparent inline">Новости</button>
        <button class="text-xl font-semibold uppercase hover:border-sky-300 border-b-4 border-transparent inline">О нас</button>
        <button class="text-xl font-semibold uppercase hover:border-sky-300 border-b-4 border-transparent inline">Контакты</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NavbarNews",
  data() {
    return {
      activeNav: true
    }
  }
}
</script>

<style scoped>

</style>