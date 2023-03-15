<template>
  <div id="about">
    <h2>About</h2>

    <v-row>
      <v-col cols="12" md="4" lg="4" xl="4">
        <img alt="プロフィール画像" src="./img/about.jpg" class="profileimg" />
        
      </v-col>
      <v-col cols="12" md="8" lg="8" xl="8">
        <h3>Profile</h3>
        <p><b>Webコーダー</b>を希望しています。</p>
        <p>システムエンジニアとして5年程度勤務。</p>
        <p>退職後は職業訓練校の「Webデザイナー&Webディレクター養成コース」に通いました。</p>
        <p>現在は<b>Vue.jsを自習</b>しています。</p>
        <h3>資格</h3>
        <p>2017.5 基本情報技術者試験</p>
        <p>2021.5 3級ファイナンシャル・プランニング技能検定</p>
        <p>2022.7 Googleアナリティクス個人認定資格</p>
        <h3>リンク</h3>
        <a href="https://github.com/ym0331" target="_blank" rel="noopener noreferrer"><v-icon>mdi-github</v-icon>@ym0331</a>
      </v-col>
    </v-row>
    <!-- <h3>経歴</h3>
    <h4>1社目:客先常駐のシステムエンジニア</h4>
    <p>
      新卒から3年間システム開発会社にて勤務。
      <br />
      <strong>システムエンジニア</strong>として印刷会社や公益財団法人の社内向けシステムのプログラムの
      <strong>開発、テスト</strong>を担当しました。
    </p>
    <h4>2社目:客先常駐のシステムエンジニア</h4>
    <p>
      4年目に顧客対応のスキルを磨くため、別のシステム開発会社に転職。
      <br />公共機関向けシステム開発の
      <strong>顧客対応</strong>やプログラムの開発やテストを担当しました。
    </p>

    <h4>現在:職業訓練校</h4>
    <p>
      職業訓練校にて、フロントエンジニアを目指し、HTMLやCSSを学んでます。
      <br />また、Vue.jsを自己学習しています。
    </p> -->
  </div>
</template>

<style scoped>
#about {
  padding-top: 64px;
  margin-top: -64px;
  margin-bottom: 40px;
}

.textarea {
  position: relative;
  margin: auto;
  padding: 0 10% 0;
  text-align: center;
}

.abouttxt {
  margin-bottom: 20px;
}

.profileimg {
  border-radius: 50%;
      width: 300px;
      height: 300px;
      object-fit: cover;
      margin:auto;
display: block;

}

h3 {
  margin-bottom: 30px;
  font-size: 1.25rem;
  padding: 0.25em 0.5em;
  background: transparent;
  border-left: solid 5px #000;
}
</style>