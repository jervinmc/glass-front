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
                location="/customer/transaction"
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