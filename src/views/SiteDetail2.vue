<template>
  <v-container>
    <h2>自主制作：架空のコーポレートサイト(Vue.js)</h2>

    <img
      alt="架空企業のポートフォリオサイト"
      src="./img/work2.jpg"
      class="siteworkimg"
    />

    <div class="workdetailarea">
      <p>
        架空の建設会社「ヨシザワ建設株式会社」のコーポレートサイトを
        <strong>Vue.js</strong>で制作しました。
      </p>

      <h3>サイト名</h3>
      <p>架空の建設会社「ヨシザワ建設株式会社」コーポレートサイト</p>

      <h3>URL</h3>
      <p>
        <a href="https://www.portfolio-ym.site/site2/"
        target="_blank"
        rel="noopener noreferrer"
          >https://www.portfolio-ym.site/site2/</a
        >
      </p>

      <h3>GitHub</h3>
      <a
        href="https://github.com/ym0331/corporate-site2-main"
        target="_blank"
        rel="noopener noreferrer"
        >https://github.com/ym0331/corporate-site2-main</a
      >
    </div>

    <h2>制作の過程</h2>

    <h3>担当範囲</h3>
    <ul>
      <li>コンセプト</li>
      <li>デザイン</li>
      <li>環境構築</li>
      <li>コーディング</li>
    </ul>

    <h3>スキル</h3>
    <ul>
      <li>Vue.js</li>
      <li>WordPress</li>
      <li>PHP</li>
    </ul>

    <h2>コンセプト</h2>
    <p>
      住宅の施工、リフォームを請け負う<b>架空企業「ヨシザワ建設株式会社」のコーポレートサイト</b>です。
    </p>
    <h3>ターゲット</h3>
    <p>住宅の購入を考えている30代以降、家族のいる方</p>

    <h3>コンバージョン</h3>
    <p>資料請求・契約の問い合わせ</p>

    <h3>デザインコンセプト、主要カラー</h3>
    <p>本サイトでは商品として「家」を取り扱います。</p>
    <p>「家」は人生の中で一番大きな買い物のため、<b>誠実さをアピール</b>しています。</p>
    <p>ベースカラーは「白」、サブカラーは「青」にしました。</p>

    <h2>ポイント</h2>
    <p>商業用のコーポレートサイトを意識して、以下の機能を実装しています。</p>

    <h3>Vue.jsでサイトを実装</h3>
    <v-row class="workdetailarea">
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <img src="./img/vue.jpg" alt="Vue.js" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <p>本サイトは<b>Vue.js</b>を利用してサイト構築をしています。</p>
      </v-col>
    </v-row>

    <h3>WordPressと連携</h3>
    <v-row class="workdetailarea">
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <img src="#" alt="サイト制作のコンセプト画像" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <p>
      実際のコーポレートサイトを想定して、<b>お客様が頻繁に更新するページはWordPressを組み込みました</b>。
    </p>
    <p>
      <b>WordPressの記事を更新すると、サイト内の「事業事例」が自動的に更新されます。</b>
    </p>
    <p>
      また、WordPressの実際の利用を意識して、<b>ユーザーごとのアカウント権限を設定</b>しています。
    </p>
    <p>
      サイト制作者は管理者権限、お客様は「新着記事の更新のみ」が可能な権限を付与。
    </p>
    <p>お客様が誤ってWordPressの設定を変更しないようにしています。</p>
      </v-col>
    </v-row>



    <h3>レスポンシブ対応</h3>
    <v-row class="workdetailarea">
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <img src="./img/work2.jpg" alt="Vue.js" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <p>どの端末で見ても画面が崩れないように<b>レスポンシブ対応</b>をしています。</p>
      </v-col>
    </v-row>

    <h3>アニメーション</h3>
    <div class="workdetailarea">
    <p>Vue.jsのコンポーネントを利用して、アニメーションを実装しています。</p>
    </div>

    <div class="text-center">
      <router-link to="/work">
        <v-btn class="ma-2" x-large color="black">一覧へ</v-btn>
      </router-link>
    </div>
  </v-container>
</template>


<style scoped>
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

.sitedesign {
  border: 1px solid rgb(192, 192, 192);
}
</style>