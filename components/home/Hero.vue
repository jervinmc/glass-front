<template>
  <div class="pa-7">
    <v-row :class="$vuetify.breakpoint.width < 350 ? 'px-10' : 'px-0'">
      <v-col
        cols="12" md="6" lg="6" xl="6"
        align-self="center"
        class="px-10 bounce"
        transition="slide-x-transition"
      >
        <div class="text-h3 black--text" style="font-weight:heavy">
          <b>R&R GLASS AND ALUMINUM SERVICES</b>
        </div>
        <div class="text-h6 black--text">
          <b
            ><br />
            R&R is able to provide a high quality products at a very affordable
            cost. Specializes in the installation of doors and windows made of
            glass and aluminum or PVC materials.
          </b>
        </div>
        <v-row>
          <v-col cols="auto">
            <div class="my-10 black--text">
              <v-btn depressed color="black" dark> CONTACT US </v-btn>
            </div>
          </v-col>
          <v-col>
            <div class="my-10 black--text">
              <v-btn depressed color="secondary" dark> About US </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col align="center" cols="6" v-if="$vuetify.breakpoint.width > 500">
        <v-img
          src="/images/hero-vector.png"
          height="400"
          width="650"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>