<template>
  <div class="todo">
    <h1 class="todo__title">
      Todos
    </h1>
    <nav class="todo__nav">
      <ul class="todo__tabs">
        <li
          v-for="tab in tabs"
          :key="tab"
          :class="{ 'todo__tab--active': activeTab === tab }"
          class="todo__tab"
          @click="activeTab = tab"
        >
          {{ tab }}
        </li>
      </ul>
    </nav>
    <ul class="todo__items">
      <li
        v-for="todo in todos.filter(todo => {
          if (activeTab === 'Pending') {
            return !todo.done;
          } else if (activeTab === 'Done') {
            return todo.done;
          } else {
            return true;
          }
        })"
        :key="todo._id"
        :class="{ 'todo__item--done': todo.done }"
        class="todo__item"
      >
        <input
          v-if="!todo.done"
          :id="`todo-${todo._id}`"
          class="todo__checkbox"
          type="checkbox"
        >
        <span v-else>{{ '&nbsp;'.repeat(3) }}</span>
        <label :for="`todo-${todo._id}`">{{ todo.item }}</label>
      </li>
      <li
        v-show="activeTab === 'Pending'"
        class="todo__item"
      >
        <input
          v-model="newItem"
          class="todo__item-input"
          type="text"
          placeholder="New item..."
          @keyup.enter="addNewItem"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export default {
  data() {
    return {
      tabs: ['Pending', 'Done', 'All'],
      activeTab: 'Pending',
      todos: [],
      newItem: '',
    };
  },
  async mounted() {
    const { data: todos } = await api.get('todos');
    this.todos = todos;
  },
  methods: {
    async addNewItem() {
      if (this.newItem) {
        await api.post('todos', { item: this.newItem });
        // this.todos.push({ item: this.newItem, done: false });
        // this.newItem = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &__title {
    margin-bottom: 0;
  }

  &__tabs {
    display: flex;
    padding: 0;
    list-style-type: none;
  }

  &__tab {
    margin: 0 2rem;

    &--active {
      font-weight: bold;
    }

    &:not(.todo__tab--active) {
      cursor: pointer;
    }
  }

  &__items {
    padding: 0;
  }

  &__item {
    margin-bottom: 1rem;
    list-style-type: none;

    &--done {
      text-decoration: line-through;
    }
  }

  &__checkbox {
    margin-right: 0.8rem;
    transform: translateY(0.4rem);
    z-index: -1;
  }

  &__item-input {
    border: 0;
    margin-left: 2.5rem;
  }
}
</style>
