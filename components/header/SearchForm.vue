<template>
  <div class="form">
    <v-row class="links px-2">
      <v-col class="px-0">
        <v-tooltip bottom color="black">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              dark
              fab
              color="#f4a762"
              class="mx-1"
              v-bind="attrs"
              v-on="on"
              @click="toggleLang"
            >
              <v-icon>mdi-google-translate</v-icon>
            </v-btn>
          </template>
          <span>
            عربي - English
          </span>
        </v-tooltip>
      </v-col>
      <v-col v-for="link in newLinks" :key="link.icon" class="px-0">
        <v-tooltip bottom color="black">
          <template v-slot:activator="{ on, attrs }">
            <a :href="link.to" target="_blank">
              <v-btn
                small
                dark
                fab
                class="mx-1"
                v-bind="attrs"
                :color="link.color"
                v-on="on"
              >
                <v-icon>mdi-{{ link.icon }}</v-icon>
              </v-btn>
            </a>
          </template>
          <span v-text="link.title" />
        </v-tooltip>
      </v-col>
    </v-row>
    <form>
      <input
        class="form-input white pa-1 "
        :placeholder="lang == 'ar' ? 'البحث' : 'Search'"
      />
      <v-btn class="red accent-4 " type="submit" icon tile>
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>
    </form>
  </div>
</template>

<script>
// vuex
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["lang"],

  data() {
    return {
      links: [
        {
          to: "https://twitter.com",
          color: "#03aaf3",
          icon: "twitter"
        },
        {
          to: "https://facebook.com",
          color: "#355096",
          icon: "facebook"
        },
        {
          to: "https://youtube.com",
          color: "#f9332e",
          icon: "youtube"
        },
        {
          to: "https://instagram.com",
          color: "#366b99",
          icon: "instagram"
        },
        {
          to: "https://www.facebook.com/facebook-wifi",
          color: "#febd04",
          icon: "wifi"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("sitedata", ["ar", "en"]),
    newLinks() {
      let x = this.links;
      x.forEach((el, n) => {
        el.title = this[this.lang].header.form[n];
      });
      return x;
    }
  },
  methods: mapActions("settings", ["toggleLang"])
};
</script>

<style lang="scss">
.form {
  position: absolute;
  right: 10vw;
  padding: 2px;
  background: black;
  border-bottom: 2px solid #296983;

  display: flex;
  align-items: center;
  gap: 0.5em;

  form {
    display: flex;

    .form-input {
      font-family: "Almarai", sans-serif;

      &::placeholder {
        color: #c1c1c1;
      }
    }
  }
}
</style>
