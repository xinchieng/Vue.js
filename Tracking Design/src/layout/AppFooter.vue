<template>
  <footer class="footer has-cards">
    <div class="container">
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            <a href="https://www.glogc.com/" target="_blank" rel="noopener"
              >GOLOG Malaysia</a
            >
            &, all rights reserved.
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
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
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
