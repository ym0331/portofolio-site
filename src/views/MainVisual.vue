<template>
  <div class="mainvisual">
      <h1 class="logo">
        <div class="logo-title">Yoshizawa Mio</div>
        <div class="logo-subtitle">PORTFOLIO</div>
      </h1>
    </div>

</template>


<style scoped>

/* @media screen and (max-width: 767px)
header {
    height: 70vh;
} */

.mainvisual {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 86vh;
}
.logo {
    position: relative;
    margin-bottom: 30px;
    padding: 0 20px;
    text-align: center;
}
/* @media screen and (max-width: 767px)
.logo-title {
    font-size: 28px;
    letter-spacing: .16em;
} */

.logo-title {
    font-family: "Open sans", sans-serif;
    font-size: 64px;
    line-height: 1;
    letter-spacing: .2em;
}

.logo-subtitle {
    font-size: 14px;
}
.logo-subtitle {
    font-size: 20px;
    margin-top: 5px;
    text-align: center;
    letter-spacing: .2em;
}


.mainvisual{
	animation: bgchange 20s ease infinite;/*変化の時間を変更したい場合は20sの部分を好きな時間に変更*/
}

@keyframes bgchange{
      0%   {background:#ffe6e1;}/*変化させたい色*/
      25%  {background:#fdcb9e;}/*変化させたい色*/
      50%  {background:#fdcbc1;}/*変化させたい色*/
      75%  {background:#ffff8c;}/*変化させたい色*/
      90%  {background:#b2dffb;}/*変化させたい色*/
      100% {background:#ffe6e1;}/*変化させたい色*/
 }

</style>