<template>
<div class="bg-[#f7f7f7]">
  <div class="py-2 mt-32 container mx-auto px-2">
    <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <news-card
          width="object-cover"
          background="5c9c4596.jpg"
          fashion="fashion"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          fashion-styles="bg-red-500"
          desc-styles="font-bold"
      />
      <news-card
          width="object-cover"
          background="5c9c4596.jpg"
          fashion="fashion"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          fashion-styles="bg-red-500"
          desc-styles="font-bold"
      />
      <news-card
          width="object-cover"
          background="5c9c4596.jpg"
          fashion="fashion"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          fashion-styles="bg-red-500"
          desc-styles="font-bold"
      />
      <news-card
          width="object-cover"
          background="5c9c4596.jpg"
          fashion="fashion"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          fashion-styles="bg-red-500"
          desc-styles="font-bold"
      />
    </div>
    <hr class="h-0.5 mt-6 bg-gray-400" />
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6">
      <mini-card
          background="ctc.jpg"
      />
      <mini-card
          background="ctc.jpg"
      />
      <mini-card
          background="29-696x392.jpg"
      />
      <mini-card
          background="ctc.jpg"
      />
      <mini-card
          background="ctc.jpg"
      />
      <mini-card
          background="29-696x392.jpg"
      />
      <mini-card
          background="ctc.jpg"
      />
      <mini-card
          background="29-696x392.jpg"
      />
      <mini-card
          background="ctc.jpg"
      />
      <mini-card
          background="29-696x392.jpg"
      />
    </div>
  </div>
</div>
</template>

<script>
import NewsCard from "../../components/cards/NewsCard.vue";
import MiniCard from "../../components/cards/MiniCard.vue";
export default {
  name: "HomeBreaking",
  components: {MiniCard, NewsCard}
}
</script>

<style scoped>

</style>