<template>
  <div class="search">
    <div class="search__bar">
      <img
        class="search__icon"
        src="@/assets/img/ddg.png"
      >
      <input
        v-model="searchInput"
        class="search__input"
        type="search"
        autocomplete="off"
        placeholder="Search DuckDuckGo..."
        @keyup.enter="searchDdg"
      >
      <button
        class="search__button"
        @click="searchDdg"
      >
        <i class="fas fa-search" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    searchDdg() {
      window.location.href = `https://duckduckgo.com/?q=${this.searchInput}`;
      this.searchInput = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__bar {
    display: flex;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 2px rgba(#000, 0.2);
  }

  &__input {
    flex: 1;
    padding-left: 0.5rem;
    border: none;
  }

  &__button {
    padding: 0 1.6rem;
    border: none;
    border-radius: 0 0.3rem 0.3rem 0;
    background-color: #66ad57;
    color: #fff;
    cursor: pointer;
  }
}
</style>
