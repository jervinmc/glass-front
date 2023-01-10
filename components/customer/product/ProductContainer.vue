<template>
  <div>
    <v-row>
      <v-col v-for="x in product_data" :key="x" cols="4">
        <v-card :loading="loading" class="mx-5 my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img
            height="150"
            :src="x['image']"
          ></v-img>

          <v-card-title>
            <v-row>
              <v-col>
               <div>
                  {{x.product_name}}
               </div>
              </v-col>
              <v-col align="end">
                {{$FormatPrice(x.price)}}
              </v-col>
            </v-row>
          </v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <!-- <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating> -->

              <!-- <div class="grey--text ms-4">4.5 (413)</div> -->
            </v-row>
<!-- 
            <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div> -->

            <div class="pt-6">
              {{x.description}}
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="secondary" text @click="viewItem(x)">
              View
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  methods:{
    viewItem(item){
      location=`/customer/product_details?id=${item.id}&&description=${item.description}&&product_name=${item.product_name}&&image=${item.image}`
    }
  },
  computed:{
     ...mapState("product", ["product_data"]),
  },
    created() {
    this.$store.dispatch("product/view");
  },
};
</script>

<style>
</style>