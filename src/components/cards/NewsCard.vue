<template>
  <div class="relative flex bg-cover text-white cursor-pointer ">
    <img :class="width" :src="getImageUrl(background)" alt="">
    <div class="absolute bottom-0 p-4 text-white pointer-events-none">
      <span :class="fashionStyles" class="uppercase bg-[#222222] px-4">{{ fashion }}</span>
      <h2 :class="descStyles" class="font-semibold">{{ desc }}</h2>
      <p>{{ date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsCard",
  props: {
    date: {
      type: String,
      default() {
        return ''
      }
    },
    desc: {
      type: String,
      default() {
        return ''
      }
    },
    fashion: {
      type: String,
      default() {
        return ''
      }
    },
    background: {
      type: String,
      default() {
        return ''
      }
    },
    width: {
      type: String,
      default() {
        return ''
      }
    },
    fashionStyles: {
      type: String,
      default() {
        return ''
      }
    },
    descStyles: {
      type: String,
      default() {
        return ''
      }
    }
  },
  setup() {
    const getImageUrl = (name) => {
      return new URL(`../../assets/${name}`, import.meta.url).href
    }
    return { getImageUrl }
  }
}
</script>

<style lang="scss">

</style>