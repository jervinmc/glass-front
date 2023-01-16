<template>
  <div>
    <!-- <div>
        <hero-contact />
    </div> -->
   <contact-us />
  </div>
</template>

<script>
import ContactContent from '../../components/contact-us/ContactContent.vue'
import HeroContact from '../../components/contact-us/HeroContact.vue'
import ContactUs from '../../components/home/ContactUs.vue'
export default {
  components: { ContactContent, HeroContact, ContactUs },

}
</script>

<style>

</style>