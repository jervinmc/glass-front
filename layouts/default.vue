<template>
  <v-app dark>
    <v-dialog v-model="isConfirmation" >
      <v-card class="pa-10">
        Your Item has been delievered. Please confirm the item.
        <div>
          <v-btn @click="isConfirmation=false">
            Confirm
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
    <v-navigation-drawer v-if="
      $route.name != 'index' &&
      $route.name != 'contact' &&
      $route.name != 'redeem' &&
      $route.name != 'login' &&
      $route.name != 'verify' &&
      $route.name != 'login-customer' &&
      $route.name != 'register' &&
      $route.name != 'admin'
    " v-model="drawer" color="#18242c" fixed app>
      <v-list class="pt-15" v-if="$auth.loggedIn">
        <v-list-item class="white--text" v-for="(item, i) in $auth.user.account_type == 'Admin' ? items_admin : items"
          :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout" class="white--text" router exact>
          <v-list-item-action>
            <v-icon color="white">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'Logout'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="#18242c" v-if="$auth.loggedIn" :clipped-left="clipped" fixed app>
      <!-- <div align="start">
        <v-img
          class="pointer"
          src="/logo.jpeg"
          height="50"
          width="100"
          contain
          @click="goIndex"
        />
      </div> -->
      <v-spacer />
      <div :class="
        $route.name == 'redeem'
          ? 'px-10 pointer secondary--text'
          : 'px-10 pointer white--text'
      " @click="pushRoute('')">
        Home
      </div>
      <div :class="
        $route.name == 'redeem'
          ? 'px-10 pointer secondary--text'
          : 'px-10 pointer white--text'
      " @click="routeLink('profile')">
        My Account
      </div>
      <div class="px-10 pointer">
        <v-btn dark depressed color="secondary" @click="$auth.logout()">
          Logout
        </v-btn>
      </div>
    </v-app-bar>

    <v-app-bar color="#18242c" v-if="$route.name == 'admin'" :clipped-left="clipped" fixed app>
      <v-spacer />
    </v-app-bar>
    <v-app-bar color="#18242c" v-else :clipped-left="clipped" fixed app>
      <div align="start" class="white--text text-h5">
        <b @click="goIndex" class="pointer">R&R</b>
      </div>
      <v-spacer />
      <div v-if="$auth.loggedIn">
        <div v-if="$auth.user.account_type == 'Admin'" :class="
          $route.name == 'redeem'
            ? 'px-10 pointer secondary--text'
            : 'px-10 pointer white--text'
        " @click="routeLink('admin/dashboard')">
          My Admin
        </div>
      </div>
      <div v-if="$auth.loggedIn && $auth.user.account_type!='Admin'" class='px-10 pointer white--text' @click="pushRoute('profile')">
        My Account
      </div>
      <div :class="
        $route.name == 'contact'
          ? 'px-10 pointer white--text'
          : 'px-10 pointer white--text'
      " @click="pushRoute('contact')">
        Contact Us
      </div>
      <div :class="
        $route.name == 'login'
          ? 'px-10 pointer secondary--text'
          : 'px-10 pointer white--text'
      " @click="pushRoute('login/customer')" v-if="!$auth.loggedIn">
        Login
      </div>
      <div class="px-10 pointer" v-if="!$auth.loggedIn">
        <v-btn dark depressed color="secondary" @click="pushRoute('register')">
          Sign up
        </v-btn>
      </div>
      <div class="px-10 pointer" v-else>
        <v-btn dark depressed color="secondary" @click="$auth.logout()">
          Logout
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer padless>
      <v-card flat tile>
        <v-card-text>
          <v-btn
            v-for="icon in iconFooter"
            :key="icon"
            class="mx-4 secondary--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="black--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="secondary--text">
          <a href="https://www.freepik.com/vectors/claim"
            >Claim vector created by pch.vector - www.freepik.com</a
          >
          {{ new Date().getFullYear() }} — <strong>R2M</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
  </v-app>
</template>

<script>
import Pusher from 'pusher-js';
export default {
  created() {
    var pusher = new Pusher('33efacb6a0d9c7baad00', {
      cluster: 'ap1'
    });
    var channel = pusher.subscribe("notif");
    channel.bind('my-test', function (data) {
      if (data.message == this.$auth.user.id) {
        if(data.status=='Delievered'){
          this.isConfirmation = true
        }
        else{
          alert(data.title)
        }
        // alert(data.title)
      }

      // const res2 =  this.$axios
      // .post(`/chatgetall/`, {"channel":"abc"},{
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem('token')}`,
      //   },
      // })
      // .then((rest) => {
      //     this.chatList=rest.data
      // })
      //  alert(data)
    }, this);
  },
  methods: {
    logout() {
      this.$auth.logout().then(() => {
        location = "/route";
      });
    },
    pushRoute(link) {
      window.location.href = `/${link}`;
    },
    routeLink(link) {
      location = `/${link}`;
    },
    goIndex() {
      window.location.href = "/";
    },
  },
  name: "DefaultLayout",
  data() {
    return {
      isConfirmation:false,
      clipped: false,
      drawer: true,
      fixed: false,
      iconFooter: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-instagram",
      ],
      items: [
        // {
        //   icon: "mdi-chart-bubble",
        //   title: "Dashboard",
        //   to: "/customer/dashboard",
        // },
        {
          icon: "mdi-chart-bubble",
          title: "Transaction",
          to: "/customer/order",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Shop",
          to: "/customer/product",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Cart",
          to: "/customer/cart",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Customize Order",
          to: "/customer/quote",
        },
        {
          icon: "mdi-chart-bubble",
          title: "My Purchased",
          to: "/customer/complete",
        },
      ],
      items_admin: [
        {
          icon: "mdi-chart-bubble",
          title: "Dashboard",
          to: "/admin/dashboard",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Transaction",
          to: "/admin/transaction",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Shop",
          to: "/admin/product",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Customize Order",
          to: "/admin/quote",
        },
        // {
        //   icon: "mdi-chart-bubble",
        //   title: "Sales",
        //   to: "/admin/sales",
        // },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
