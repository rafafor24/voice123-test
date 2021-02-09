<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button @click="getActors(query)">Search🧐</button>
</template>
<script lang="ts">
import { Actor, Query } from "@/store/types";
import { Options, Vue } from "vue-class-component";
import { useStore, store } from "../store";

@Options({
  components: {},
  data() {
    return {
      loading: false,
      query: { search: "Test", page: 1 },
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
    getActors(query: Query): void {
      this.loading = true;
      store.dispatch("fetchData", query);
    },
  },
})
export default class About extends Vue {}
</script>

<style scoped>
</style>