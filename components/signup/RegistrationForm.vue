<template>
  <div class="px-10">
    <v-form
      v-model="isValid"
      ref="form"
      lazy-validation
      @submit.prevent="submitHandler"
    >
      <div align="start" class="py-10">
        <div align="center" class="py-10 secondary--text text-h4">
          CREATE AN ACCOUNT
        </div>
        <div>
          <v-row>
            <v-col>
              Firstname
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="register.firstname"
              ></v-text-field>
            </v-col>
            <v-col>
              Lastname
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="register.lastname"
              ></v-text-field>
            </v-col>
            <!-- <v-col>
              Gender
              <v-select
                :items="['Male','Female']"
                outlined
                :rules="standardRules"
                v-model="register.gender"
              ></v-select>
            </v-col> -->
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col>
              Email Address
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="register.email"
              ></v-text-field>
            </v-col>
            <!-- <v-col>
              Confirm Email Address
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="register.confirm_email"
              ></v-text-field>
            </v-col> -->
          </v-row>
        </div>
        <div>
          <v-row>
            <!-- <v-col>
              Mobile Number
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="register.mobile_number"
              ></v-text-field>
            </v-col> -->
            <!-- <v-col>
              <div>
                Birthdate
                <div class="text-h5">
                  <v-menu
                    ref="departMenu"
                    v-model="birthdateMenu"
                    :close-on-content-click="false"
                    :return-value.sync="register.birthdate"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="register.birthdate"
                        outlined
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="register.birthdate"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="birthdateMenu = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.departMenu.save(register.birthdate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>
              </div>
            </v-col> -->
          </v-row>
        </div>
        <div>
          <!-- <v-row>
            <v-col>
              Address
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="register.address"
              ></v-text-field>
            </v-col>
          </v-row> -->
        </div>
        <div>
          <!-- <v-row>
            <v-col>
              Select Province
              <v-select
                outlined
                :items="$provinces()"
                item-text="name"
                item-value="name"
                :rules="standardRules"
                v-model="register.province"
              ></v-select>
            </v-col>
            <v-col>
              Select City
              <v-select
                outlined
                :items="$cities(register.province)"
                :rules="standardRules"
                item-text="name"
                item-value="name"
                v-model="register.city"
              ></v-select>
            </v-col>
            <v-col>
              Select Barangay
              <v-text-field
                outlined
                :rules="standardRules"
                v-model="register.barangay"
              ></v-text-field>
            </v-col>
          </v-row> -->
        </div>
        <div>
          <v-row>
            <v-col>
              Password
              <v-text-field
                outlined
                :rules="standardRules"
                type="password"
                v-model="register.password"
              ></v-text-field>
            </v-col>
            <v-col>
              Confirm Password
              <v-text-field
                outlined
                type="password"
                :rules="standardRules"
                v-model="register.confirm_password"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <div class="px-10 pointer" align="center">
          <v-btn width="200" dark depressed color="grey"> Cancel </v-btn>
          <v-btn
            width="200"
            :loading="isLoaded"
            dark
            depressed
            color="secondary"
            type="submit"
          >
            Submit
          </v-btn>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import validations from "@/utils/validations";
export default {
  data() {
    return {
      birthdateMenu: false,
      isLoaded: false,
      register: {
        firstname: "",
        lastname: "",
        gender: "",
        email: "",
        confirm_email: "",
        mobile_number: "",
        birthdate: "",
        address: "",
        province: "",
        city: "",
        barangay: "",
        password: "",
        confirm_password: "",
      },
      ...validations,
      isValid: false,
    };
  },
  methods: {
    async submitHandler() {
      this.isLoaded = true;
      this.$refs.form.validate();
      if (!this.isValid) return;
      console.log(this.register);
      try {
        this.register.is_active = false;
        await this.$store.dispatch("users/addUser", this.register);
        alert("Successful ! We have sent an email to you for verification.");
        location = "/login";
      } catch (error) {
        alert(error);
      }
      this.isLoaded = false;
    },
  },
};
</script>

<style>
</style>