<template>
  <v-sheet class="pa-10" color="">
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
              <v-col>
                <div>Size</div>
              </v-col>
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
              <v-col cols="4">
                <v-text-field
                  v-model="size[index]"
                  outlined
                  dense
                  placeholder="Size"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="price[index]"
                  outlined
                  dense
                  placeholder="Price"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  v-model="color[index]"
                  outlined
                  dense
                  placeholder="Color(default:transparent)"
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
              :items="['Windows', 'Doors', 'Tables', 'Aquariums','Build-in Cabinets','Hanging Cabinents']"
            ></v-select>
          </v-col>
           <v-col cols="12">
            <v-select
              outlined
              dense
              v-model="register.status"
              placeholder="Status"
              :items="['In Stock', 'Out Of Stock']"
            ></v-select>
          </v-col>
          <div>
            Image 1
          </div>
          <v-col cols="12">
            <input
              type="file"
              id="fileInput"
              ref="file"
              @change="onFileUpload"
            />
          </v-col>
           <div>
            Image 2
          </div>
          <v-col cols="12">
            <input
              type="file"
              id="fileInput2"
              ref="file2"
              @change="onFileUpload2"
            />
          </v-col>
           <div>
            Image 3
          </div>
          <v-col cols="12">
            <input
              type="file"
              id="fileInput3"
              ref="file3"
              @change="onFileUpload3"
            />
          </v-col>
           <div>
            Image 4
          </div>
          <v-col cols="12">
            <input
              type="file"
              id="fileInput4"
              ref="file4"
              @change="onFileUpload4"
            />
          </v-col>
           <div>
            Image 5
          </div>
          <v-col cols="12">
            <input
              type="file"
              id="fileInput5"
              ref="file5"
              @change="onFileUpload5"
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
          <b>Product Management</b>
        </v-col>
        <v-col align="end">
          <v-btn
            color="secondary"
            @click="addProduct"
            outlined
            class="rounded-lg"
            >Add Product</v-btn
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
          :items="product_data"
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
                <!-- <v-list-item @click.stop="edit(item, '')">
                  <v-list-item-content>
                    <v-list-item-title>View</v-list-item-title>
                  </v-list-item-content>
                </v-list-item> -->
                <v-list-item @click.stop="editItemDetail(item)">
                  <v-list-item-content>
                    <v-list-item-title>Edit</v-list-item-title>
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
    this.$store.dispatch("product/view");
  },
  computed: {
    ...mapState("product", ["product_data"]),
    ...mapState("size", ["size_data"]),
    filteredData() {
      return this.exercise_data.filter((data) => data.category == this.status);
    },
  },
  methods: {
    addProduct() {
      this.isAdd = true;
      this.isEdit = false;
    },
    editItemDetail(item) {
      this.isEdit = true;
      this.register = cloneDeep(item);
      this.size = [];
      this.price = [];
      this.$store
        .dispatch("size/sizeProductID", { product_id: item.id })
        .then((res) => {
          this.size_counter = [];
          for (let x in this.size_data) {
            this.size_counter.push("");
            this.size.push(this.size_data[x].size);
            this.price.push(this.size_data[x].price);
            this.color.push(this.size_data[x].color);
          }
          this.isAdd = true;
        });
    },
    updateSize(operation) {
      if (operation == "+") {
        this.size_counter.push("");
        this.size.push("");
        this.price.push("");
        this.color.push("");
      } else {
        this.size_counter.splice(0, 1);
        this.size.splice(0, 1);
        this.price.splice(0, 1);
        this.color.splice(0, 1);
      }
    },
    async submitHandler() {
      if (this.isEdit) {
        try {
          let form_data = new FormData();
          // if (this.file != null && this.file != "") {
          //   form_data.append("image", this.file);
          // }
          form_data.append("id", this.register.id);
          form_data.append("size", this.size);
          form_data.append("price", this.price);
          form_data.append("product_name", this.register.product_name);
          form_data.append("category", this.register.category);
          form_data.append("price", this.register.price);
          form_data.append("quantity", this.register.quantity);
          form_data.append("status", this.register.status);
          form_data.append("description", this.register.description);
          await this.$store.dispatch("product/edit", form_data).then((res) => {
            this.$store.dispatch("size/add", {
              size: this.size,
              price: this.price,
              color: this.color,
              product_id: res.id,
            });
            this.isAdd = false;
            alert("Successfully Updated!");
            location.reload();
          });
        } catch (error) {
          alert(error);
        }
        return;
      }
      try {
        let form_data = new FormData();
        if (this.file != null && this.file != "") {
          form_data.append("image", this.file);
        }
        if (this.file2 != null && this.file2 != "") {
          form_data.append("image1", this.file2);
        }
        if (this.file3 != null && this.file3 != "") {
          form_data.append("image2", this.file3);
        }
        if (this.file4 != null && this.file4 != "") {
          form_data.append("image3", this.file4);
        }
        if (this.file5 != null && this.file5 != "") {
          form_data.append("image4", this.file5);
        }
        form_data.append("size", this.size);
        form_data.append("price", this.price);
        form_data.append("product_name", this.register.product_name);
        form_data.append("category", this.register.category);
        form_data.append("price", this.register.price);
        form_data.append("status", this.register.status);
        form_data.append("quantity", this.register.quantity);
        form_data.append("description", this.register.description);
        await this.$store.dispatch("product/add", form_data).then((res) => {
          this.$store.dispatch("size/add", {
            size: this.size,
            price: this.price,
            color: this.color,
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
    onFileUpload2(e) {
      this.file2 = e;
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
      this.file2 = e;
    },
    onFileUpload3(e) {
      this.file3 = e;
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
      this.file3 = e;
    },
    onFileUpload4(e) {
      this.file4 = e;
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
      this.file4 = e;
    },
    onFileUpload5(e) {
      this.file5 = e;
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
      this.file5 = e;
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
      file2:'',
      file3:'',
      file4:'',
      file5:'',
      isEdit: false,
      size_counter: [],
      isAdd: false,
      register: {
        size: [],
        price: [],
        color: [],
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
      color: [],
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
        { text: "Quantity", value: "quantity" },
        { text: "Image", value: "image" },
        { text: "Status", value: "status" },

        // { text: "Address", value: "address" },
        { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style>
</style>