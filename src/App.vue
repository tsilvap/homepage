<template>
  <div class="app">
    <app-navbar class="app__navbar" />

    <app-search class="app__search" />

    <todo-list class="app__todo-list" />
    <!-- <div class="app__shards">
      <hacker-news-shard class="app__shard"></hacker-news-shard>
      <css-weekly-shard class="app__shard"></css-weekly-shard>
    </div>-->
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import AppSearch from '@/components/AppSearch.vue';
import TodoList from '@/components/TodoList.vue';
// import HackerNewsShard from '@/components/shards/HackerNewsShard.vue';
// import CssWeeklyShard from '@/components/shards/CssWeeklyShard.vue';

export default {
  components: {
    AppNavbar,
    AppSearch,
    TodoList,
    // HackerNewsShard,
    // CssWeeklyShard,
  },
};
</script>

<style>
html {
  font-size: 62.5%; /* 10/16 */
}

body {
  font-size: 1.6rem;
  font-family: 'Inconsolata', monospace;
}
</style>


<style lang="scss" scoped>
.app {
  &__navbar {
    margin-bottom: 2rem;
  }

  &__search {
    margin: 0 auto;
    width: 50rem;
  }

  &__shards {
    display: flex;
  }

  &__shard {
    width: 30%;
    margin: 0 1rem;
  }
}
</style>
