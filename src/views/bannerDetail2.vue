<template>
  <v-container class="workdetail">
    <h1>訓練課題:Yahoo!ショッピング商品画像</h1>

    <v-row class="siteworkimg">
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <img alt="おいしい新鮮卵の商品画像" src="./img/product.png" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <img alt="おいしい新鮮卵通販のLINE用広告" src="./img/yahookeisai.jpg" />
      </v-col>
    </v-row>

    <p>
      訓練課題として、Yahooショッピングに掲載する架空の商品画像を制作しました。
    </p>
    <p>また、掲載文の作成、デザインコンセプトのプレゼンも行いました。</p>

    <h3>課題内容</h3>
    <ul>
      <li>Yahoo!ショッピングに掲載する架空の商品画像を制作する</li>
      <li>サイズは500×500</li>
      <li>商品画像のコンセプトを授業内にプレゼンする</li>
    </ul>

    <h2>制作の過程</h2>

    <h3>担当範囲</h3>
    <ul>
      <li>コンセプト(30分)</li>
      <li>デザイン(1時間)</li>
      <li>掲載文の作成(30分)</li>
      <li>プレゼン(5分)</li>
    </ul>

    <h3>スキル</h3>
    <ul>
      <li>AdobeCC Photoshop</li>
    </ul>

    <h2>学んだこと</h2>
    <h3>プレゼン能力</h3>
    <p>
      <b
        >今回の課題では自分で作成したバナーのコンセプトのプレゼンを授業内に行いました。</b
      >
    </p>
    <p>制限時間は5分。</p>
    <p>決められた時間内で要点を絞ってプレゼンするこを意識しました。</p>

    <h2>コンセプト</h2>
    <p>養鶏場から直送される高級卵の商品画像です。</p>

    <h3>ターゲット</h3>
    <p>オーガニックな食材が好きな20~30代の女性</p>

    <h3>コンバージョン</h3>
    <p>Yahoo!ショッピングで商品を購入してもらう。</p>

    <h3>デザインコンセプト</h3>
    <p>ターゲットを意識して、<b>ナチュラルでシンプルなデザイン</b>を意識しています。</p>

    <p>
      また、<b>送料に敏感なユーザーに向けて「送料無料」を大きくわかりやすく表示</b>するようにしています。
    </p>

    <div class="text-center">
      <router-link to="/">
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