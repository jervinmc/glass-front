<template>
  <v-sheet class="pa-10" color="">
    <v-dialog v-model="isCheckout" width="500">
      <v-card class="pa-10">
        <div>
          <div class="text-h5">Contact Information:</div>
          <div>
            Fullname: {{ $auth.user.firstname }} {{ $auth.user.lastname }}
          </div>
        </div>
        <div v-for="n in register.cart" :key="n">
          <div>
            <v-row>
              <v-col cols="auto">
                <v-img :src="n.image" height="100" width="100"> </v-img>
              </v-col>
              <v-col>
                <div>{{ n.product_name }}</div>
                <div>
                  {{ n.description }}
                </div>
                <div>{{ n.quantity }}x Quantity</div>
                <div>Php {{ n.price }}</div>
              </v-col>
            </v-row>
          </div>
        </div>
        <div><div>Address:</div>
            <div>
              <v-text-field outlined dense v-model="register.address"></v-text-field>
            </div></div>
          <div>
            <div>Contact Number:</div>
            <div>
              <v-text-field outlined dense v-model="register.contact_number"></v-text-field>
            </div>
          </div>
        <div class="py-5">
          <v-divider></v-divider>
        </div>
        Total Price: Php {{ total_price }}

        <div>
          <div class="pt-4">
            <v-btn color="grey" dark width="100%" @click="isCheckout = false"
              >Cancel</v-btn
            >
          </div>
          <div>
            Payment Options : 
          </div>
          <div class="pt-4">
            <v-btn color="secondary" width="100%" @click="submitHandler"
              >Cash On Delivery</v-btn
            >
            <div class="pt-4">
              <v-btn color="secondary" width="100%" @click="paymentMethod"
                >Paypal</v-btn
              >
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog width="900" v-model="isAdd">
      <v-card class="pa-16">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="register.product_name"
              outlined
              dense
              placeholder="Product Name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="register.price"
              outlined
              dense
              placeholder="Price"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="register.quantity"
              outlined
              dense
              placeholder="Quantity"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-spacer></v-spacer>
              <v-col align="end">
                <v-btn
                  class="rounded-lg"
                  color="secondary"
                  @click="updateSize('-')"
                  >-</v-btn
                >
              </v-col>
              <v-col align="end" cols="auto">
                <v-btn
                  class="rounded-lg"
                  color="secondary"
                  @click="updateSize('+')"
                  >+</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" v-for="(x, index) in size_counter" :key="x">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="size[index]"
                  outlined
                  dense
                  placeholder="Size"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="price[index]"
                  outlined
                  dense
                  placeholder="Price"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-textarea
              outlined
              dense
              placeholder="Description"
              v-model="register.description"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-select
              outlined
              dense
              v-model="register.category"
              placeholder="Category"
              :items="['Windows', 'Door', 'Tables', 'Aquarium']"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <input
              type="file"
              id="fileInput"
              ref="file"
              @change="onFileUpload"
            />
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col align="end">
                <v-btn outlined class="rounded-lg" @click="isAdd = false"
                  >Cancel</v-btn
                >
              </v-col>
              <v-col>
                <v-btn
                  class="rounded-lg"
                  color="secondary"
                  @click="submitHandler"
                  >Submit</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <div class="black--text text-h5 pb-5">
      <v-row>
        <v-col>
          <b>Cart</b>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-card class="pa-16" elevation="1" color="white">
        <div>
          {{register.cart.length}} Item/s Selected
        </div>
        <!-- <div class="pt-10">
          <v-text-field
            hide-details
            v-model="search"
            outlined
            dense
            placeholder="Search Request No."
          ></v-text-field>
        </div> -->
        <v-data-table
          :search="search"
          class="pa-5"
          show-select
          v-model="register.cart"
          :headers="headers"
          :items="my_cart"
          :loading="isLoading"
        >
          <template v-slot:loading>
            <v-skeleton-loader
              v-for="n in 5"
              :key="n"
              type="list-item-avatar-two-line"
              class="my-2"
            ></v-skeleton-loader>
          </template>
          <template #[`item.is_active`]="{ item }">
            {{ item.is_active ? "Yes" : "No" }}
          </template>
          <template #[`item.total_price`]="{ item }">
            {{ $FormatPrice(item.quantity * item.price)}}
          </template>
          <template #[`item.quantity`]="{ item }">
          <v-icon @click="plus(item)">mdi-plus</v-icon>  <b>{{ item.quantity}}</b><v-icon color="red" @click="minus(item)">mdi-minus</v-icon> <v-icon color="red" @click="deleteItem(item)">mdi-delete</v-icon> 
          </template>
          <template #[`item.image`]="{ item }">
            <v-img :src="item.image" height="100" width="100"></v-img>
          </template>
          <template #[`item.opt`]="{ item }">
            <v-menu offset-y z-index="1">
              <template v-slot:activator="{ attrs, on }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item @click.stop="edit(item, '')">
                  <v-list-item-content>
                    <v-list-item-title>View</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="statusConfirmation(item, 'Approved')"
                  v-if="item.status == 'Pending'"
                >
                  <v-list-item-content>
                    <v-list-item-title>Approve</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="statusConfirmation(item, 'Declined')"
                  v-if="item.status == 'Pending'"
                  >
                  <v-list-item-content>
                    <v-list-item-title>Decline</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="editItem(item, 'For Review')"
                  v-if="status == 'Pending'"
                >
                  <v-list-item-content>
                    <v-list-item-title>For Review</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="editItem(item, 'Summon')"
                  v-if="status == 'For Review'"
                >
                  <v-list-item-content>
                    <v-list-item-title>Summon</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="editItem(item, 'Settled')"
                  v-if="status == 'Summon'"
                >
                  <v-list-item-content>
                    <v-list-item-title>Settled</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  @click.stop="editItem(item, 'Dismissed')"
                  v-if="status == 'Summon'"
                >
                  <v-list-item-content>
                    <v-list-item-title>Dismissed</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
        <div class="pt-4">
          <v-btn color="secondary" width="100%" @click="checkout"
            >Proceed to Checkout</v-btn
          >
        </div>
      </v-card>
    </div>
    <div></div>
  </v-sheet>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
