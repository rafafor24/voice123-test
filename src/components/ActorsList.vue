<template>
  <div v-for="actor in actors" :key="actor.id" class="item">
    <img
      class="logo-company"
      v-bind:src="
        actor.imageURL
          ? actor.imageURL
          : 'https://www.exoffender.org/wp-content/uploads/2016/09/empty-profile.png'
      "
    />
    <div class="actor_details">
      <h2>
        {{ actor.name + " - " + actor.id }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    actors: [],
  },
})
export default class ActorsList extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  padding: 20px;
  margin: 10px;
  background-color: #383b40;
  border-radius: 5px;
  border: 1px solid #cddc39;
  box-sizing: border-box;
}
.item__user {
  font-weight: bold;
}
h2 {
  color: #dfe3e8;
}
img {
  width: 100px;
  height: 100px;
}
</style>
