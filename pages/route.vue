<template>
  <div>

  </div>
</template>

<script>
export default {
    created(){
        if(this.$auth.loggedIn){
            if(this.$auth.user.account_type=='Admin'){
                location="/"
            }
            else{
                location="/"
            }
        }
        else{
            location="/"
        }

    }

}
</script>

<style>

</style>