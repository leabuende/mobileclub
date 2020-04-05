<template>
  <div>
    <div
      id="mySidenav"
      class="sidenav d-xs-block d-sm-block d-md-block d-lg-none"
      :class="{ open: isActive }"
    >
      <a class="closebtn" @click="openNav">X</a>
      <a class="links" href="#">Accueil</a>
      <a class="links" href="#">Nos smartphones</a>
      <a class="links" href="#">Vos questions</a>
      <div class="connectButton"><a class="font" href="#">Se connecter</a></div>
    </div>

    <div class="navdisplay">
      <div class="menu d-xs-block d-sm-block d-md-block d-lg-none flex-md-fill flex-row">
        <p @click="openNav">☰</p>
      </div>
      <div class="navbar col-sm-2 offset-md-0">
        <a href="#" style="text-decoration: none;"
          ><span class="brand">mobile</span><span class="dot">.</span
          ><span class="brand">club</span></a
        >
      </div>
      <div class="linkbar">
        <div class="d-xs-none d-sm-none d-lg-block d-md-none">
          <div class="links"><span>Nos smartphones</span></div>
        </div>
        <div class="d-xs-none d-sm-none d-lg-block d-md-none linkbar">
          <div class="links">Vos questions</div>
        </div>
        <div class="d-xs-none d-sm-none d-lg-block d-md-none linkbar">
          <div class="memberaccess"><span>Accès membre</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",

  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openNav: function () {
      this.isActive = !this.isActive;
    },
    closeNav: function () {
      this.isActive = false;
    },
  },
};
</script>

<style>
a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.open {
  width: 50% !important;
}
.closed {
  width: 0 !important;
}
.navdisplay {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 10px;
  margin-right: 10px;

}
.empty {
  width: 22px;
}
.menu {
  font-size: 30px;
  color: #ffffff;
}
.connectButton {
  display: table;
  margin-left: 25px;

  text-align: center;

  background-color: #4027e7;
  height: 40px;
  width: 50%;
  border-radius: 25px;
}

.connectButton .font {
  text-decoration: none;
  font-weight: bolder;
  font-size: 20px;
  color: white;

  transition: 0.3s;
  display: table-cell;
  vertical-align: middle;
}
.navbar {
  display: flex;


}
.brand {
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
}
.dot {
  color: #fd006e;
  font-size: 40px;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ffffff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav .links {
  margin-left: 25px;
  margin-bottom: 20px;
  font-weight: bolder;

  text-decoration: none;
  font-size: 20px;
  color: black;
  display: block;
  transition: 0.3s;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.linkbar {
  display: flex;
  flex-direction: row;
  width: 50%;

}

.memberaccess{
    border: solid white;
     color: white;
     height: 58px;
     line-height: 58px;
     vertical-align: center;
     text-align: center;
     border-radius: 35px;
}

@media (min-width: 992px) {
  .links {
    font-weight: bolder;
    text-decoration: none;
    font-size: 15px;
    color: white;
    display: flex;
    transition: 0.3s;
    width: 170px;
    height:58px;
    line-height:58px;
    text-align: center;
    vertical-align: center;
   
  }
  

  .connectButton {
    width: 60px;
  }
}
@media (max-width: 372px){
      .linkbar{
          display: none;
      }
  }
</style>
