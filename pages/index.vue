<template>
  <div>
    <hero />
    <div>
      <promo-content />
    </div>
    <div>
      <about />
    </div>
    <div>
      <contact-us />
    </div>
    <div>
      <footer-all />L
    </div>
  </div>
</template>

<script>
import FooterAll from '../components/general/FooterAll.vue'
import About from '../components/home/About.vue'
import ContactUs from '../components/home/ContactUs.vue'
import Hero from '../components/home/Hero.vue'
import PromoContent from '../components/home/PromoContent.vue'
export default {
  components: { Hero, About, PromoContent, ContactUs, FooterAll  },

}
</script>,
    

<style>

</style>