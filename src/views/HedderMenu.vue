<template>
  <div id="header">
    <v-app-bar app dark flat>
      <!-- タブレット以上の表示 -->
      <div class="d-none d-sm-flex">
        <!-- <v-toolbar-title class="title">Yoshizawas Mio</v-toolbar-title> -->
        <div class="nav">
          <v-tab v-for="item in items" :key="item" :href="item.path">{{ item.title }}</v-tab>
        </div>
      </div>

      <!-- スマホの表示 -->
      <div class="d-flex d-sm-none xmheader">
        <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>

    <!-- ナビゲーション(スマホのみ) -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item" :href="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HedderMenu",
  data() {
    return {
      items: [
        { title: "HOME", path: "/" },
        { title: "WORK", path: "/#work" },
        { title: "ABOUT", path: "/#about" },
        { title: "SKILL", path: "/#skill" },
        // { title: "CONTACT", path: "#contact" }
      ],
      drawer: false
    };
  }
};
</script>

<style scoped>
/* .v-toolbar__content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
} */

.title {
  text-align: left;
  margin-left: 20px;
}

.xmheader {
  align-items: center;
}
.v-toolbar__content {
  display: block;
}
.logo {
  width: 200px;
}

.contactbtn {
  background-color: #143265;
}

.d-none {
  margin: 0 auto;
}
</style>