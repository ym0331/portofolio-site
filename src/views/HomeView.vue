<template>
<v-container>
  <WorkDetail />
  <SkillDetail />
    <AboutView />
</v-container>
</template>

<script>
import { defineComponent } from 'vue';
import SkillDetail from '../views/SkillDetail.vue'
import WorkDetail from  '../views/WorkDetail.vue'
import AboutView from '../views/AboutView.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    SkillDetail,
    WorkDetail,
    AboutView
  },
});
</script>

<style>
/* main {
  width: 80%;
  margin: 0 auto;
} */
</style>
