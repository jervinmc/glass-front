<template>
    <div>
        <login-form-customer />
    </div>
  </template>
  
  <script>
  import LoginFormCustomer from '../../components/login/LoginFormCustomer.vue'
  export default {
    head () {
      return {
        title: 'Login',
      }
    },
    components: { LoginFormCustomer },
  
  }
  </script>
  
  <style>
  
  </style>