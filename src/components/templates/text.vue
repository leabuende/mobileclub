<template>
    <div class="text">
        <h1 class="font">{{title}}</h1>
        <p class="font">{{content}}</p>
    </div>
</template>

<script>
export default {
    name:'textTemplate',
    props:{
        title: String,
        content: String
    }
}
</script>

<style scoped>
.font{
    color:#0D0256;
}

.font h1{
    font-weight: bold;
}

.text{
    word-break: normal;
    text-align: center;
}
</style>