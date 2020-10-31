<template>
  <div id="AppComplaint">
      <div class="demo-fab-fullscreen-sheet fab-morph-target" slot="fixed">
        <f7-block-title medium>Make a Complaint 
                    <f7-icon class='fab-close' style='float:right' f7="xmark"></f7-icon>

        </f7-block-title>

        <div class="list no-hairlines-md">
            <div class="block-header">Dropdown With Typeahead</div>
            <ul>
                <li class="item-content item-input">
                <div class="item-inner">
                    <div class="item-title item-label">Fruit</div>
                    <div class="item-input-wrap">
                    <input type="text" placeholder="Fruit" id="autocomplete-dropdown-typeahead"/>
                    </div>
                </div>
                </li>
            </ul>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'AppComplaint',    
    data() {
      return {
        fruits: 'Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple'.split(' '),
      };
    },
    methods: {
      onPageBeforeRemove() {
          console.log('aa')
        const self = this;
        // Destroy all autocompletes
        // self.autocompleteDropdownSimple.destroy();
        // self.autocompleteDropdownExpand.destroy();
        // self.autocompleteDropdownAll.destroy();
        // self.autocompleteDropdownPlaceholder.destroy();
        self.autocompleteDropdownTypeahead.destroy();
        // self.autocompleteDropdownAjax.destroy();
        // self.autocompleteDropdownAjaxTypeahead.destroy();
        // self.autocompleteStandaloneSimple.destroy();
        // self.autocompleteStandalonePopup.destroy();
        // self.autocompleteStandaloneMultiple.destroy();
        // self.autocompleteStandaloneAjax.destroy();
      },
      onPageInit() {
        const self = this;
        const app = self.$f7;
        const fruits = self.fruits;
        const $ = self.$$;

       
        // Dropdown with typeahead
        self.autocompleteDropdownTypeahead = app.autocomplete.create({
          inputEl: '#autocomplete-dropdown-typeahead',
          openIn: 'dropdown',
          dropdownPlaceholderText: 'Try to type "Pineapple"',
          typeahead: true,
          source(query, render) {
            const results = [];
            if (query.length === 0) {
              render(results);
              return;
            }
            // Find matched items
            for (let i = 0; i < fruits.length; i += 1) {
              if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) === 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
          },
        });


      },
    },
    mounted: function () {
        //this.onPageInit()
    },
    destroyed: function () {
        //this.onPageBeforeRemove()
    }
  
  };
</script>

<style>   
    .demo-fab-fullscreen-sheet {
        position: absolute;
        left: 10px;
        right: 10px;
        top: calc(var(--f7-safe-area-top));
        bottom: 0;
        background: #fff;
        z-index: 1600;
        border-radius: 5px 5px 0 0;
        box-shadow: 0px 3px 30px rgba(0,0,0,0.4);
        overflow: hidden;
    }
</style>