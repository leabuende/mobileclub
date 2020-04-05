<template>
  <div class="body">
    <div class="top">
      <navBar />
      <div class="displayPhones">
        <kinesis-container class="displayPhones" event="scroll">
          <kinesis-element
            tag="img"
            :strength="150"
            type="translate"
            axis="y"
            :originY="80"
            class="phone"
            :src="phone"
          >
          </kinesis-element>
          <div style="width:30%" class="d-xs-none d-sm-none d-md-none d-lg-block"></div>
          <kinesis-element
            tag="img"
            :strength="-200"
            type="translate"
            axis="y"
            :originY="80"
            class="phone"
            :src="phone2"
          >
          </kinesis-element>
        </kinesis-container>
      </div>
      <div class="flexrow">
        <div class="flex">
          <div class="title">
            <p class="main">Le smartphone de vos rêves</p>
            <p class="price">dès 19,90€ /mois</p>
          </div>
        </div>
        <div class="flex">
          <buttontemplate
            :class="buttonpink.color"
            :content="buttonpink.text"
          />
        </div>
      </div>
    </div>
    <div class="topdesign"></div>
    <textTemplate
      title="Louer c'est la vie!"
      content="Il n’y a qu’à voir les avis et témoignages laissés par nos membres."
    />
    <carousel class="d-none d-md-none d-sm-block d-xs-block" style="margin-bottom: 30px;">
      <slide class="col-10" style="height: 250px;"
        ><reviewBox
          reviewName="Zine-Eddine "
          date="17/04/2019"
          rating="5"
          content="L'échange s'est parfaitement déroulé, j'ai reçu mon nouvel iPhone avec un bon de retour pour renvoyer l'ancien [...], tout est parfait !"
        />
      </slide>
      <slide class="col-10"
        ><reviewBox
          reviewName="Zine-Eddine "
          date="17/04/2019"
          rating="3"
          content="L'échange s'est parfaitement déroulé, j'ai reçu mon nouvel iPhone avec un bon de retour pour renvoyer l'ancien [...], tout est parfait !"
        />
      </slide>
      <slide class="col-10"
        ><reviewBox
          reviewName="Zine-Eddine "
          date="17/04/2019"
          rating="5"
          content="L'échange s'est parfaitement déroulé, j'ai reçu mon nouvel iPhone avec un bon de retour pour renvoyer l'ancien [...], tout est parfait !"
        />
      </slide>
    </carousel>

    <text-template
      title="Adieu les galères"
      textcolor="bluefont"
      content="En cas de pépin, nos équipes vous répondent en moins de 20 minutes."
    />
    <div class="image">
      <img src="../assets/img/handphone.png" />
    </div>
    <text-template
      title="Assistance en cas de "
      highlighted="panne"
      textcolor="bluefont"
      content="Nous garantissons le bon fonctionnement de votre smartphone à tout moment. Nos équipes vous aident à résoudre le moindre souci."
    />
    <text-template
      title="Échange en cas de "
      highlighted="casse"
      textcolor="bluefont"
      content="En cas de casse, vous ne vous occupez de rien. Nous assurons nous-même la remise en état et échangeons votre appareil."
    />
    <text-template
      title="Remplacement en cas de "
      textcolor="bluefont"
      highlighted="vol"
      content="En cas de vol, nous remplaçons votre appareil."
    />
    <div class="flex">
      <buttontemplate class="blue" content="Je m'offre la tranquilité" />
    </div>
    <div style="background-color: #0d0256; padding-bottom: 20px;">
      <div class="elementdesignup"></div>

      <div class="element2">
        <div class="elementside" style="width: 100%;">
          <text-template
            title="Sans engagement"
            textcolor="whitefont"
            content="Vous pouvez changer ou rendre votre smartphone à tout moment, sans frais."
          />
        </div>
        <div class="flex">
          <img class="phoneinpocket" src="../assets/img/phoneinpocket.png" />
        </div>
        <div class="flex">
          <buttontemplate class="pink" content="Je m'offre la liberté" />
        </div>
      </div>
    </div>
    <div style="background-color: #ff006e; width: 100%;">
      <div class="elementdesigndown"></div>
      <div class="elementside">
        <div class="talkbubbleleft"><p>T’achètes des DVD ?</p></div>
      </div>
      <div class="elementrightside">
        <div class="talkbubbleright"><p>Bah non, j’ai Netflix… 😜</p></div>
      </div>
      <div class="elementside">
        <div class="talkbubbleleft">
          <p>Alors pourquoi t'achètes encore ton smartphone ?</p>
        </div>
      </div>
    </div>
    <div style="background-color: #0d0256; height: 812px;">
      <div class="element3designdown" />
      <div class="flex">
        <buttontemplate class="pink" content="Je rejoins le Club" />
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import textTemplate from "./templates/text.vue";
import navBar from "./Accueil/navBar.vue";
import buttontemplate from "./templates/button.vue";
import reviewBox from "./templates/reviewBox.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Accueil",
  components: {
    navBar,
    KinesisContainer,
    KinesisElement,
    buttontemplate,
    textTemplate,
    reviewBox,
    Carousel,
    Slide,
  },
  data() {
    return {
      phone: require("../assets/img/iphone.png"),
      phone2: require("../assets/img/iphone2.png"),
      buttonpink: {
        text: "Je rejoins le Club",
        color: "pink",
      },
    };
  },
};
</script>

