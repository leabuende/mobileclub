<template>
    <div :class="color" class="button">
        <p class="font">{{content}}</p>

    </div>
</template>

<script>

export default {
    name:'buttontemplate',
    props:{
        content: String,
        color: String
    }
}

</script>

<style scoped>

.button{
    display: table;
    text-align:center;
    height: 44px;
    border-radius: 25px;

}

.button .font{
text-decoration: none;
font-weight: bolder;
  font-size: 20px;
  color:white;
  
  transition: 0.3s;
  display: table-cell;
  vertical-align: middle;
}

.pink{
    background-color: #FF398D;
    width:200px;
    margin-top: 20px;
    padding-left:5px;
    padding-right:5px;

    -moz-box-shadow:    inset 0 0 10px  rgb(250, 126, 180);
   -webkit-box-shadow: inset 0 0 10px rgb(250, 126, 180);
   box-shadow:         inset 0 0 10px rgb(250, 126, 180);
}

.blue{
    background-color: #5B46F3;
    width:240px;
    margin-top: 20px;
    -moz-box-shadow:    inset 0 0 10px rgb(120, 99, 252);
   -webkit-box-shadow: inset 0 0 10px rgb(120, 99, 252);
   box-shadow:         inset 0 0 10px rgb(120, 99, 252);
    

}

</style>