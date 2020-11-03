<template>
  <f7-page name="home">
    <!-- Page content-->
    <f7-block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </f7-block>
    <f7-block-title>Navigation</f7-block-title>
    <f7-list>
      <f7-list-item link="/about/" title="About"></f7-list-item>
      <f7-list-item link="/form/" title="Form"></f7-list-item>
    </f7-list>

    <f7-block-title>Modals</f7-block-title>
    <f7-block strong>
      <f7-row>
        <f7-col width="50">
          <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
        </f7-col>
        <f7-col width="50">
          <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>
      <f7-list>
      <f7-list-item
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      ></f7-list-item>
      <f7-list-item
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      ></f7-list-item>
      <f7-list-item
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      ></f7-list-item>
    </f7-list>

    <!-- FAB will morph to toolbar -->
    <f7-fab position="right-bottom" morph-to=".demo-fab-fullscreen-sheet.fab-morph-target">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
    </f7-fab>

    <div class="demo-fab-fullscreen-sheet fab-morph-target" slot="fixed">
      <f7-block-title>Choose Something</f7-block-title>
      <div class="list links-list">
        <ul>
          <li><a href="#" class="fab-close">Link 1</a></li>
          <li><a href="#" class="fab-close">Link 2</a></li>
          <li><a href="#" class="fab-close">Link 3</a></li>
          <li><a href="#" class="fab-close">Link 4</a></li>
        </ul>
      </div>
    </div>
  </f7-page>
</template>
<script>
export default {}
</script>
<style>
.demo-fab-fullscreen-sheet {
    position: absolute;
    left: 10px;
    right: 10px;
    top: calc(6px + var(--f7-safe-area-top));
    bottom: 0;
    background: #fff;
    z-index: 1600;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 3px 30px rgba(0,0,0,0.4);
    overflow: hidden;
}
</style>
