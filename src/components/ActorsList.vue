<template>
  <div class="center">
    <div v-for="actor in actors" :key="actor.id" class="property-card">
      <a :href="'https://voice123.com/' + actor.id" target="_blank">
        <div
          class="property-image"
          v-bind:style="{
            backgroundImage:
              'url(' +
              (actor.imageURL
                ? actor.imageURL
                : 'https://www.exoffender.org/wp-content/uploads/2016/09/empty-profile.png') +
              ')',
          }"
        >
          <div class="property-image-title">
            <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. -->
          </div>
        </div></a
      >
      <div class="property-description">
        <h5>{{ actor.name }}</h5>
        <p>
          {{ actor.stringify.slice(0, 20) }}
          <strong>{{ actor.stringify.slice(20, 20 + actor.size) }}</strong>
          {{ actor.stringify.slice(20 + actor.size) }}
        </p>
      </div>
      <a href="#">
        <div class="property-social-icons">
          <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions -->
        </div>
      </a>
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
h5 {
  margin: 0px;
  font-size: 1.4em;
  font-weight: 700;
}

p {
  font-size: 12px;
}

.center {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

/* End Non-Essential  */

.property-card {
  height: 18em;
  width: 22em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: grid;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  overflow: hidden;
  -webkit-box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
}
/* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

/* Top Half of card, image. */

.property-image {
  height: 12em;
  width: 22em;
  padding: 1em 2em;
  position: Absolute;
  top: 0px;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-size: cover;
  background-repeat: no-repeat;
}

/* Bottom Card Section */

.property-description {
  background-color: #fafafc;
  height: 6em;
  width: 22em;
  position: absolute;
  bottom: 0em;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align: center;
}

p {
  font-size: 20px;
}

/* Social Icons */

.property-social-icons {
  width: 1em;
  height: 1em;
  background-color: black;
  position: absolute;
  bottom: 1em;
  left: 1em;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* Property Cards Hover States */

.property-card:hover .property-description {
  height: 0em;
  padding: 0px 1em;
}
.property-card:hover .property-image {
  height: 18em;
}

.property-card:hover .property-social-icons {
  background-color: white;
}

.property-card:hover .property-social-icons:hover {
  background-color: blue;
  cursor: pointer;
}
</style>
