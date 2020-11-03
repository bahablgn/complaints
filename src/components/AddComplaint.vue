<template>
  <div id="AppComplaint">
      <!-- FAB Backdrop -->
    <div class="fab-backdrop"></div>
        <!-- FAB will morph to toolbar -->
    <f7-fab position="right-bottom" morph-to=".demo-fab-fullscreen-sheet.fab-morph-target">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
    </f7-fab>

    <div class="demo-fab-fullscreen-sheet fab-morph-target" slot="fixed">
      <f7-block-title medium>Make a Complaint
        <f7-icon class='fab-close' style='float:right' f7="xmark"></f7-icon>
      </f7-block-title>

      <!-- <f7-block-title>file a complaint against a business</f7-block-title> -->

      <f7-list no-hairlines-md>
        <li class="item-content item-input">
          <div class="item-inner">
              <div class="item-title item-label">Please type service provider, business or merchant:</div>
              <div class="item-input-wrap">
              <input
                type="text"
                autocomplete="off"
                placeholder="XYZ Company"
                maxlength="70"
                required
                id="autocomplete-dropdown-typeahead"
                :value="complaintForm.company"
                @input="complaintForm.company = $event.target.value"
              />
              </div>
          </div>
        </li>
        <f7-list-input
          type="textarea"
          autocomplete="false"
          label="Complaint title"
          placeholder="Bio"
          resizable
          maxlength="70"
          required
          clear-button
          :value="complaintForm.title"
          @input="complaintForm.title = $event.target.value"
          :info="charLeftTitle"
        ></f7-list-input>
        <f7-list-input
          label="Tell us about your complaint"
          type="textarea"
          maxlength="2500"
          :value="complaintForm.detail"
          @input="complaintForm.detail = $event.target.value"
          placeholder="For Ex: On (date), I (bought, leased, rented, had repaired, etc…) a (name of the product with serial or model number or service performed) at (location).

Unfortunately, your product has not performed well (or the service was inadequate). I am disappointed because (explain the problem: for example, the product does not work properly, the service was not performed correctly, I was billed the wrong amount, something was not disclosed clearly or was misrepresented at the time of sale, etc.)."
          clear-button
          required
          :info="charLeftDetail"
        >
        </f7-list-input>
      </f7-list>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AppComplaint',
  data () {
    return {
      complaintForm: {
        company: '',
        title: '',
        detail: ''
      },
      fruits: 'Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple'.split(' ')
    }
  },
  computed: {
    charLeftTitle () {
      const char = this.complaintForm.title.length
      const limit = 70
      return (limit - char) + ' remaining'
    },
    charLeftDetail () {
      const char = this.complaintForm.detail.length
      const limit = 2500
      return (limit - char) + ' remaining'
    }
  },
  methods: {
    onPageBeforeRemove () {
      console.log('before remove')
      const self = this
      // Destroy all autocompletes
      // self.autocompleteDropdownSimple.destroy();
      // self.autocompleteDropdownExpand.destroy();
      // self.autocompleteDropdownAll.destroy();
      // self.autocompleteDropdownPlaceholder.destroy();
      self.autocompleteDropdownTypeahead.destroy()
      // self.autocompleteDropdownAjax.destroy();
      // self.autocompleteDropdownAjaxTypeahead.destroy();
      // self.autocompleteStandaloneSimple.destroy();
      // self.autocompleteStandalonePopup.destroy();
      // self.autocompleteStandaloneMultiple.destroy();
      // self.autocompleteStandaloneAjax.destroy();
    },
    onPageInit () {
      console.log('pageinit')
      const self = this
      const app = self.$f7
      const fruits = self.fruits
      // const $ = self.$$

      // Dropdown with typeahead
      self.autocompleteDropdownTypeahead = app.autocomplete.create({
        inputEl: '#autocomplete-dropdown-typeahead',
        openIn: 'dropdown',
        // dropdownPlaceholderText: 'Please type service provider, business or merchant',
        typeahead: true,
        source (query, render) {
          const results = []
          if (query.length === 0) {
            render(results)
            return
          }
          // Find matched items
          for (let i = 0; i < fruits.length; i += 1) {
            if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) === 0) results.push(fruits[i])
          }
          // Render items by passing array with result items
          render(results)
        }
      })
      app.autocomplete.open(self.autocompleteDropdownTypeahead)
    }
  },
  mounted: function () {
    this.$f7ready((f7) => {
      this.onPageInit()
    })
  },
  destroyed: function () {
    // this.onPageBeforeRemove()
  }

}
</script>

<style>
  .demo-fab-fullscreen-sheet {
    left: 10px;
    right: 10px;
    top: calc(35px + var(--f7-safe-area-top));
  }
  .fab-backdrop {
    background: rgb(0 0 0 / 19%);
  }
  .item-input-info, .input-info {
      text-align: right;
  }
</style>
