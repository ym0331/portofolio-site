<template>
  <div id="home">
  <MainVisual />
  <v-container>
    <WorkDetail />
    <AboutView />
    <SkillDetail />
    <!-- <ContactArea /> -->
  </v-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SkillDetail from "../views/SkillDetail.vue";
import WorkDetail from "../views/WorkDetail.vue";
import AboutView from "../views/AboutView.vue";
// import ContactArea from "../views/ContactArea.vue";
import MainVisual from "../views/MainVisual.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    SkillDetail,
    WorkDetail,
    AboutView,
    // ContactArea,
    MainVisual
  }
});
</script>

<style>
/* main {
  width: 80%;
  margin: 0 auto;
} */
</style>
