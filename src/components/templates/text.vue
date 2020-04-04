<template>
    <div class="text">
        <span :class="textcolor">{{title}}</span><span class="highlighted">{{highlighted}}</span>
        <p :class="textcolor">{{content}}</p>
    </div>
</template>

<script>
export default {
    name:'textTemplate',
    props:{
        title: String,
        content: String,
        highlighted: String,
        textcolor: String
    }
}
</script>

<style scoped>

.bluefont{
    color:#0D0256;
}
.whitefont{
    color:white;
}

.font h1{
    font-weight: bold;
}

.text{
    word-break: normal;
    text-align: center;
    margin-bottom: 20px;
    margin-top:20px;
    margin-left: 20px;
    margin-right:20px;
}
.text span{
    font-weight:bold;
    font-size: 30px;
}
.highlighted{
    font-weight: bold;
    color:#4027E7;
}
</style>