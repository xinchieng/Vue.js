<template>
  <section class="">
    <!-- Navbar default -->
    <base-nav
      v-for="menu in menus"
      :key="menu.type"
      :type="menu.type"
      effect="dark"
      expand
      title="Default Color"
      class="mt-4"
      :content-id="`navbar-${menu.type}`"
    >
      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a href="./index.html">
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu" :target="`navbar-${menu.type}`">
          </close-button>
        </div>
      </div>
      <component :is="menu.menuComponent"></component>
    </base-nav>
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container shape-container d-flex align-items-center">
        <div class="col px-0">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 text-center pt-lg">
              <h1 style="color: #fff"><b>GOLOG TRACKING</b></h1>
              <p class="lead text-white mt-4 mb-5">
                Package tracking made easy, you just need a tracking number!
              </p>
              <form class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your Order ID.."
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon2"
                  v-model="orderID"
                />
                <div class="input-group-append">
                  <button
                    type="button"
                    class="btn btn-success"
                    @click.prevent="searchButton"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Menu1 from "./Navigation/Menu1";


export default {
  data() {
    return {
      orderID: "",
      menus: [
        { type: "default", menuComponent: Menu1 },
        { type: "primary", menuComponent: Menu2 },
        { type: "success", menuComponent: Menu3 },
        { type: "danger", menuComponent: Menu4 },
        { type: "warning", menuComponent: Menu5 },
        { type: "info", menuComponent: Menu6 },
      ],
    };
  },
  methods: {
    searchButton() {
      if (!this.orderID) {
        console.log("Order ID is empty");
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter your order ID.",
        });
      } else {
        this.$router.push("/OrderTracking");
      }
    },
  },
  components: {
    BaseNav,
    CloseButton,
    Menu1,
  },
  props: {
    msg: String,
  },
};
</script>
<style></style>
