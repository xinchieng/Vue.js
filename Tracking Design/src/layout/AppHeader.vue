<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <a slot="brand" class="navbar-brand mr-lg-5">
        <router-link to="/" class="nav-link-inner--text"
          ><img src="/golog_logo.png" alt="logo" style="width: 90px; height: 55px"
        /></router-link>
      </a>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <a
          slot="title"
          class="nav-link"
          data-toggle="dropdown"
          role="button"
          @click="goToTracking()"
        >
          <i class="ni ni-collection d-lg-none"></i>
          <span class="nav-link-inner--text">Tracking</span>
        </a>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/gologmalaysia/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.youtube.com/channel/UCSk4F1Lf5T0Ph5QQQIf7cNw"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="View us on Youtube"
          >
            <i class="fa fa-youtube-play"></i>
            <span class="nav-link-inner--text d-lg-none">Youtube</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/gologmalaysia/"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Instagram"
          >
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    Modal,
  },
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false,
      },
    };
  },
  methods: {
    goToTracking() {
      this.$router.push("/");
    },
  },
};
</script>
<style></style>
