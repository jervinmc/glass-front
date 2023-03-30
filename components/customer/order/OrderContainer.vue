<template>
  <v-sheet class="pa-10" color="">
    <v-dialog v-model="view_status" width="800">
      <v-card class="pa-10">
        <div class="py-10">
          Tracking #:{{selectedItem.tracking_id}}
        </div>
        <v-stepper alt-labels>
          <v-stepper-header>
            <v-stepper-step step="1" complete> Confirm </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2" :complete="selectedStatus=='Picked up' || selectedStatus=='To Receive' || selectedStatus=='Confirm' || selectedStatus=='Delievered' || selectedStatus=='Completed'"> Picked up </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3" :complete="selectedStatus=='To Receive' || selectedStatus=='Delievered' || selectedStatus=='Completed'">To Receive</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="4" :complete="selectedStatus=='Delievered' || selectedStatus=='Completed'">Delivered</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="5" :complete="selectedStatus=='Completed'">Completed</v-stepper-step>
          </v-stepper-header>
        </v-stepper>
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
          <b>Tracking Order</b>
        </v-col>
        <!-- <v-col align="end">
          <v-btn
            color="secondary"
            @click="isAdd = true"
            outlined
            class="rounded-lg"
            >Add Product</v-btn
          >
        </v-col> -->
      </v-row>
    </div>
    <div>
      <v-card class="pa-16" elevation="1" color="white">
        <div class="pt-10">
          <v-text-field
            hide-details
            v-model="search"
            outlined
            dense
            placeholder="Search Request No."
          ></v-text-field>
        </div>
        <v-data-table
          :search="search"
          class="pa-5"
          :headers="headers"
          :items="filteredData"
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
          <template #[`item.date_from`]="{ item }">
            {{ $FormatDate(item.date_from)}}
          </template>
          <template #[`item.is_active`]="{ item }">
            {{ item.is_active ? "Yes" : "No" }}
          </template>
          <template #[`item.total_price`]="{ item }">
            {{ $FormatPrice(item.quantity * item.price) }}
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
                <v-list-item @click.stop="viewDetails(item)">
                  <v-list-item-content>
                    <v-list-item-title>View</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
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
    this.$store.dispatch("transaction/view");
  },
  computed: {
    ...mapState("transaction", ["transaction_data"]),
    filteredData() {
      if(this.date.from=='' || this.date.from==undefined ){
        return this.myOrder
      }
      else{
        // alert(this.date.from)
        var date_from = this.$FormatDate(this.date.from)
        var date_to = this.$FormatDate(this.date.to)
        // return this.transaction_data.filter(data=?)
        return this.myOrder.filter(data=>this.$FormatDate(data.date_from)>date_from && this.$FormatDate(data.date_from)<date_to)
      }
      
    },
    myOrder() {
      return this.transaction_data.filter(
        (data) => data.user_id == this.$auth.user.id
      );
    },
    // filteredData() {
    //   return this.exercise_data.filter((data) => data.category == this.status);
    // },
  },
  methods: {
    viewDetails(item) {
      this.selectedStatus = item.status;
      this.selectedItem = item
      this.view_status = true;
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
        let form_data = new FormData();
        if (this.file != null && this.file != "") {
          form_data.append("image", this.file);
        }
        form_data.append("size", this.size);
        form_data.append("price", this.price);
        form_data.append("product_name", this.register.product_name);
        form_data.append("category", this.register.category);
        form_data.append("price", this.register.price);
        form_data.append("quantity", this.register.quantity);
        form_data.append("description", this.register.description);
        await this.$store.dispatch("product/add", form_data).then((res) => {
          this.$store.dispatch("size/add", {
            size: this.size,
            price: this.price,
            product_id: res.id,
          });
        });
        this.isAdd = false;
        alert("Successfully Added!");
        location.reload();
      } catch (error) {
        alert(error);
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
      selectedStatus: "Pending",
      view_status: false,
      size_counter: [],
      isAdd: false,
      date:{
        from:'',
        to:''
      },
      register: {
        size: [],
        price: [],
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
        { text: "Size", value: "size" },
        { text: "Quantity", value: "quantity" },
        { text: "Status", value: "status" },
        { text: "Total Price", value: "total_price" },
        { text: "Image", value: "image" },
        { text: "Payment Method", value: "payment_mode" },
        { text: "Date Ordered", value: "date_from" },
         { text: "Contact Number", value: "contact_number" },
        { text: "Address", value: "Address" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style>
</style>