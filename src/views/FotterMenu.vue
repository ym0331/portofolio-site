<template>
  <footer>
    <div class="contactareaback">
      <div  class="contactarea">
        <h2>Contact</h2>
    <p>お問い合わせはメールからお願いいたします。</p>
    <p>mio.y.0331@gmail.com</p>
      </div>
    </div>
    <!-- <div class="contactareaback">
      <v-container>
        <v-row class="contactarea">
          <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="tellarea">
            <h2>
              <p class="is-big">Contact</p>
              <p class="is-small">お問い合せ</p>
            </h2>
            <p>
              ご相談・ご質問等ございましたら、
              <br />お気軽にお問い合わせください。
            </p>
          </v-col>

          <div class="d-sm-none hr">
            <hr />
          </div>

          <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="tellarea">
            <p class="tell">0120-1234-5678</p>
            <p class="time">平日:9時〜17時30分</p>
            <router-link to="/contact">
              <button>お問い合わせ</button>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div> -->

    <div>
      <v-container>
        <v-row>
<!-- 
          <v-col>
            <v-tab href="/business">事業内容</v-tab>
            <v-tab href="/works">施工事例</v-tab>
            <v-tab href="/company">会社情報</v-tab>
            <v-tab href="/contact">お問い合わせ</v-tab>
          </v-col> -->

          <v-col cols="12" class="copyright">
            <small>2022 &copy; MIO YOSHIZAWA. All Rights Reserved.</small>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FotterMenu"
};
</script>

<style scoped>
.hr {
  width: 100%;
}

hr {
  border-top: 1px solid #e3e3e3;
  overflow: visible;
  text-align: center;
}

.time {
  margin-bottom: 5px;
}

small {
  padding-bottom: 16px;
}

.copyright {
  text-align: center;
}

.tellarea {
  text-align: center;
}

.tell {
  font-size: 1.75em;
}

button {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: 1rem 3rem;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 0.1em;
  border-radius: 0.5rem;
  border-radius: 10px;
  background-color: #143265;
  color: #fff;
  box-shadow: 0 5px 0 rgba(161, 158, 139, 0.3);
  transition: 0.3s;
  box-sizing: border-box;
  border: none;
}

button:hover {
  box-shadow: none;
  transform: translate3d(0, 5px, 0);
}

.contactarea {
  /* background-color: #fff; */
  position: relative;
  margin: auto;
  padding: 10px;
  text-align: center;
}

.contactareaback {
  background-color: #f3f3f3;
  display: flex;
  padding: 60px 0;
  
}

.text {
  margin: 0 20px;
  text-align: justify;
}
</style>