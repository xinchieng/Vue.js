<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <hero></hero>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-box-2" type="primary" rounded class="mb-4"> </icon>
                  <h6 class="text-primary text-uppercase">Last delivery status</h6>
                  <p class="description mt-3">
                    View the latest delivery statuses of all your shipments in one place.
                  </p>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-email-83" type="success" rounded class="mb-4"> </icon>
                  <h6 class="text-success text-uppercase">Email tracking status</h6>
                  <p class="description mt-3">
                    Notify receiver via email on tracking statuses.
                  </p>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4"> </icon>
                  <h6 class="text-warning text-uppercase">Website tracking status</h6>
                  <p class="description mt-3">
                    Enter your track number to view latest delivery status.
                  </p>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section pb-0 section-components">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img v-lazy="'img/theme/tracking.jpg'" class="card-img-top" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5 floating">
              <h6>All-in-one tracking for</h6>
              <h2>any post office tracking</h2>
              <p>
                This "track my package" universal tracking tool was created to make it
                easier than ever before to track all of your packages by tracking number
                lookup. From this central platform, you can seamlessly track parcels from
                any order shipping of GOLOG in the world and check its location. You no
                longer need to look around to find out which post picked up and where is
                your mail or package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

export default {
  name: "components",
  components: {
    Hero,
    Carousel,
  },
};
</script>
