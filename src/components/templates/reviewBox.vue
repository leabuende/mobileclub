<template>
  <div class="box">
    <p class="comment">{{ content }}</p>
    <p>{{ratingStars}}</p>
    <span class="name">{{reviewName}}</span><span>{{date}}</span>
  </div>
</template>
<script>
export default {
  name: "reviewBox",
  data() {
    return {
      n: "0",
      star: '⭐'
    };
  },
  props: {
    content: String,
    reviewName: String,
    rating: Number,
    date: String
    
  },
  
  computed: {
      ratingStars: function(){
          return this.star.repeat(this.rating)
      }
  }
};
</script>
<style scoped>
.box {
  background-color:#FFFFFF;
   border-radius: 25px;
   padding-top: 15px;
   padding-bottom: 10px;
   padding-left: 20px;
   padding-right: 20px;
   border: 1px solid #CACCCD;
    -webkit-box-shadow: 0 8px 6px -6px grey;
	-moz-box-shadow: 0 8px 6px -6px grey;
	box-shadow: 0 8px 10px -6px grey;
}
.comment{
    color:#0D0256;
    word-break: normal;
    text-align: left;
}
.name{
    font-weight: bold;
}
</style>
