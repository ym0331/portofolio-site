<template>
  <v-container>
    <h1>訓練課題：ロゴ・名刺デザイン(illustrator)</h1>
    <v-row class="workdetailarea">
      <v-col cols="12">
        <img
          alt="ヨシザワ建設株式会社の名刺"
          src="./img/namecard.jpg"
          class="worksimg"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <img
          alt="ヨシザワ建設株式会社のロゴマーク"
          src="./img/logomark.jpg"
          class="worksimg"
        />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <img
          alt="ヨシザワ建設株式会社のロゴタイプ"
          src="./img/logotype.jpg"
          class="worksimg"
        />
      </v-col>
      <v-col cols="12">
        <img
          alt="ヨシザワ建設株式会社ロゴ使用例"
          src="./img/logokansei.jpeg"
          class="worksimg"
        />
      </v-col>
    </v-row>

    <p>
      職業訓練課題として、架空企業のロゴマーク、ロゴタイプ、名刺を作成しました。
    </p>

    <h3>課題内容</h3>
    <ul>
      <li>
        分譲施工、リフォームを行う架空の建設会社「ヨシザワ建設株式会社」のロゴマーク、ロゴタイプ、名刺の作成する
      </li>
      <li>授業時間内(4時間)に完成させる</li>
      <li>AdobeCC illustratorを使用する</li>
    </ul>

    <h2>制作の過程</h2>

    <h3>担当範囲 ・作業時間</h3>
    <ul>
      <li>コンセプト</li>
      <li>デザイン</li>
    </ul>

    <h3>スキル</h3>
    <ul>
      <li>AdobeCC illustrator</li>
    </ul>

    <h2>学んだこと</h2>
    <h3>illustratorの使い方</h3>
    <p>授業で使い方を学んだillustratorを使用し、ロゴを作成しました。</p>
    <p>illustratorで1からデザインを作るのは初めてだったため、使い方が分からず苦戦することがありました。</p>
    <p>その場合はネットで調べるようにして作業を進めました。</p>


    <h2>コンセプト</h2>
    <v-row class="workdetailarea">
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <img
          src="./img/logoConcept.jpeg"
          class="worksimg"
          alt="ロゴのコンセプト"
        />
      </v-col>
      <v-col cols="12" sm="8" md="8" lg="8" xl="8">
        <p>
          分譲施工、リフォームを行う架空の建設会社「ヨシザワ建設株式会社」のロゴです。
        </p>

        <h3>ターゲット</h3>
        <p>分譲住宅を購入しようと考えている30代以降、家族のいる方</p>

        <h3>デザインコンセプト</h3>
        <p>
          「家」という人生に関わる大切な商品を取り扱うため、信頼を勝ち取るデザインを目指しました。
        </p>
      </v-col>
    </v-row>

    <div class="text-center">
      <router-link to="/">
        <v-btn class="ma-2" x-large color="black">一覧へ</v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<style scoped>
.worksimg {
  border: 1px solid rgb(192, 192, 192);
}

h3 {
  margin-bottom: 30px;
  font-size: 1.25rem;
  padding: 0.25em 0.5em;
  background: transparent;
  border-left: solid 5px #000;
}

p {
  margin-bottom: 20px;
}
</style>