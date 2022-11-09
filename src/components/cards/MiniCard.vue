<template>
  <div class="flex flex-col items-center sm:flex-row gap-4 items-start sm:items-center ">
    <img class="w-24 h-24" :src="getImageUrl(background)" alt="">
    <div class="max-w-[13rem] sm:max-w-auto">
      <h3 class="text-sm font-semibold">Things About You Didn't Know  About The American Politicians</h3>
      <p class="uppercase text-red-500">Politics</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCard",
  props: {
    background: {
      type: String,
      default() {
        return ''
      }
    },
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../../assets/${name}`, import.meta.url).href
    }
    return { getImageUrl }
  }
}
</script>

<style scoped>

</style>