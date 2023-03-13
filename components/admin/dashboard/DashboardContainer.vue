<template>
  <div class="pa-10">
    <v-row>
      <v-col>
        <v-card class="pa-5" color="#0086ca" dark>
          <v-row>
            <v-col cols="8">
              <div class="text-h6">
                {{ users.length }}
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
                {{ product_data.length }}
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
                {{ transaction_data.length }}
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
      <v-col>
        <v-card class="pa-5" color="#e67e22" dark>
          <v-row>
            <v-col cols="8">
              <div class="text-h6">
                {{ quote_data.length }}
              </div>
              <div>
                Customize Orders
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
    <v-sheet color="">
      <!-- <div class="black--text text-h5 pb-5">
      <v-row>
        <v-col>
          <b>Sales</b>
        </v-col>
      </v-row>
    </div> -->
      <div>
        <v-row>
          <v-col>
            <v-card class="pa-5" color="#0086ca" dark>
              <v-row>
                <v-col cols="8">
                  <div class="text-h6">
                    {{ sales_data.length }}
                  </div>
                  <div>New Orders</div>
                </v-col>
                <v-col align="end">
                  <div>
                    <v-icon> mdi-account </v-icon>
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
                    {{ total_sales }}
                  </div>
                  <div>Total Income</div>
                </v-col>
                <v-col align="end">
                  <div>
                    <v-icon> mdi-list-box </v-icon>
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
                    {{ 0 }}
                  </div>
                  <div>Product Sold</div>
                </v-col>
                <v-col align="end">
                  <div>
                    <v-icon> mdi-cart-variant </v-icon>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <!-- <v-col>
          <v-card class="pa-5" color="#e67e22" dark>
            <v-row>
              <v-col cols="8">
                <div class="text-h6">
                  {{ users.length }}
                </div>
                <div>User</div>
              </v-col>
              <v-col align="end">
                <div>
                  <v-icon> mdi-account-multiple </v-icon>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col> -->
        </v-row>
      </div>
      <!-- <div class="py-10">
      <v-row>
        <v-col>
          <v-card class="pa-10">
            <div>Product Sold</div>
            <div class="pa-5">
              <VueApexCharts
                :series="series"
                :data="data"
                :options="chartOptions"
                height="300"
              />
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-10">
            <div>Sales/Revenue</div>
            <div class="pa-5">
              <VueApexCharts
                :series="series"
                :data="data"
                :options="chartOptions1"
                height="300"
              />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div> -->
      <v-dialog v-model="view_status" width="800">
        <v-card class="pa-10">
          <v-stepper alt-labels>
            <v-stepper-header>
              <v-stepper-step step="1" complete> Pending </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="
                selectedStatus == 'Approved' || selectedStatus == 'Delivered'
              ">
                Approved
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3">Delivered</v-stepper-step>
            </v-stepper-header>
          </v-stepper>
        </v-card>
      </v-dialog>
      <v-dialog width="900" v-model="isAdd">
        <v-card class="pa-16">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="register.product_name" outlined dense placeholder="Product Name"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="register.price" outlined dense placeholder="Price"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="register.quantity" outlined dense placeholder="Quantity"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-spacer></v-spacer>
                <v-col align="end">
                  <v-btn class="rounded-lg" color="secondary" @click="updateSize('-')">-</v-btn>
                </v-col>
                <v-col align="end" cols="auto">
                  <v-btn class="rounded-lg" color="secondary" @click="updateSize('+')">+</v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" v-for="(x, index) in size_counter" :key="x">
              <v-row>
                <v-col cols="6">
                  <v-text-field v-model="size[index]" outlined dense placeholder="Size"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="price[index]" outlined dense placeholder="Price"></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-textarea outlined dense placeholder="Description" v-model="register.description"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-select outlined dense v-model="register.category" placeholder="Category"
                :items="['Windows', 'Door', 'Tables', 'Aquarium']"></v-select>
            </v-col>
            <v-col cols="12">
              <input type="file" id="fileInput" ref="file" @change="onFileUpload" />
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col align="end">
                  <v-btn outlined class="rounded-lg" @click="isAdd = false">Cancel</v-btn>
                </v-col>
                <v-col>
                  <v-btn class="rounded-lg" color="secondary" @click="submitHandler">Submit</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>

      <v-row>
        <v-row>
          <v-col>
            <div>
              From
              <div class="text-h5">
                <v-menu ref="fromMenu" v-model="fromMenu" :close-on-content-click="false" :return-value.sync="date.from"
                  transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date.from" outlined readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date.from" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="fromMenu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.fromMenu.save(date.from)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </div>
          </v-col>
          <v-col>
            <div>
              To
              <div class="text-h5">
                <v-menu ref="toMenu" v-model="toMenu" :close-on-content-click="false" :return-value.sync="date.to"
                  transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="date.to" outlined readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="date.to" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="toMenu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.toMenu.save(date.to)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </div>
          </v-col>
          <v-col>
            <v-btn @click="resetData"> Reset </v-btn>
          </v-col>
        </v-row>
        <v-col>
          <div>
            <v-col align="end">
              <v-btn @click="generateReceipt">
                Generate PDF Report
              </v-btn>
            </v-col>
            <v-card class="pa-16" elevation="1" color="white">
              <div>
                Recently Sold
              </div>
              <VueHtml2pdf :show-layout="false" :float-layout="true" :enable-download="true"
                :paginate-elements-by-height="1400" filename="myPDF" :pdf-quality="2" :manual-pagination="false"
                pdf-format="a4" pdf-orientation="portrait" pdf-content-width="800px" ref="html2Pdf">
                <v-section slot="pdf-content">
                  <v-data-table :search="search" class="pa-5" :headers="headers" :items="filteredData"
                    :loading="isLoading">
                    <template v-slot:loading>
                      <v-skeleton-loader v-for="n in 5" :key="n" type="list-item-avatar-two-line"
                        class="my-2"></v-skeleton-loader>
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
                  </v-section>
                  </VueHtml2pdf>
                  <div>
                    <v-data-table :search="search" class="pa-5" :headers="headers" :items="filteredData"
                    :loading="isLoading">
                    <template v-slot:loading>
                      <v-skeleton-loader v-for="n in 5" :key="n" type="list-item-avatar-two-line"
                        class="my-2"></v-skeleton-loader>
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
                  </div>
                  <div align="end">
                    <div>Total Amount: Php {{ total_sales }}</div>
                  </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <div></div>
    </v-sheet>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import { mapState } from 'vuex';
