<template>
  <div align="center">
    <div class="text-h5 pt-16">
        Congratulations! your account is now verified.
        <div>
            <v-btn color="secondary" @click="route">Login</v-btn>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('users/editUser',{id:this.$route.query.sd,is_active:true})
    },
    methods:{
        route(){
            location="/login"
        },
    }

}
</script>

<style>

</style>