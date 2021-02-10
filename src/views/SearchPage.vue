<template>
  <div class="search">
    <h1>Voice123 Test</h1>
  </div>
  <div class="form-group">
    <h2 for="usr">Search by keyword:</h2>
    <textarea
      v-model="searchText"
      placeholder="Keyword Ex. Colors"
      type="text"
      class="form-control"
      id="usr"
      @keyup.enter="getActors"
    />
    <button type="button" class="btn btn-primary" @click="getActors()">
      Search🧐
    </button>
    <h1 v-if="actorsLoaded">Results for search '{{ lastSearch }}':</h1>
  </div>
  <ActorsList v-if="actors.length > 0" :actors="actors"></ActorsList>
  <img
    v-if="!actorsLoaded && loading"
    class="logo-company"
    src="@/assets/loading.gif"
  />
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-primary"
      :disabled="page == 1"
      v-if="actorsLoaded"
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
      v-if="actorsLoaded"
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
export default class SearchPage extends Vue {}
</script>

<style scoped>
.logo-company {
  width: 100px;
  height: 100px;
}

button {
  padding: 10px 20px;
  margin: 15px;
  background-color: #1e88e5;
  color: #010101;
  font-weight: bold;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 1px 2px 12px 0px rgba(89, 87, 87, 0.85);
}
button:hover {
  transform: scale(1.1, 1.1);
  background-color: #81b7e7;
}
h2:hover {
  color: black;
}
textarea {
  border-radius: 5px;
  font-size: 25px;
  max-width: 50%;
  margin: auto;
  width: 50%;
  border: 2px solid #1e88e5;
  padding: 10px;
}
</style>