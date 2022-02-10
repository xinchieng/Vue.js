<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-profile-cover section-shaped my-0">
        <div class="shape shape-style-1 bg-gradient-warning shape-skew">
          <span></span>
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
                <br />
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
      <!-- 1st Hero Variation -->
    </div>
    <section class="section pb-0 section-components">
      <div class="container">
        <div class="container ct-example-row">
          <div class="row">
            <div class="col">
              <card headerClasses="p-0">
                <h5 style="padding-bottom: 10px">Package Information</h5>
                <p>Tracking Number:<b> D301242</b></p>
                <p>Receiver Name:<b> Xxx Xxx Xxx</b></p>
                <p>Phone:<b> 012 345 3451</b></p>
              </card>
            </div>
            <div class="col">
              <card headerClasses="p-0">
                <template slot="header">
                  <h6
                    style="
                      color: #28c76f;
                      padding: 15px;
                      font-size: calc(1.275rem + 0.3vw);
                    "
                  >
                    Order Completed
                  </h6>
                </template>
                <div class="container">
                  <div class="timeline">
                    <div class="timeline-container primary">
                      <div class="timeline-icon">
                        <i class="fa fa-file-text-o" style="color: white"></i>
                      </div>
                      <div class="timeline-body">
                        <h6>14 Jul 2021 02:07 pm</h6>
                        <p>Order 301242 delivered by 14707</p>
                      </div>
                    </div>
                    <div class="timeline-container danger">
                      <div class="timeline-icon">
                        <i class="fa fa-handshake-o" style="color: white"></i>
                      </div>
                      <div class="timeline-body">
                        <h6>14 Jul 2021 11:04 am</h6>
                        <p>Order picked by driver 14707</p>
                      </div>
                    </div>
                    <div class="timeline-container danger">
                      <div class="timeline-icon">
                        <i class="fa fa-truck" style="color: white"></i>
                      </div>
                      <div class="timeline-body">
                        <h6>13 Jul 2021 10:40 pm</h6>
                        <p>Order assigned to rider : 14707</p>
                      </div>
                    </div>
                    <div class="timeline-container success">
                      <div class="timeline-icon">
                        <i class="fa fa-archive" style="color: white"></i>
                      </div>
                      <div class="timeline-body">
                        <h6>12 Jul 2021 09:26 pm</h6>
                        <p>Your order has been successfully placed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </card>
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
  name: "timeline",
  name: "components",
  data() {
    return {
      orderID: "",
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
    Hero,
    // VueRecaptcha,
  },
};
</script>

<style lang="scss">
// reset some browser default styles
// colors
$primary: #1d8cf8;
$secondary: #bdc3c7;
$info: #11cdef;
$success: #28c76f;
$warning: #ff8d72;
$danger: #fd5d93;

// timeline variables
$body-bg: #1e1e2f;
$timeline-before-bg: #bdc3c7;
$timeline-body-bg: white;
$timeline-body-round: 3px;
$timeline-body-shadow: 1px 3px 9px rgba(0, 0, 0, 0.1);

// typography
p {
  font-weight: 300;
  line-height: 1.5;
  font-size: 14px;
  opacity: 0.8;
}

// timeline style
.timeline {
  position: relative;
  padding-left: 4rem;
  margin: 0 0 0 30px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: $secondary;
  }

  .timeline-container {
    position: relative;
    margin-bottom: 2.5rem;

    .timeline-icon {
      position: absolute;
      left: -88px;
      top: 4px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      font-size: 1.5rem;
      background: $timeline-body-bg;

      i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .timeline-body {
      background: $timeline-body-bg;
      border-radius: $timeline-body-round;
      padding: 20px 20px 15px;
      box-shadow: $timeline-body-shadow;

      &:before {
        content: "";
        background: inherit;
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        left: -10px;
        transform: rotate(45deg);
        border-radius: 0 0 0 2px;
      }

      .timeline-title {
        margin-bottom: 1.4rem;

        .badge {
          background: $secondary;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 12px;
          font-weight: bold;
        }
      }

      .timeline-subtitle {
        font-weight: 300;
        font-style: italic;
        opacity: 0.4;
        margin-top: 16px;
        font-size: 11px;
      }
    }

    // Primary Timeline
    &.primary {
      .badge,
      .timeline-icon {
        background: $success !important;
      }
    }

    // Info Timeline
    &.info {
      .badge,
      .timeline-icon {
        background: $info !important;
      }
    }

    // Success Timeline
    &.success {
      .badge,
      .timeline-icon {
        background: $success !important;
      }
    }

    // Warning Timeline
    &.warning {
      .badge,
      .timeline-icon {
        background: $warning !important;
      }
    }

    // Dnager Timeline
    &.danger {
      .badge,
      .timeline-icon {
        background: $success !important;
      }
    }
  }
}

.author {
  font-family: inherit;
  padding: 3em;
  text-align: center;
  width: 100%;
  color: white;

  a:link,
  a:visited {
    color: white;
    &:hover {
      text-decoration: none;
    }
  }
  .btn:link,
  .btn:visited {
    margin-top: 1em;
    text-decoration: none;
    display: inline-block;
    font-family: inherit;
    font-weight: 100;
    color: white;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    padding: 1.5em 2rem;
    border-radius: 1em;
    transition: 0.5s all;
  }
}
</style>
