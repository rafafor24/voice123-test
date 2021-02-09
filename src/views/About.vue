<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <textarea
    placeholder="Term"
    name="searchbar"
    rows="1"
    cols="25"
    v-model="searchText"
  ></textarea>
  <button @click="getActors()">Search🧐</button>
</template>
<script lang="ts">
import { Actor, Query } from "@/store/types";
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";

@Options({
  components: {},
  data() {
    return {
      searchText: "",
      loading: false,
      page: 1,
    };
  },
  computed: {
    actors: {
      get(): Actor[] {
        const store = useStore();
        return store.state.actors;
      },
    },
    actorsLoaded: {
      get(): boolean {
        const store = useStore();
        return store.state.loaded;
      },
    },
  },
  methods: {
    getActors(): void {
      if (this.searchText != "") {
        const q: Query = { search: this.searchText, page: this.page };
        this.loading = true;
        store.dispatch("fetchData", q);
        this.searchText = "";
      }
    },
  },
})
export default class About extends Vue {}
</script>

<style scoped>
</style>