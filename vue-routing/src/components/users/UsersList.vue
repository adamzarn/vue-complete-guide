<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Component beforeRouteEnter')
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from) {
    console.log('UsersList Component beforeRouteLeave')
    console.log(to, from)
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>