<template>
  <v-sheet
    color="#f9fafa"
    class="d-flex justify-center align-center pl-16"
    align="center"
    height="50vh"
    width="100wh"
  >
    <div align="center">
      <v-row no-gutters>
        <v-col>
          <v-img
           contain
            height="240"
            width="400"
            src="https://rrglassandaluminum.pythonanywhere.com/static/images/about-img.png"
          >
          </v-img>
        </v-col>
        <v-col>
          <div align="start">
            <div class="text-h3"><b>ABOUT US</b></div>
            <div>
              R&R Glass and Aluminum Services is located on Pasay Road in San
              Roque, Zamboanga City, in the owner's personal residence...
            </div>
            <div>
              <div class="my-10 black--text">
                <v-btn depressed color="secondary" dark> Read More </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
</template>

<script>
export default {};
</script>

<style>
</style>