<style scoped>
.templates{
    width:100%;
}
.talkbubbleleft {
  margin-bottom: 40px;
  text-decoration: none;
  font-weight: bolder;
  font-size: 20px;
  background-color: #0d0256;
  margin-left: 30px;
  color: white;
  padding-left: 20px;
  display: table;
  text-align: center;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 25px 25px 25px 10px;
}
.talkbubbleright {
  margin-bottom: 40px;
  text-decoration: none;
  font-weight: bolder;
  font-size: 20px;
  background-color: #ffffff;
  margin-left: 30px;
  color: #0d0256;
  padding-left: 20px;
  display: table;
  text-align: center;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 25px 25px 10px 25px;
}
.talkbubbleright p {
  display: table-cell;
  vertical-align: middle;
}
.talkbubbleleft p {
  display: table-cell;
  vertical-align: middle;
}
.elementside {
  display: flex;
  justify-content: flex-start;
}

.elementrightside {
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
}
.phoneinpocket {
  height: 300px;
  width: auto;
}
.body {
  background-color: #f7f9fa;
}
.top {
    padding-top:15px;
  background-color: #0d0256;
  padding-bottom: 30px;
}
.topdesign {
  width: 100%;
  height: 50px;
  background-color: #0d0256;
  background-size: cover;
  clip-path: polygon(0% 60%, 100% 0%, 0% 0%);
}
.element3designdown {
  width: 100%;
  height: 50px;
  background-color: #ff006e;
  background-size: cover;
  clip-path: polygon(0% 60%, 100% 0%, 0% 0%);
}

.elementdesigndown {
  width: 100%;
  height: 50px;
  background-color: #0d0256;
  background-size: cover;
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%);
}
.element2 {
  height: auto;
  width: 100%;
}
.elementdesignup {
  margin-top: 30px;
  width: 100%;
  height: 50px;
  background-color: #f7f9fa;
  clip-path: polygon(0% 60%, 100% 0%, 0% 0%);
}
.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  word-wrap: break-word;
  text-align: center;
  width: 250px;
}
.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  font-weight: bold;
  word-wrap: break-word;
  font-size: 30px;
}
.displayPhones {
  display: flex;
  justify-content: center;
  height: 120px;
  width: 100%;
}
.flex {
  display: flex;
  justify-content: center;
  background-color: none;
  position: relative;
}
.image {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.image img {
  width: 145px;
  height: auto;
}

.phone {
  height: 100px;
  width: auto;
}
hr {
  background-color: #3d3779;
  margin-right: 30px;
  margin-left: 30px;
}

@media (min-width: 992px){
    .top{
        height:690px;
    }
    .main{
        font-size: 100px;
        line-height: 1;
        margin-bottom:10px;
    }
    .title{
        width:700px;
        text-shadow: 2px 2px 5px black;
    }
    .title .price{
        font-size: 40px;
         margin-bottom:50px;
    }
    .phone{
        height:400px;
    }


    
}
</style>
