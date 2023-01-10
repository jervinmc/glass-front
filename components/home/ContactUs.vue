<template>
  <div class="pa-15">
    <v-row class="px-10">
      <v-col
        cols="6"
        align-self="center"
        class="px-10 bounce"
        transition="slide-x-transition"
      >
        <div class="py-10 text-h4"><b>CONTACT US</b></div>
        <div>
          <v-text-field
            dense
            outlined
            v-model="register.fullname"
            placeholder="Full Name"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            dense
            outlined
            v-model="register.fullname"
            placeholder="Subject"
          ></v-text-field>
        </div>
        <div>
          <v-text-field
            dense
            outlined
            v-model="register.fullname"
            placeholder="Email"
          ></v-text-field>
        </div>
        <div>
          <v-textarea
            dense
            outlined
            v-model="register.fullname"
            placeholder="Message..."
          ></v-textarea>
        </div>
        <div>
          <div class="my-5 black--text">
            <v-btn depressed color="secondary" dark>Submit</v-btn>
          </div>
        </div>
      </v-col>
      <v-col align="center" cols="6">
        <iframe height="500" width="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6158267295455!2d122.04098836418387!3d6.936434470150837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041adef153545%3A0x82917fdace091654!2sPasay%2C%20Zamboanga%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1651156418779!5m2!1sen!2sph" /> 
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {},
    };
  },
};
</script>

<style>
</style>