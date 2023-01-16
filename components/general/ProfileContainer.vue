<template>
  <div class="pa-16">
    <div class="black--text text-h5 pb-5">
      <v-row>
        <v-col>
          <b>My Profile</b>
        </v-col>
      </v-row>
    </div>
    <div>
        <div>
            <v-row>
                <v-col cols="4" align-self="center">
                    Firstname :
                </v-col>
                <v-col>
                    <v-text-field dense outlined v-model="register.firstname" hide-details=""></v-text-field>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-row>
                <v-col cols="4" align-self="center">
                    Lastname :
                </v-col>
                <v-col>
                    <v-text-field dense outlined v-model="register.lastname" hide-details=""></v-text-field>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-row>
                <v-col cols="4" align-self="center">
                    Address :
                </v-col>
                <v-col>
                    <v-text-field dense outlined v-model="register.address" hide-details=""></v-text-field>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-row>
                <v-col cols="4" align-self="center">
                    Email :
                </v-col>
                <v-col>
                    <v-text-field dense outlined v-model="register.email" hide-details=""></v-text-field>
                </v-col>
            </v-row>
        </div>
    </div>
    <div align="end" class="pt-10">
        <v-btn color="secondary" @click="submitHandler">Save Changes</v-btn>
    </div>
  </div>
</template>

<script>
var cloneDeep = require("lodash.clonedeep");
export default {
    data(){
        return{
            register:{

            }
        }
    },
    created(){
        this.register = cloneDeep(this.$auth.user)
    },
    methods:{
        submitHandler(){
            this.$store.dispatch('users/editUser',this.register).then(res=>{
                alert('Successfully Updated!')
                location.reload()
            })
        }
    }
}
</script>

<style>

</style>