<template>
  <div class="about">
    <h1>Voice123 Test</h1>
  </div>
  <div class="form-group">
    <label for="usr">Search:</label>
    <input
      v-model="searchText"
      placeholder="Term"
      type="text"
      class="form-control"
      id="usr"
    />
    <button type="button" class="btn btn-primary" @click="getActors()">
      Search🧐
    </button>
    <h1 v-if="actorsLoaded">Results for search '{{ lastSearch }}':</h1>
  </div>
  <ActorsList v-if="actors.length > 0" :actors="actors"></ActorsList>
  <h1 v-else>ELSE</h1>
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-primary"
      :disabled="page == 1"
      @click="getActors(page - 1)"
    >
      Previous
    </button>
    <button
      v-for="index in parseInt(pages)"
      :key="index"
      type="button"
      class="btn btn-primary"
      :disabled="index == page"
      @click="getActors(index)"
    >
      {{ index }}
    </button>
    <button
      type="button"
      class="btn btn-primary"
      :disabled="page == pages"
      @click="getActors(page + 1)"
    >
      Next
    </button>
  </div>
</template>
<script lang="ts">
import { Actor, Query } from "@/store/types";
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";
import ActorsList from "@/components/ActorsList.vue"; // @ is an alias to /src

@Options({
  components: {
    ActorsList,
  },
  data() {
    return {
      searchText: "",
      lastSearch: "",
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
    pages: {
      get(): number {
        const store = useStore();
        return store.state.pages;
      },
    },
  },
  methods: {
    getActors(page?: number): void {
      if (this.searchText != "") {
        const q: Query = { search: this.searchText, page: this.page };
        this.loading = true;
        store.dispatch("fetchData", q);
        this.lastSearch = this.searchText;
        this.searchText = "";
      } else if (this.lastSearch) {
        this.page = page;
        const q: Query = { search: this.lastSearch, page: page ? page : 0 };
        this.loading = true;
        store.dispatch("fetchData", q);
      }
    },
  },
})
export default class About extends Vue {}
</script>

<style scoped>
</style>