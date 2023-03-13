<template>
  <div
    style="height: 500px"
    class="centralized-items d-flex justify-center align-center"
  >
    <v-form
      v-model="isValid"
      ref="form"
      lazy-validation
      @submit.prevent="submitHandler"
    >
      <v-row>
        <v-col cols="6">
          <v-card width="600" class="rounded-xl" >
            <div
              style="background-color:#53b5b2"
              align="center"
              class="pa-5 white--text"
            >
            {{isForgotPassword ? 'Reset Password' : 'Login Now as Admin'}}   
            </div>
            <div class="pa-5" align="start">
              <v-row>
                <v-col>
                  <div>Email</div>
                  <div>
                    <v-text-field
                      :rules="standardRules"
                      outlined
                      v-model="users.email"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" v-if="!isForgotPassword">
                  <div>Password</div>
                  <div>
                    <v-text-field
                      :rules="standardRules"
                      outlined
                      v-model="users.password"
                      type="password"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
                <div align="end" @click="forgot_password" class="pointer" v-if="!isForgotPassword">
                  Forgot Password?
                </div>
                <div v-else @click="isForgotPassword = false" align="end" class="pointer">
                  <v-icon>mdi-arrow-left</v-icon>Back
                </div>
              <div align="center">
                <v-btn
                v-if="!isForgotPassword"
                  depressed
                  color="secondary"
                  dark
                  type="submit"
                  :loading="isLoaded"
                >
                {{!isForgotPassword ? 'Login' : 'Send'}}
                </v-btn>
                 <v-btn
                v-else
                  depressed
                  color="secondary"
                  dark
                  @click="resetPassword"
                  :loading="isLoaded"
                >
                {{!isForgotPassword ? 'Login' : 'Send'}}
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <div align="center">
            <v-img
              src="/images/loginVector.jpg"
              height="400"
              width="600"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import validations from "@/utils/validations";
export default {
  auth: false,
  data() {
    return {
      isForgotPassword:false,
      isLoaded: false,
      ...validations,
      isValid: false,
      users: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    console.log(this.$auth);
  },
  methods: {
    resetPassword(){
      this.otpValue = Math.random().toString(6).slice(2);
      this.$store.dispatch('users/findemail',this.users).then(res=>{
      this.$store.dispatch('users/reset_password',{code:this.otpValue,email:this.users.email})
      this.$store.dispatch('users/edit',{id:res[0].id,password:this.otpValue}).then(res=>{
        alert('Successfully sent to your email.')
        location.reload()
      })
      })
    
    },
    forgot_password(){
      this.isForgotPassword = true;
    },
    async submitHandler() {
      this.isLoaded = true;
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.users,
        }).then(res=>{
          if(this.$auth.account_type!='Admin'){
            localStorage.clear()
            alert('No account registered.')
            this.$auth.logout()
            
            window.location.reload()
            return
          }
          if(this.$route.query.next=='cart'){
           location=`/customer/product_details?id=${this.$route.query.id}&&description=${this.$route.query.description}&&product_name=${this.$route.query.product_name}&&image=${this.$route.query.image}`
          }
          else{

          }
        });
      } catch (error) {
        alert('Wrong credentials')
        this.isLoaded = false;
      }
    },
  },
};
</script>

<style>
</style>