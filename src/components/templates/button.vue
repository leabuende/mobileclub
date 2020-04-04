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
    width:188px;
    margin-top: 20px;
    

}

</style>