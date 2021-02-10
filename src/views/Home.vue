<template>
  <div class="center">
    <h2
      id="second-headin-live-demo-https-voice123-test-herokuapp-com-front-end-app-"
    >
      <a href="https://voice123-test.herokuapp.com" title="Front-end-app"
        >LIVE DEMO</a
      >
    </h2>
    <h1 id="dev-log-rafael-forero">Dev Log Rafael Forero</h1>
    <h1 id="application-setup-guide">Application setup guide</h1>
    <pre><code>npm <span class="hljs-keyword">install</span>
</code></pre>
    <h3 id="compiles-and-hot-reloads-for-development">
      Compiles and hot-reloads for development
    </h3>
    <pre><code>npm <span class="hljs-keyword">run</span><span class="bash"> serve</span>
</code></pre>
    <h3 id="compiles-and-minifies-for-production">
      Compiles and minifies for production
    </h3>
    <pre><code>npm <span class="hljs-keyword">run</span><span class="bash"> build</span>
</code></pre>
    <h1 id="why-vue-js-for-the-front-end-">Why vue.js for the front-end?</h1>
    <p>
      I decided to use vue.js for this project in order to challenge myself,
      this was the second time I used it. I have experience using React and
      Angular but for a while now I was willing to try something new and my
      friends and colleagues recommended vue.js and it is becoming popular, so I
      said: &quot;Why not?&quot;
    </p>
    <h1 id="code-worklog">Code WorkLog</h1>
    <ul>
      <li>
        3pm: I read the test and started with the repository and the
        initialization with a Vue.js skeleton.
      </li>
      <li>
        5-6pm Update the text area function so it triggers the search on enter,
        loading animation for the search and refactor routes.
      </li>
      <li>
        8-10pm Material Cards with css for the CardsList and not refined
        algorithm for searching and highlighting result in paragraph.
      </li>
      <li>10pm-11pm</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.center {
  margin-right: 350px;
  margin-left: 350px;
}
</style>
