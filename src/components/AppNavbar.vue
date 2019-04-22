<template>
  <nav class="nav">
    <span class="nav__home">127.0.0.1</span>
    <span
      v-for="button in buttons"
      :key="button.name"
      class="nav__button"
      role="button"
    >
      {{ button.name }}
      <i class="fas fa-angle-down nav__icon" />
      <div class="nav__dropdown">
        <a
          v-for="link in button.links"
          :key="link.name"
          :href="link.url"
          class="nav__link"
          target="_blank"
          rel="noopener"
        >{{ link.name }}</a>
      </div>
    </span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        {
          name: 'Awesome',
          links: [
            {
              url: 'https://github.com/awesome-css-group/awesome-css',
              name: 'Awesome CSS',
            },
            {
              url: 'https://github.com/sorrycc/awesome-javascript',
              name: 'Awesome JavaScript',
            },
            {
              url: 'https://github.com/vuejs/awesome-vue',
              name: 'Awesome Vue',
            },
          ],
        },
        {
          name: 'Weekly',
          links: [
            { url: 'https://css-weekly.com/archives/', name: 'CSS Weekly' },
            { url: 'https://javascriptweekly.com/', name: 'JavaScript Weekly' },
          ],
        },
        {
          name: 'Documentation',
          links: [
            {
              url: 'https://webpack.js.org/guides',
              name: 'Webpack',
            },
            {
              url: 'https://vuejs.org/v2/guide/',
              name: 'Vue.js',
            },
            {
              url: 'https://nuxtjs.org/guide',
              name: 'Nuxt.js',
            },
            {
              url: 'https://expressjs.com/en/4x/api.html',
              name: 'Express',
            },
            {
              url: 'https://docs.mongodb.com/manual/',
              name: 'MongoDB',
            },
            {
              url: 'https://mongoosejs.com/docs/',
              name: 'Mongoose',
            },
          ],
        },
        {
          name: 'Resources',
          links: [
            {
              url: 'https://frontendmasters.com/books/front-end-handbook/2019/',
              name: 'Front-end Developer Handbook',
            },
            {
              url: 'https://fontawesome.com/icons?d=gallery',
              name: 'Font Awesome',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  height: 2.8rem;
  background: #000;

  &__home {
    margin: 0 1rem;
    color: #fff;
    font-size: 2rem;
  }

  &__button,
  &__link {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  &__button {
    position: relative;
    margin: 0 1rem;

    &:hover {
      .nav__dropdown {
        display: flex;
      }
    }
  }

  &__icon {
    margin-left: 0.4rem;
    vertical-align: -0.23em;
  }

  &__dropdown {
    position: absolute;
    display: none;
    flex-direction: column;
    width: 18rem;
    background-color: #000;
  }

  &__link {
    margin: 1rem;
  }
}
</style>
