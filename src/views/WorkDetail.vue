<template>
  <div id="work">

    <h2>Work</h2>
    
    <v-row class="sitearea">
        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <router-link to="/Site2">
            <img alt="架空企業のポートフォリオサイト" src="./img/work2.jpg" class="worksimg">
            <h4>コーポレートサイト</h4>
            <span class="skillCategory">Vue.js</span>
          </router-link>
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="6" xl="6">
          <router-link to="/Site1">
            <img alt="架空企業のポートフォリオサイト" src="./img/work1.png" class="worksimg">
              <h4>コーポレートサイト</h4>
              <span class="skillCategory">HTML/CSS</span>
          </router-link>
        </v-col>
    </v-row>
    <v-row class="sitearea">
        <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="works">
          <router-link to="/banner1">
            <img alt="架空企業のポートフォリオサイト" src="./img/banner1.jpg"  class="bannerimg">
            <h4>バナー広告デザイン</h4>
            <span class="skillCategory">photoshop</span>
          </router-link>
        </v-col>

        <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="works">
          <router-link to="/banner2">
            <img alt="架空企業のポートフォリオサイト" src="./img/banner2.jpg"  class="bannerimg">
            <h4>Yahoo!ショッピング商品画像</h4>
            <span class="skillCategory">photoshop</span>
          </router-link>
        </v-col>

        <v-col cols="12" sm="4" md="4" lg="4" xl="4" class="works">
          <router-link to="/Logo1">
            <img alt="架空企業のポートフォリオサイト" src="./img/logo1.jpg"  class="bannerimg">
            <h4>建設会社のロゴ・名刺デザイン</h4>
            <span class="skillCategory">illustrator</span>
          </router-link>
        </v-col>
    </v-row>
  </div>

</template>


<style scoped>
/* .categoty {
  background-color: #000;
  color: #fff;
  text-align: right;
  padding: 1px;
  
} */

/* 
.works img {
  transition: 1s all;
}

.works img:hover {
  transform: scale(1.2, 1.2);
  transition: 1s all;
} */

.worksimg {
  width: 100%;
}

.sitearea {
  margin-bottom: 30px;
}

.bannerimg {
  width: 100%;
  border: 1px solid rgb(192, 192, 192);
}

.skillCategory {
  color: #fff;
  background-color: #2c3e50;
  padding: 0 10px;
  border-radius: 100px;
  font-size: 0.9em;
}

#work {
  padding-top: 64px;
  margin-top: -64px;
  margin-bottom: 40px;
}

</style>