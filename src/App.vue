<template>
  <nav>
    <div class="navigation__about">
      <router-link class="content" to="/">HOME </router-link>
    </div>
    <div class="navigation__compare">
      <router-link class="content" to="/search">
        SEARCH VOICE ACTORS
      </router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 5%;
  background-color: white;
  color: #f2f3f4;
  border-radius: 3px;
  border: 2px solid gray;
}
nav .navigation__about {
  font-weight: bold;
  font-size: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
nav .navigation__about:hover {
  transform: scale(1.1, 1.1);
  color: #1e88e5;
}
nav .navigation__about .content {
  border-bottom: 8px solid #1e88e5;
}
nav .navigation__compare {
  font-weight: bold;
  font-size: 20px;
}
nav .navigation__compare:hover {
  transform: scale(1.1, 1.1);
  color: #1e88e5;
}
nav .navigation__compare .content {
  border-bottom: 6px solid #1e88e5;
}
nav .navigation__name {
  font-weight: bold;
  font-size: 24px;
}
nav .navigation__name .content {
  border-bottom: 6px solid #f2f3f4;
}
</style>
