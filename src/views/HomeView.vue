<template>
 <section id="home">
<div class="homebox container d-flex flex-column">
    <div class="circlecontainer">
    <img class=" py-2 homepic" src="https://i.ibb.co/x769VpW/P2w9-G5-AB-male-5-cartoon4.png" alt="Jesse Spence Portfolio Picture">
</div>
    <h2 class="py-2 textclr fw-bold mt-1">Jesse Spence</h2>
    <div class="container mt-4 d-flex">
       <a href="https://github.com/JesseSpence"><i class="fa-brands fa-github mx-2 h4"></i></a>
       <a href="https://wa.me/+27614699350"><i class="fa-brands fa-whatsapp mx-2 h4"></i></a>
       <a href="www.linkedin.com/in/jesse-spencer-77962b23a"><i class="fa-brands fa-linkedin-in mx-2 h4"></i></a>
       <a href="https://www.instagram.com/jesse.mellow"><i class="fa-brands fa-instagram h4 mx-2"></i></a>
    </div>

</div>
    </section>
    <div class="colors">
        <div>
<input type="color" v-model="backgroundColor" @change="changeBackgroundColor()">
</div>
<input type="color" v-model="highlightColor" @change="changeHighlightColor()">
<div>
<input type="color" v-model="lowlightColor" @change="changeLowlightColor()">
</div>
</div>

</template>

<script>
export default {
    data() {
        return {
            backgroundColor: '#D5BF86',
            highlightColor: '#8D775F',
            lowlightColor: '#3F0D12',
            color: false,
        };
    },
    methods: {
        changeBackgroundColor() {
            let cssVariables = document.querySelector(":root");
    cssVariables.style.setProperty('--background-color', this.backgroundColor)
        },
changeHighlightColor() {
            let cssVariables = document.querySelector(":root");
    cssVariables.style.setProperty('--el-color', this.highlightColor)
        },
changeLowlightColor() {
            let cssVariables = document.querySelector(":root");
    cssVariables.style.setProperty('--text-mute', this.lowlightColor)
}
        
    },
}

</script>

<style scoped>
body{
	text-align:center;
}
.colors{
padding: 5%;
}
input{
    border-radius: 30%;
    z-index: 100000;
    background-color: pink !important;
}
#home{
    text-shadow: 1px 2px 3px var(--el-color);
    height:100vh;
}
.homebox{
    z-index: -10000;
    transform: scale(1.3);
    padding-top: 12%;
    padding-left: 40%; 
}
h2{
    position: absolute;
    bottom:25%;
}
@media screen and (max-width:500px) {
    .homebox{
        margin-top:20%;
        margin-left:-25%;
    }
}
.homepic{
    filter: drop-shadow(0px 10px 3px black);
    position: absolute;
    width:200px;
    border-radius: 70%; 
}
.circlecontainer{
    display:flex;
    justify-content:center;
    position: relative;
    height: 215px;
    width: 215px;
    border-radius: 50%;
    background-color:var(--text-mute);
    animation: shadow linear infinite 2s;
    box-shadow: 1px 1px 8px 8px  var(--el-color);
}
@keyframes shadow {
    0%{
        box-shadow: 1px 1px 8px 8px  var(--el-color); 
    }
    50%{
        box-shadow: 1px 1px 25px 10px  var(--el-color); 
    }
}

#home a {
    padding-top: 7px;
    background-color: var(--el-color);
    margin-left: 8px;
    border-radius: 30%;
    transition: 0.5s;
box-shadow: 1px 1px 5px 2px  var(--text-mute);
}
.fa-brands{
   
    color: var(--text-color);
    transition: 0.5s;
}
.fa-brands:hover{
    transform: scale(1.1);
}
#home a:hover{
    transform: scale(1.2);
}
.sub-heading{
    margin-top: 5%;
}
	</style>