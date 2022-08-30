<template>
  <header>
      <h1 class="logo">
        <div class="logo-title">Yoshizawa Mio</div>
        <div class="logo-subtitle">PORTFOLIO</div>
      </h1>
    </header>

</template>


<style scoped>

/* @media screen and (max-width: 767px)
header {
    height: 70vh;
} */

header {
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

</style>