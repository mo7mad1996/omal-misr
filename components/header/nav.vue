<template>
  <nav>
    <ul>
      <li v-for="(link, n) in links" :key="'n' + n" class="text-center">
        <nuxt-link :to="link.to">
          {{ link.title }}
        </nuxt-link>

        <!-- nested Link -->
        <ul v-if="link.sub">
          <li v-for="(subLink, m) in link.sub" :key="'m' + m">
            <nuxt-link :to="subLink.to">
              {{ subLink.title }}
            </nuxt-link>

            <!-- sub nested Link -->
            <ul v-if="subLink.sub">
              <li v-for="(nestedSubLink, o) in subLink.sub" :key="'o' + o">
                <nuxt-link :to="nestedSubLink.to">
                  {{ nestedSubLink.title }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["lang", "en", "ar"],
  computed: {
    links: function() {
      return this.$store.getters["sitedata/" + this.lang].header.nav;
    }
  }
};
</script>

<style lang="scss" scoped>
nav > ul {
  display: flex;
  gap: 10px;
  background: #000000;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 1.3em;
  justify-content: stretch;

  > li {
    color: white;
    display: flex;
    flex: 1;
    white-space: nowrap;
    position: relative;

    a {
      width: 100%;
      height: 100%;
      display: block;
    }

    > a {
      background: #cd2021;
      text-align: center;
      padding: 5px 10px;
      flex: 1;
    }

    > ul {
      display: none;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }

    ul {
      border: 2px solid black;
      padding: 0;
    }

    &:hover > ul {
      display: block;
      z-index: 3;
      color: black;

      li {
        background: #e7e7e7;
        min-width: 150px;
        box-shadow: inset 0 -4px 5px #3337;
      }

      > li {
        position: relative;

        a {
          padding: 5px 10px;
        }

        > ul {
          display: none;
        }

        &:hover > ul {
          position: absolute;
          display: block;
          right: 100%;
          top: 0;
        }
      }
    }
  }
}
</style>
