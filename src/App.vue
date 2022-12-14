<template>
  <v-app>
    <HedderMenu />
    <v-main>
    <router-view />
    </v-main>
    <FotterMenu />
  </v-app>
</template>

<script>
// import 'normalize.css'
import HedderMenu from "./views/HedderMenu.vue";
import FotterMenu from "./views/FotterMenu.vue";

export default {
  name: "App",
  components: {
    HedderMenu,
    FotterMenu
  }
};
</script>
<style>
h2 {
  margin-bottom: 30px;
  font-size: 1.75em;
  text-align: center;
}

p {
  margin-bottom: 15px;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  color: #c7c7c7;
}

img {
  width: 100%;

}

main {
  padding-top: 64px;
  margin-bottom: 30px;
}

/* work */
.siteworkimg {
  margin-bottom: 30px;
}

.workdetailarea {
  margin-bottom: 50px;
}

ul, ol {
  padding: 0.5em 0.5em 0.5em 2em;/*ボックス内の余白*/
  margin-bottom: 30px;
}

ul li, ol li {
  line-height: 1.5; /*文の行高*/
  padding: 0.5em 0; /*前後の文との余白*/
}
</style>