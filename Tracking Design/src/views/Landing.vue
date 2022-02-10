<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <hero></hero>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section pb-0 section-components">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-12">
            <div class="pl-md-5">
              <base-alert type="danger" icon="ni ni-support-16" dismissible>
                <span slot="text"
                  ><strong>Danger!</strong> Please tick
                  <strong>"I am not a robot"</strong> button to make sure is you making
                  operate.
                </span>
              </base-alert>
              <br /><br />
              <h6>Please show you are not a robot :</h6>
              <!--
              <vue-recaptcha sitekey="Your key here"></vue-recaptcha>-->
              <button type="button" class="btn btn-primary">
                <router-link
                  to="/profile"
                  class="nav-link-inner--text"
                  style="color: white"
                  >Submit</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "./components/Hero";
// import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "home",
  name: "components",
  components: {
    Hero,
    // VueRecaptcha,
  },
};
</script>