// import DialogNotification from "../../general/DialogNotification.vue";
// import Add from "./Add.vue";
// import Edit from "./Edit.vue";
import VueToastr from "vue-toastr";
Vue.use(VueToastr, {
  /* OverWrite Plugin Options if you need */
});

var cloneDeep = require("lodash.clonedeep");
export default {
  components: {},
  created() {
    this.$store.dispatch("cart/view").then(res=>{
       this.my_cart = cloneDeep(this.cart_data) 
    }); 
  },
  computed: {
    ...mapState("cart", ["cart_data"]),
    myOrder() {
      return this.cart_data.filter(
        (data) => data.user_id == this.$auth.user.id
      );
    },
    filteredData() {
      return this.exercise_data.filter((data) => data.category == this.status);
    },
  },
  methods: {
    deleteItem(item){
      this.$store.dispatch('cart/delete',item).then(res=>{
        location.reload()
      })
    },
    minus(item){
      var a = cloneDeep(this.cart_data)
      for(let x in this.my_cart){
        if(this.my_cart[x].id==item.id){
          this.my_cart[x].quantity = this.my_cart[x].quantity - 1
        }
      }
   
    },
    plus(item){
      for(let x in this.my_cart){
        if(this.my_cart[x].id==item.id){
          this.my_cart[x].quantity = this.my_cart[x].quantity + 1
        }
      }
    },
    async paymentMethod() {
      try {
        var otpValue = Math.random().toString(6).slice(2);
        for (let key in this.register.cart) {
          this.register.cart[key]["payment_mode"] = "Paypal";
          this.register.cart[key]["status"] = "Pending";
          this.register.cart[key]['transaction_id'] = otpValue
        }
        this.$store
          .dispatch("transaction/bulk", this.register)
          .then((res) => {});
      } catch (error) {}
      var qs = require("qs");

      var data = qs.stringify({
        grant_type: "client_credentials",
      });
      this.$axios
        .post("https://api-m.sandbox.paypal.com/v1/oauth2/token", data, {
          headers: {},
          auth: {
            username:
              "AfhkPCUFnmyofuwN3OSicO7Z83gKoXlDUmba7meh3GewvB6eC1nQ74JrMCSANpYyUudyjEvZBoda-5q-",
            password:
              "EFmDE0yWqqoyTN6LuLgF7Wn0j2iZGq8gSkSOGzaNlfHKZy2upl2FkbriFlgk55_SGmFSvIVgmVf9cXdk",
          },
        })
        .then((res) => {
          console.log(res.data);
          // alert(res.data["access_token"]);
          var params1 = {
            intent: "sale",
            payer: { payment_method: "paypal" },
            transactions: [
              {
                amount: {
                  total: "25.00",
                  currency: "USD",
                  details: { subtotal: "25.00" },
                },
                description: "This is the payment transaction description.",
                custom: "EBAY_EMS_90048630024435",
                invoice_number: "48787582685",
                payment_options: {
                  allowed_payment_method: "INSTANT_FUNDING_SOURCE",
                },
                soft_descriptor: "ECHI5786786",
                item_list: {
                  items: [
                    {
                      name: "handbag",
                      description: "Black color hand bag",
                      quantity: "1",
                      price: "25.00",
                      sku: "product34",
                      currency: "USD",
                    },
                  ],
                  shipping_address: {
                    recipient_name: "Hello World",
                    line1: "4thFloor",
                    line2: "unit#34",
                    city: "SAn Jose",
                    country_code: "US",
                    postal_code: "95131",
                    phone: "011862212345678",
                    state: "CA",
                  },
                },
              },
            ],
            note_to_payer: "Contact us for any questions on your order.",
            redirect_urls: {
              return_url: "http://52.192.75.244/customer/order/",
              cancel_url: "http://52.192.75.244/",
            },
          };
          var url = "https://api-m.sandbox.paypal.com/v1/payments/payment";
          var headers_payment = {
            Accept: "application/json",
            "Accept-Language": "en_US",
            Authorization: `Bearer ${res.data["access_token"]}`,
            "Content-Type": "application/json",
          };
          var b = this.$axios
            .post(url, params1, {
              headers: headers_payment,
            })
            .then((res) => {
              location = res.data["links"][1]["href"];
            });
        });
    },
    checkout() {
      var a = 0;
      this.register.cart.filter((data) => {
        a = a + data.price * data.quantity;
      });
      this.total_price = a;
      this.isCheckout = true;
    },
    updateSize(operation) {
      if (operation == "+") {
        this.size_counter.push("");
        this.size.push("");
        this.price.push("");
      } else {
        this.size_counter.splice(0, 1);
        this.size.splice(0, 1);
        this.price.splice(0, 1);
      }
    },
    async submitHandler() {
      try {
        var otpValue = Math.random().toString(6).slice(2);
        for (let key in this.register.cart) {
          this.register.cart[key]["payment_mode"] = "COD";
          this.register.cart[key]["address"] = this.register.address;
          this.register.cart[key]["contact_number"] = this.register.contact_number;
          this.register.cart[key]["status"] = "Pending";
          this.register.cart[key]['transaction_id'] = otpValue
        }
        this.$store.dispatch("transaction/bulk", this.register).then((res) => {
          alert("Successfully Added");
          location.reload();
        });
      } catch (error) {}
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
    statusConfirmation(item, status) {
      this.requestedStatus = status;
      this.isConfirmationApprove = true;
      this.selectedItem = item;
    },
    manageCertificate() {
      location = "/admin/services/certificate";
    },
    edit(item, status) {
      this.selectedItem = item;
      this.editForm = true;
    },
    async updateStatus() {
      try {
        var item = cloneDeep(this.selectedItem);
        item.status = this.requestedStatus;
        console.log(item);
        await this.$store.dispatch("service/editServices", item).then(() => {
          this.$store.dispatch("service/viewServices");
        });
        this.$toastr.s("SUCCESS MESSAGE", "Successfully Added!");
        this.isConfirmation = false;
        this.isConfirmationApprove = false;
        this.refresh();
      } catch (error) {
        alert(error);
      }
    },
    async activation(item, status) {
      this.selectedItem = cloneDeep(item);
      this.selectedItem.is_active = cloneDeep(status);
      await this.$store.dispatch(
        "blotter/editblotter",
        cloneDeep(this.selectedItem)
      );
      this.$store.dispatch("blotter/viewBlotter");
    },
    refresh() {
      this.$store.dispatch("blotter/viewBlotter");
    },
    editItem(item, status) {
      this.requestedStatus = status;
      this.selectedItem = item;
      this.isConfirmation = true;
      //   this.editForm = true;
    },
    cancelForm() {
      this.$store.dispatch("blotter/viewBlotter");
      this.editForm = false;
      this.addForm = false;
      this.isConfirmation = false;
    },
  },
  data() {
    return {
      my_cart:[],
      total_price: 0,
      isCheckout: false,
      size_counter: [],
      isAdd: false,
      register: {
        cart: [],
      },
      addForm: false,
      isConfirmationApprove: false,
      search: "",
      requestedStatus: false,
      isConfirmation: false,
      file: "",
      addForm: false,
      editForm: false,
      size: [],
      price: [],
      account_type: "Resident",
      selectedItem: {},
      status: "Easy",
      items: [
        {
          name: "Juan Dela Cruz",
          street: "Chino Roces",
          purok: "Pio Del Pilar",
          age: "24",
          birthday: "10/20/10",
          is_active: true,
        },
      ],
      headers: [
        { text: "ID", value: "id" },
        { text: "Product Name", value: "product_name" },
        { text: "Price", value: "price" },
        { text: "Size", value: "variant" },
        { text: "Quantity", value: "quantity",width:150 },
        { text: "Total Price", value: "total_price" },
        { text: "Image", value: "image" },
        // { text: "Address", value: "address" },
        // { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style>
</style>