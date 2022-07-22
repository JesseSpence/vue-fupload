<template>
	<nav class="navbar navbar-expand d-flex flex-column" id="sidebar">
<a href="#" class="navbar-brand text-light mt-5">
    <div class="display-5 text-center textclr navhead fw-bold"><h1>JESSE</h1></div>
</a>
<ul class="mb-5 navbar-nav d-flex flex-column mt-5 w-100">
    <li class="nav-item py-1 w-100">
        <a href="#home"  class="nav-link fw-bold textclr pl-4">
          <router-link class="nav-link active" to="/"><i class="pe-2 fa-solid fa-house"></i>HOME</router-link>
          </a>
    </li>
    <li class="nav-item py-1 w-100">
        <a class="nav-link fw-bold textclr pl-4">
        <router-link class="nav-link active" to="/About"><i class="pe-2 fa-solid fa-user"></i>ABOUT</router-link>
        </a>
    </li>
    <li class="nav-item py-1 w-100">
        <a class="nav-link fw-bold textclr pl-4">
        <router-link class="nav-link active" to='/ProjectsView'><i class="pe-2 fa-solid fa-hammer"></i>PROJECTS</router-link>
        </a>
    </li>
    
    <li class="nav-item py-1 w-100">
        <a href="#testimonials" class="nav-link fw-bold textclr pl-4">
        <router-link class="nav-link active" to='/Testimonials'><i class="pe-2 fa-solid fa-comments"></i>TESTIMONIALS</router-link>
        </a>
    </li>
    
    <li class="nav-item py-1 w-100">
        <a href="#contact" class="nav-link fw-bold textclr pl-4">
        <router-link class="nav-link active" to='/Contact'><i class="pe-2 fa-solid fa-paper-plane"></i>CONTACT</router-link>
        </a>
    </li>
</ul>

    <h5 class="text-center textclr mt-5"><span class="elcolor">☚</span>Jesse Spence<span class="elcolor">☛</span></h5>
    <p class="text-center elcolor">copyright Design by</p> <p class="text-center elcolor">© Jesse at Lifechoices</p>
        
</nav>
    <button class=" my-4" v-on:click="navToggle()" id="menu-btn"><img src="https://i.ibb.co/WVGrc0Z/P2w9-G5-AB-male-5-cartoon5-removebg-preview.png"></button>
</template>

<script>
	export default {
		components: {},

    methods: {
        navToggle() {
        let sidebar = document.querySelector("#sidebar")
            let container = document.querySelector(".my-container")
        
            sidebar.classList.toggle("active-nav")
            container.classList.toggle("active-cont")
        }
    },
      
    
    computed:{

    }
	};
</script>

<style scoped>
button {
    background: transparent !important ;
    z-index: 2000;
   border: 0px solid !important;
}
button img{
    position: fixed;
    top:0;
    height: 50px;
    transition: all ease-in-out .5s;
    
}
img:hover{
    filter: drop-shadow(0px 5px 3px var(--text-mute));
    transform: scale(1.8);
}

/* img::before{
    content: "toggle";
    position: absolute;
background-color: brown;
    width: 50000px;
    height:50000px;
} */
router-link{
  position: absolute;
}
.navhead{
border-bottom: 5px var(--el-color) solid;
border-left: 5px var(--el-color) solid;
padding-left:10px;
}

.navbar{
    z-index: 100;
    width:250px;
    height: 100vh;
    position:fixed;
    background-color: var(--text-mute) !important;
    transition: 0.5s;
    text-shadow: 1px 2px 3px var(--el-color);
}
#sidebar ul li a{
  color: var(--text-color) ;
    transition:0.5s;
    font-weight: 500;
}

#sidebar ul li a:hover{
    margin-left: 3%;
    color: var(--highlight-color)!important;

} 
#sidebar ul li a:focus{
    margin-left: 3%;
    color: var(--highlight-color)!important;
}

#sidebar li a:active{
    margin-left: 3%;
    color: var(--highlight-color)!important;
}

</style>
