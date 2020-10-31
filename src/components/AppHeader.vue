<template>
  <div class="app-header">
  <!-- Top Navbar -->
    <f7-page>
        <f7-navbar :sliding="false">

          <f7-nav-left>
            <f7-link>
              <div class="app-logo">
                <img :src="appLogo">
              </div>
            </f7-link>
          </f7-nav-left>

          <f7-nav-right>
            <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>

            <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
          </f7-nav-right>

          <f7-searchbar
                class="searchbar-demo"
                expandable
                :disable-button="!$theme.aurora"
            >
          </f7-searchbar>

        </f7-navbar>
    </f7-page>

  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      appLogo: require('../static/images/app_logo_white.png').default,
      searchId: 'aa'
    }
  }
}
</script>

<style>
.app-header{
  height: 60px;
}
 .app-logo img{
   width: 160px;
   padding-top: 22px;
 }

.framework7-root > .view, .framework7-root > .views {
    height: calc(100% - var(--f7-appbar-app-offset, 60px));
}
</style>
