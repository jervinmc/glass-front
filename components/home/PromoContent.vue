<template>
  <v-sheet class="pb-10">
    <v-dialog v-model="isQuote" width="500">
      <v-card class="pa-10">
        <div>Fullname:</div>
        <div>
          <v-text-field
            v-model="register.fullname"
            dense
            outlined
          ></v-text-field>
        </div>
        <div>Product Name:</div>
        <div>
          <v-text-field
            v-model="register.product_name"
            dense
            outlined
          ></v-text-field>
        </div>
        <div>Contact Number:</div>
        <div>
          <v-text-field
            v-model="register.contact_number"
            dense
            outlined
          ></v-text-field>
        </div>
        <div>List product specification(size,color):</div>
        <div>
          <v-textarea v-model="register.message" outlined></v-textarea>
        </div>
        <div>
          <div>Image</div>
          <v-col cols="12">
            <input
              type="file"
              id="fileInput"
              ref="file"
              @change="onFileUpload"
            />
          </v-col>
        </div>
        <div align="center">
          <v-col>
            <div class="pt-0 black--text" align="center">
              <v-btn depressed color="secondary" dark @click="submitHandler">
                Submit
              </v-btn>
            </div>
          </v-col>
        </div>
      </v-card>
    </v-dialog>
    <div>
      <v-col>
        <div class="pt-10 black--text" align="center">
          <v-btn depressed color="secondary" dark @click="isQuote = true">
            FOR CUSTOMIZE ORDERS
          </v-btn>
        </div>
      </v-col>
    </div>
    <v-slide-y-transition>
      <div class="text-h5 pl-10 v-leave-active" v-show="isShow">
        <b> SHOP BY CATEGORY</b>
      </div>
    </v-slide-y-transition>
    <div class="pl-16 pt-10">
      <v-tabs color="secondary">
        <v-tab @click="product_type = 'All'">All</v-tab>
        <v-tab @click="product_type = 'Windows'">Windows</v-tab>
        <v-tab @click="product_type = 'Doors'">Doors</v-tab>
        <v-tab @click="product_type = 'Build-in Cabinets'">Build-in Cabinets</v-tab>
        <v-tab @click="product_type = 'Hanging Cabinents'">Hanging Cabinents</v-tab>
        <v-tab @click="product_type = 'Aquariums'">Aquariums</v-tab>
        <v-tab @click="product_type = 'SK Tables'">Tables</v-tab>
      </v-tabs>
    </div>
    <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
      <v-slide-item v-for="n in filteredProduct" :key="n">
        <v-card :loading="loading" class="mx-5 my-5" width="400">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-img height="150" :src="n.image"></v-img>
          <v-card-title>{{ n.product_name }}</v-card-title>
          <v-card-text>
            <div class="my-4 text-subtitle-1">
              <b>Php {{ n.price }}</b>
            </div>
            <div>
              {{ n.description }}
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="secondary--text" text @click="getItem(n)">
              <b class="secondary--text"> Get </b>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("product", ["product_data"]),
    filteredProduct(){
      if(this.product_type=='All'){
        return this.product_data
      }
      return this.product_data.filter(data=>data.category==this.product_type)
    }
  },
  created() {
    if(this.$auth.loggedIn){
      this.register.fullname = this.$auth.user.firstname + ' ' + this.$auth.user.lastname 
    }
    this.isShow = true;
    this.$store.dispatch("product/view");
  },
  methods:{
    getItem(item){
      if(this.$auth.loggedIn){
        location=`/customer/product_details?id=${item.id}&&description=${item.description}&&product_name=${item.product_name}&&image=${item.image}`
      }else{
         location=`/login?next=cart&id=${item.id}&&description=${item.description}&&product_name=${item.product_name}&&image=${item.image}`
      }
     
    },
    onFileUpload(e) {
      this.file = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      console.log(e);
      this.file = e;
    },
    submitHandler() {
      let form_data = new FormData();
        if (this.file != null && this.file != "") {
          form_data.append("image", this.file);
        }
        form_data.append("user_id", this.$auth.user.id);
        form_data.append("product_name", this.register.product_name);
        form_data.append("message", this.register.message);
        form_data.append("fullname", this.register.fullname);
        form_data.append("contact_number", this.register.contact_number);
        form_data.append("price", this.register.price);
        form_data.append("status", 'Pending');

      this.$store.dispatch("quote/add", form_data).then((res) => {
        alert("Successfully Sent!");
        console.log(res)
        this.register.image = res.image
        
        return
        this.submitHandlerCart()
        // location.reload();
      });
    },
  },
  data() {
    return {
      file:'',
      product_type:'All',
      register: {},
      isQuote: false,
      isShow: false,
    };
  },
};
</script>

<style>
</style>