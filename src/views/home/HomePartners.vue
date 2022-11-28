<template>
  <div class="container mx-auto mt-16 px-2">
    <h2 class="uppercase font-semibold">Наши партнёры</h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 justify-between items-center">
<!--      <div v-for="(item, index) in images" :key="item.id">-->
<!--        <img :src="getPhoto(index)" alt="">-->
<!--      </div>-->
      <div>
        <img src="../../assets/partner1.png">
      </div>
      <div>
        <img src="../../assets/partner1.png">
      </div>
      <div>
        <img src="../../assets/partner1.png">
      </div><div>
      <img src="../../assets/partner1.png">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePartners",
  // data() {
  //   return {
  //     images: [
  //       {url: '../../assets/partner1.png', id: 1},
  //       {url: '../../assets/partner1.png', id: 2},
  //       {url: '../../assets/partner1.png', id: 3},
  //     ]
  //   }
  // },
  // methods: {
  //   getPhoto(index) {
  //     return this.images[index].url;
  //   }
  // },
}
</script>

<style scoped>

</style>