import VueToastr from "vue-toastr";
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    VueApexCharts,
    VueHtml2pdf
  },
  computed: {
    filteredData() {
      if (this.date.from == "" || this.date.from == undefined) {
        return this.sales_data;
      } else {
        // alert(this.date.from)
        var date_from = this.$FormatDate(this.date.from);
        var date_to = this.$FormatDate(this.date.to);
        // return this.transaction_data.filter(data=?)
        return this.sales_data.filter(
          (data) =>
            this.$FormatDate(data.date_from) > date_from &&
            this.$FormatDate(data.date_from) < date_to
        );
      }
    },
    ...mapState('users', ['users']),
    ...mapState("product", ["product_data"]),
    ...mapState("transaction", ["transaction_data"]),
    ...mapState("quote", ["quote_data"]),
    sales_data() {
      return this.transaction_data.filter(
        (data) => data.status == "Delievered"
      );
    },
    total_sales() {
      var a = 0;
      this.sales_data.map((res) => {
        a = a + res.price * res.quantity;
      });
      return a;
    },
  },
  created() {
    this.$store.dispatch('users/view')
    this.$store.dispatch('product/view')
    this.$store.dispatch('transaction/view')
    this.$store.dispatch('quote/view')
  },
  methods: {
    generateReceipt(item) {
      this.selectedItem = item;
      this.isGenerate = true;
      this.$refs.html2Pdf.generatePdf();
    },
    resetData() {
      this.date = {
        from: "",
        to: "",
      };
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
      date: {
        from: "",
        to: "",
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
      chartOptions: {
        chart: {
          height: 250,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
      chartOptions1: {
        chart: {
          height: 250,
          type: "bar",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
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
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
        { text: "Total Price", value: "total_price" },
        { text: "Image", value: "image" },
        { text: "Status", value: "status" },
        // { text: "Address", value: "address" },
        // { text: "Actions", value: "opt" },
        ,
      ],
    };
  },
};
</script>

<style></style>
}
</script>

<style></style>