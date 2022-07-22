<template>
<Navbar />
<div class="my-container">
  <router-view/> 
</div>
 
  
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  methods: {
    navToggle() {
        
        }
    }
  }

</script>

<style>
:root {
    --highlight-color:#3F0D12  /*crimson UA*/;
    --text-color:#edebc2;    /*light goldenrod yellow*/
    --background-color:#D5BF86; /*ecru beigh*/
    --el-color: #3F0D12; /*dark sienna*/
    --text-mute:#8D775F;
}

body {
color: var(--text-color)!important ;
background-color: var(--background-color) !important;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav {
  padding: 30px;
}
*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
   font-family:  "Rubik", sans-serif;
    
}
.elcolor{color: var(--el-color) }
.backhighlight{background-color:var(--highlight-color)!important}
.textclr{color:var(--text-color)}
.highlight{color:var(--highlight-color)!important}
.textmute{color: var(--text-mute)}
.txtshadow{text-shadow: 1px 2px 3px var(--el-color);}
.noshadow{ text-shadow: none !important;}

body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background:  var(--text-mute);       /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color:var(--el-color);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 2px solid var(--text-mute);  /* creates padding around scroll thumb */
}
.my-container{
    overflow: hidden !important;
    margin-left:255px;
    height:fit-content;
    
}

#menu-btn{
    display: none;
}

.active-cont{
        margin-left: 250px;
    }
@media (max-width: 1199px){
    .navbar{
        width:250px;
        height: 100vh;
        position:fixed;
        margin-left: -300px;
        top:0;
        background-color: var(--nav-color);
        transition: 0.5s;
    }
    -container{
        margin: 1%;
        transition: 0.4s;
    }
    
    .active-nav{
      height: 100vh;
        margin-left: 0%;
    }
    
    .active-cont{
        margin-left: 250px;
    }
    #menu-btn{
        display:inline;
        position: fixed;
    }
}
</style>
