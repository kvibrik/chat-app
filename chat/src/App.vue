<template>
  <div id="app">
    <Notifier />
    <router-view />
  </div>
</template>

<script>
import Notifier from '@/components/Notification.vue';

export default {
  name: 'App',
  components: { Notifier },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
