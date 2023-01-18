<template>
  <div class="pa-10">
    <v-dialog v-model="isCheckout" width="500">
      <v-card class="pa-10">
        <div>
          <v-row>
            <v-col cols="auto">
              <v-img :src="$route.query.image" height="100" width="100">
              </v-img>
            </v-col>
            <div>
              <div class="text-h5">Contact Information:</div>
              <div>Address: {{ $auth.user.address }}</div>
              <div>Contact Number: {{ $auth.user.contact_number }}</div>
              <div>
                Fullname: {{ $auth.user.firstname }} {{ $auth.user.lastname }}
              </div>
            </div>
            <v-col>
              <div>Product Name : {{ $route.query.product_name }}</div>
              <div>Variation : {{ register.variant }}</div>
              <div>{{ register.quantity }}x Quantity</div>
              <div>Php {{ register.price }}</div>
            </v-col>
          </v-row>
        </div>
        <div class="py-5">
          <v-divider></v-divider>
        </div>

        Total Price: Php {{ register.price * register.quantity }}

        <div>
          <div class="pt-4">
            <v-btn color="grey" dark width="100%" @click="isCheckout = false"
              >Cancel</v-btn
            >
          </div>
          <div class="pt-4">
            <v-btn color="secondary" width="100%" @click="submitHandler"
              >Pay COD</v-btn
            >
            <div class="pt-4">
              <v-btn color="secondary" width="100%" @click="paymentMethod"
                >Pay Via Paypal</v-btn
              >
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="8">
        <div>
          <v-img :src="$route.query.image" height="400" width="400"></v-img>
        </div>
        <div>
          <div class="text-h5 py-10">
            Product Name: {{ $route.query.product_name }}
          </div>
          <v-divider></v-divider>
          <div>
            {{ $route.query.description }}
          </div>
        </div>
      </v-col>
      <v-col>
        <div>Quantity</div>
        <div>
          <v-text-field
            outlined
            v-model="register.quantity"
            dense
          ></v-text-field>
        </div>
        <div>Size</div>
        <div>
          <v-select
            outlined
            :items="sizeWithColor"
            @change="sizeChange"
            :item-text="'sizeColor'"
            item-value="sizeColor"
            v-model="register.variant"
            dense
          ></v-select>
        </div>
        <div class="pt-10">
          <v-btn outlined color="grey" width="100%" @click="cancel"
            >Cancel</v-btn
          >
        </div>
        <div class="pt-4">
          <v-btn color="primary" width="100%" @click="submitHandlerCart"
            >Add to Cart</v-btn
          >
        </div>
        <div class="py-2">
          <v-btn color="secondary" width="100%" @click="isCheckout = true"
            >Proceed to Checkout</v-btn
          >
        </div>

        <div class="pt-10">
          <div>Price : {{ register.price }}</div>
          <div>Quantity : {{ register.quantity }}</div>
          <v-divider></v-divider>
          <div>Total Price : {{ register.quantity * register.price }}</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("size", ["size_data"]),
    sizeWithColor() {
      var a = [];
      this.size_data.map((data) => {
        a.push({
          size: data.size,
          price: data.price,
          sizeColor: `${data.size}(${data.color})`,
          color: data.color,
        });
      });
      return a;
    },
  },
  created() {
    this.$store.dispatch("size/sizeProductID", {
      product_id: this.$route.query.id,
    });
  },
  data() {
    return {
      isCheckout: false,
      register: {},
    };
  },
  methods: {
    cancel() {
      location = `/customer/product`;
    },
    submitHandlerCart() {
      this.register.user_id = this.$auth.user.id;
      this.register.product_id = this.$auth.user.id;
      this.register.product_id = this.$route.query.id;
      this.$store.dispatch("cart/add", this.register).then((res) => {
        alert("Successfully added to cart");
        location.reload();
      });
    },
    sizeChange() {
      var size = this.size_data.filter(
        (data) => data.sizeColor == this.register.size
      );
      this.register.price = size[0].price;
    },
    submitHandler() {
      var otpValue = Math.random().toString(6).slice(2);
      this.register.status = "Pending";
      this.register.payment_mode = "COD";
      this.register.user_id = this.$auth.user.id;
      this.register.product_id = this.$route.query.id;
      this.register.tracking_id = otpValue;
      this.$store.dispatch("transaction/add", this.register);
      location.reload();
    },
    async paymentMethod() {
      var otpValue = Math.random().toString(6).slice(2);
      this.register.status = "Pending";
      this.register.payment_mode = "Paypal";
      this.register.user_id = this.$auth.user.id;
      this.register.product_id = this.$route.query.id;
      this.register.tracking_id = otpValue;
      this.$store.dispatch("transaction/add", this.register);
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
                invoice_number: "48787582672",
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
  },
};
</script>

<style>
</style>