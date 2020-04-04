<template>
  <div>
    <div
      id="mySidenav"
      class="sidenav d-xs-block d-sm-block d-md-none"
      :class="{ open: isActive }"
    >  
      <a class="closebtn" @click="openNav">X</a>
      <a class="links" href="#">Accueil</a>
      <a class="links" href="#">Nos smartphones</a>
      <a class="links" href="#">Vos questions</a>
      <div class="connectButton"><a class="font" href="#">Se connecter</a></div>
    </div>
    
    <div class="navdisplay">
      <div class="menu d-xs-block d-sm-block d-md-none">
        <p @click="openNav">☰</p>
      </div>
      <div class="navbar">
        <a href="#" style="text-decoration: none;"><span class="brand">mobile</span><span class="dot">.</span><span class="brand">club</span></a>
      </div>
      <div class="empty"></div>
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


a{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    
}

.open {
  width: 50% !important;
}
.closed {
  width: 0 !important;
}
.navdisplay{
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-left:10px;
    margin-right:10px;

}
.empty{
    width:22px;
}
.menu {
 
  font-size: 30px;
  color:#ffffff;
  
}
.connectButton{
    display: table;
     margin-left:25px;

    text-align:center;
    
    background-color: #4027E7;
    height: 40px;
    width: 50%;
    border-radius: 25px;
    
    
}

.connectButton .font{
text-decoration: none;
font-weight: bolder;
  font-size: 20px;
  color:white;
  
  transition: 0.3s;
  display: table-cell;
  vertical-align: middle;
}
.navbar{

display: flex;

}
.brand{
    color:#ffffff;
    font-weight: bold;
    font-size:30px;
}
.dot{
    color:#FD006E;
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
    margin-left:25px;
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

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
