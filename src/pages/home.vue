<template>
  <div>
    <AddComplaint />
    <f7-page name="home">
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
            icon-md="material:search"
          ></f7-link>

          <f7-link
            icon-ios="f7:menu"
            icon-aurora="f7:menu"
            icon-md="material:menu"
            panel-open="right"
          ></f7-link>
        </f7-nav-right>

        <form class="searchbar-demo searchbar searchbar-expandable" id="searchbar-autocomplete">
          <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input type="search" placeholder="Search" class="" />
            <i class="searchbar-icon"></i>
          </div>
          <span class="searchbar-disable-button" v-if="!$theme.aurora">Cancel</span>
          </div>
        </form>

       <!-- <f7-searchbar
          id="searchbar-autocomplete"
          class="searchbar-demo searchbar-init"
          expandable
          :clear-button=false
          :disable-button="!this.$theme.aurora"
        ></f7-searchbar> -->

      </f7-navbar>
      <!-- <AppHeader /> -->
      <!-- Page content-->
      <Complaints />

    </f7-page>
  </div>
</template>
<script>
// import AppHeader from '../components/AppHeader'
import Complaints from '../components/Complaints'
import AddComplaint from '../components/AddComplaint'

export default {
  name: 'AppHeader',
  components: {
    Complaints,
    AddComplaint
  },
  data () {
    return {
      fruits: 'Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple'.split(' '),
      appLogo: require('../static/images/app_logo_white.png').default,
      searchId: 'aa'
    }
  },
  methods: {
    onPageBeforeRemove () {
      // const self = this
      // Destroy all autocompletes
      // self.autocompleteDropdownSimple.destroy()
      // self.autocompleteDropdownExpand.destroy()
      // self.autocompleteDropdownAll.destroy()
      // self.autocompleteDropdownPlaceholder.destroy()
      // self.autocompleteDropdownTypeahead.destroy()
      // self.autocompleteDropdownAjax.destroy()
      // self.autocompleteDropdownAjaxTypeahead.destroy()
      // self.autocompleteStandaloneSimple.destroy()
      // self.autocompleteStandalonePopup.destroy()
      // self.autocompleteStandaloneMultiple.destroy()
      // self.autocompleteStandaloneAjax.destroy()
    },
    initAutoComp () {
      const self = this
      const app = self.$f7
      const fruits = self.fruits
      console.log('deneme')

      // Searchbar Autocomplete
      self.autocompleteSearchbar = app.autocomplete.create({
        openIn: 'dropdown',
        inputEl: '#searchbar-autocomplete input[type="search"]',
        dropdownPlaceholderText: 'Search for companies or complaints',
        source (query, render) {
          // console.log(query)
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
          opened: function () {
            console.log('Autocomplete opened')
          },
          close: function () {
            // app.searchbar.disable()
            // app.autocomplete.close(self.autocompleteSearchbar)
            // app.searchbar.destroy(self.searchbar)
            // app.searchbar.clear(self.searchbar)
            console.log('autocomplete close')
          }
        }
      })
      app.autocomplete.open(self.autocompleteSearchbar)
    },
    onPageInit () {
      const self = this
      const app = self.$f7
      const $ = self.$$
      console.log('burda')

      self.searchbar = app.searchbar.create({
        el: '#searchbar-autocomplete',
        on: {
          search (sb, query, previousQuery) {
            console.log(query, previousQuery)
          },
          enable () {
            console.log('searchbar a girdi')
            setTimeout(() => {
              if (app.theme === 'ios') {
                $('#searchbar-autocomplete').css('overflow', 'visible')
              } else {
                $('#searchbar-autocomplete').parents('.navbar-inner').css('overflow', 'visible')
                $('#searchbar-autocomplete').find('.searchbar-input-wrap').css('overflow', 'visible')
              }
              console.log('searchbar enabled')
              self.initAutoComp()
            }, 400)
          },
          disable () {
            if (app.theme === 'ios') {
              $('#searchbar-autocomplete').css('overflow', '')
            } else {
              $('#searchbar-autocomplete').parents('.navbar-inner').css('overflow', '')
              $('#searchbar-autocomplete').find('.searchbar-input-wrap').css('overflow', '')
            }
            console.log('searchbar disable')
            // app.autocomplete.destroy('#searchbar-autocomplete')
            // console.log(self)
            // self.searchAutocomplete.destroy()
          }
        }
      })
      // app.searchbar.enable(self.searchbar)
    }

  },
  mounted () {
    this.$f7ready((f7) => {
      this.onPageInit()
    })
    this.$nextTick(() => {
      // this.onPageBeforeRemove()
      // this.onPageInit()
      // this.onPageInit()
    })
  }
}
</script>
<style>
  .app-logo img {
    width: 160px;
    padding-top: 22px;
  }

  /* .demo-fab-fullscreen-sheet {
    left: 15px;
    right: 15px;
    top: calc(15px + var(--f7-safe-area-top));
  } */
</style>
