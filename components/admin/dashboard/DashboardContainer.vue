<template>
  <div class="pa-10">
    <v-row>
      <v-col>
          <v-card class="pa-5" color="#0086ca" dark>
            <v-row>
              <v-col cols="8">
                <div class="text-h6">
                  {{users.length}}
                </div>
                <div>
                  Total Users
                </div>
              </v-col>
              <v-col align="end">
                  <div>
                    <v-icon>
                      mdi-account
                    </v-icon>
                  </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-5" color="#39ca74" dark>
            <v-row>
              <v-col cols="8">
                <div class="text-h6">
                  {{product_data.length}}
                </div>
                <div>
                  Total Products
                </div>
              </v-col>
              <v-col align="end">
                  <div>
                    <v-icon>
                      mdi-list-box
                    </v-icon>
                  </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-5" color="#ffaf3a" dark>
            <v-row>
              <v-col cols="8">
                <div class="text-h6">
                  {{transaction_data.length}}
                </div>
                <div>
                  Total Orders
                </div>
              </v-col>
              <v-col align="end">
                  <div>
                    <v-icon>
                      mdi-cart-variant
                    </v-icon>
                  </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed:{
    ...mapState('users',['users']),
    ...mapState("product", ["product_data"]),
    ...mapState("transaction", ["transaction_data"]),
  },
  created(){
    this.$store.dispatch('users/view')
    this.$store.dispatch('product/view')
  }
}
</script>

<style>

</style>