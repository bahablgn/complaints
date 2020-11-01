<template>
  <div id="complaints">
    <f7-card class="demo-facebook-card"  v-for="(user, index) in users" :key="user.id.value">
      <f7-card-header class="no-border">
        <div class="demo-facebook-avatar"><img :src="user.picture.thumbnail" width="34" height="34"/></div>
        <div class="demo-facebook-name">{{user.name.first}} {{user.name.last}}</div>
        <div class="demo-facebook-date">Monday at 2:15 PM</div>
      </f7-card-header>
      <f7-card-content>
        <p>What a nice photo i took yesterday!</p><img :src="'https://picsum.photos/id/' + index + '/200/100'" width="100%"/>
        <p class="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
      </f7-card-content>
      <f7-card-footer class="no-border">
        <f7-link>Like</f7-link>
        <f7-link>Comment</f7-link>
        <f7-link>Share</f7-link>
      </f7-card-footer>
    </f7-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    users: []
  }),
  methods: {
    async fetchUser () {
      const response = await fetch('https://randomuser.me/api/?results=10')
      const data = await response.json()
      console.log(data)
      this.users = data.results.map(user => ({
        ...user,
        show: false
      }))
    },
    expandCard (param) {
      console.log(param)
    }
  },
  created () {
    this.fetchUser()
  }
}
</script>

<style>

</style>
