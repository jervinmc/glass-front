<template>
  <v-sheet class="pa-10" color="">
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
        <div>Price:</div>
        <div>
          <v-text-field v-model="register.price" dense outlined></v-text-field>
        </div>
        <div>Contact Number:</div>
        <div>
          <v-text-field
            v-model="register.contact_number"
            dense
            outlined
          ></v-text-field>
        </div>
        <div>List product specifications (size,color)</div>
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
    <div class="black--text text-h5 pb-5">
      <v-row>
        <v-col>
          <b>Quote Management</b>
        </v-col>
        <v-col align="end">
          <v-btn color="secondary" @click="isQuote = true" class="rounded-lg"
            >ADD CUSTOMIZE</v-btn
          >
        </v-col>
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
          <template #[`item.total_price`]="{ item }">
            {{ item.quantity * item.price }}
          </template>
          <template #[`item.is_active`]="{ item }">
            {{ item.is_active ? "Yes" : "No" }}
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
                <v-list-item @click.stop="statusUpdate(item, 'To Ship')">
                  <v-list-item-content>
                    <v-list-item-title>To Ship</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="statusUpdate(item, 'Pick up')">
                  <v-list-item-content>
                    <v-list-item-title>Pick up</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="statusUpdate(item, 'To Receive')">
                  <v-list-item-content>
                    <v-list-item-title>To Receive</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="statusUpdate(item, 'Delievered')">
                  <v-list-item-content>
                    <v-list-item-title>Delievered</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="statusUpdate(item, 'Complete')">
                  <v-list-item-content>
                    <v-list-item-title>Complete</v-list-item-title>
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
    this.$store.dispatch("quote/view");
    this.register.fullname = cloneDeep(
      `${this.$auth.user.firstname} ${this.$auth.user.lastname}`
    );
  },
  computed: {
    ...mapState("quote", ["quote_data"]),
    filteredData() {
      return this.quote_data.filter(
        (data) => data.user_id == this.$auth.user.id
      );
    },
  },
  methods: {
    submitHandlerCart() {
      this.register.user_id = this.$auth.user.id;
      // this.register.product_id = this.$auth.user.id;
      // this.register.product_id = this.$route.query.id;
      this.$store.dispatch("cart/add", this.register).then((res) => {
        alert("Successfully added to cart");
        location.reload();
      });
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
    viewDetails(item) {
      this.selectedStatus = item.status;
      this.view_status = true;
    },
    statusUpdate(item, status) {
      this.$store
        .dispatch("transaction/edit", { id: item.id, status: status })
        .then((res) => {
          location.reload();
        });
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
      isQuote: false,
      selectedStatus: "Pending",
      view_status: false,
      size_counter: [],
      isAdd: false,
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
        { text: "Message", value: "message" },
        { text: "Fullname", value: "fullname" },
        { text: "Contact Number", value: "contact_number" },
        { text: "Price", value: "price" },
        { text: "Status", value: "status" },
        { text: "Image", value: "image" },
        // { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style>
</style>