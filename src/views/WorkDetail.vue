<template>
  <div>
    <h1>Work</h1>

    <h2>開発・デザイン</h2>
    <v-row>
      <div style="display: flex;">
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="works">
          <router-link to="/Site2">
            <!-- <img alt="架空企業のポートフォリオサイト" src="./img/work2.jpg" /> -->
            <h3>コーポレートサイト</h3>
            <span class="skillCategory">Vue.js</span>
          </router-link>
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="works">
          <router-link to="/Site1">
            <!-- <img alt="架空企業のポートフォリオサイト" src="./img/work1.png" /> -->
            <div>
              <h3>コーポレートサイト</h3>
              <p class="categoty">HTML/CSS</p>
            </div>
          </router-link>
        </v-col>
      </div>
    </v-row>

    <h2>デザイン</h2>
    <v-row>
      <div style="display: flex;">
        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="works">
          <router-link to="/banner1">
            <!-- <img alt="架空企業のポートフォリオサイト" src="./img/banner1.jpg" /> -->
            <h3>バナー広告デザイン</h3>
            <p class="categoty">photoshop</p>
          </router-link>
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="works">
          <router-link to="/banner2">
            <!-- <img alt="架空企業のポートフォリオサイト" src="./img/banner2.jpg" /> -->
            <h3>Yahoo!ショッピング商品画像</h3>
            <p class="categoty">photoshop</p>
          </router-link>
        </v-col>

        <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="works">
          <router-link to="/Logo1">
            <!-- <img alt="架空企業のポートフォリオサイト" src="./img/logo1.jpg" /> -->
            <h3>建設会社のロゴ・名刺デザイン</h3>
            <p class="categoty">illustrator</p>
          </router-link>
        </v-col>
      </div>
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

.works {
  padding: 10px;
  overflow: hidden;
}

/* 
.works img {
  transition: 1s all;
}

.works img:hover {
  transform: scale(1.2, 1.2);
  transition: 1s all;
} */

.skillCategory {
  color: #fff;
  background-color: #2c3e50;
  padding: 0 10px;
  border-radius: 100px;
  font-size: 0.9em;
}
</style>