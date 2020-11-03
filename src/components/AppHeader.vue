<template>
  <!-- Top Navbar -->
    <f7-navbar :sliding="false">

      <f7-nav-left>
        <f7-link>
          <div class="app-logo">
            <img :src="appLogo">
          </div>
        </f7-link>
      </f7-nav-left>

      <f7-nav-right>
        <f7-link
          class="searchbar-enable"
          data-searchbar=".searchbar-demo"
          icon-ios="f7:search"
          icon-aurora="f7:search"
          icon-md="material:search">
        </f7-link>

        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-searchbar
        id="searchbar-autocomplete"
        class="searchbar-demo"
        expandable
        :disable-button="!$theme.aurora"
      >
      </f7-searchbar>

    </f7-navbar>

</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      fruits: 'Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple'.split(' '),
      appLogo: require('../static/images/app_logo_white.png').default,
      searchId: 'aa'
    }
  },
  methods: {
    onPageInit () {
      const self = this
      const app = self.$f7
      const fruits = self.fruits
      const $ = self.$$

      // Searchbar Autocomplete
      self.autocompleteSearchbar = app.autocomplete.create({
        openIn: 'dropdown',
        inputEl: '#searchbar-autocomplete input[type="search"]',
        // dropdownPlaceholderText: 'Type "Apple"',
        source (query, render) {
          console.log(query)
          const results = []
          if (query.length === 0) {
            render(results)
            return
          }
          // Find matched items
          for (let i = 0; i < fruits.length; i += 1) {
            if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i])
          }
          // Render items by passing array with result items
          render(results)
        },
        on: {
          change: function (value) {
            // self.searchbar.disable()
            console.log('autocomplete changed', value)
          },
          open: function () {
            console.log('autocomplete open')
          },
          close: function () {
            console.log('autocomplete close')
          }
        }
      })
      // self.searchbar = app.searchbar.create({
      //   el: '#searchbar-autocomplete',
      //   customSearch: true,
      //   on: {
      //     search (sb, query) {
      //       console.log(query)
      //     }
      //   }
      // })
      self.searchbar = app.searchbar.create({
        el: '#searchbar-autocomplete',
        customSearch: true,
        on: {
          enable: function (searchbar) {
            setTimeout(() => {
              if (app.theme === 'ios') {
                searchbar.$el.css('overflow', 'visible')
              } else {
                searchbar.$el.parents('.navbar-inner').css('overflow', 'visible')
              }
            }, 400)
          },
          disable: function (searchbar) {
            if (app.theme === 'ios') {
              searchbar.$el.css('overflow', '')
            } else {
              searchbar.$el.parents('.navbar-inner').css('overflow', '')
            }
          }
        }
      })
    }

  },
  mounted () {
    this.$nextTick(() => {
      this.onPageInit()
    })
  }
}
</script>

<style>
/* .app-header{
  height: 60px;
}
 .app-logo img{
   width: 160px;
   padding-top: 22px;
 }

.framework7-root > .view, .framework7-root > .views {
    height: calc(100% - var(--f7-appbar-app-offset, 60px));
} */
</style>
