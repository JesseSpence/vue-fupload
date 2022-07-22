<template>
<h1>projectski</h1>
    <section id="projects">
    
            <h1 class="section-heading mb-5">Projects</h1>
        
        <div class="container d-flex justify-content-center">
            
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <div class="cubelinks active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><div class="cube">
                <div class="top"><i class="fa-solid my-2 ms-3 h3 text-light fa-arrow-pointer"></i></div>
                <div class="right"></div>
                <div class="bottom"></div>
                <div class="left"></div>
                <div class="back"></div>
                <div class="front"></div>
              </div></div>
            </li>
            <li class="nav-item" role="presentation">
              <div class="cubelinks " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                  <div class="cube">
                <div class="top"><i class="fa-solid my-2 ms-3 h3 text-light fa-arrow-pointer"></i></div>
                <div class="right"></div>
                <div class="bottom"></div>
                <div class="left"></div>
                <div class="back"></div>
                <div class="front"></div>
              </div></div>
            </li>
            <li class="nav-item" role="presentation">
              <div class="cubelinks" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><div class="cube">
                <div class="top"><i class="fa-solid my-2 ms-3 h3 text-light fa-arrow-pointer"></i></div>
                <div class="right"></div>
                <div class="bottom"></div>
                <div class="left"></div>
                <div class="back"></div>
                <div class="front"></div>
              </div></div>
            </li>
          </ul>
        </div>
        
        <div class="row">
          <div class="tab-content" id="pills-tabContent">

            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div class="projectbox">
                    <div class="projectbox-inner">
                        <div class="projectpic">
                            <img src="https://picsum.photos/id/240/200/300 " alt="">
                        </div>
                    </div>
                    <div class="projectbox-inner my-5">
                        <img src="https://picsum.photos/id/160/200/300 " alt="Avatar" class="projectpic">
                        <h3 class="textclr text-center">Calculator</h3>
                        <div class="promiddle">
                          <div class="protext"><div class="btn btn-danger"><i class="text-light fa-brands fa-github-alt"></i></div></div>
                          <div class="protext"><div class="btn btn-danger"><i class="fa-brands fa-chrome"></i></div></div>
                        </div>
                      </div>
                      
                    <div class="projectbox-inner">
                        <div class="projectpic">
                            <img src="https://picsum.photos/id/238/200/300 " alt="">
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div class="projectbox">
                    <div class="projectbox-inner">
                        <div class="projectpic">
                            <img src="https://picsum.photos/id/240/200/300 " alt="">
                        </div>
                    </div>
                    <div class="projectbox-inner my-5">
                        <img src="https://picsum.photos/id/1015/200/300 " alt="Avatar" class="projectpic">
                        <h3 class="textclr text-center">Holiday-resort</h3>
                        <div class="promiddle">
                          <div class="protext"><div class="btn btn-danger"><i class="text-light fa-brands fa-github-alt"></i></div></div>
                          <div class="protext"><a href="https://github.com/JesseSpence/Calculator"><div class="btn btn-danger"><i class="fa-brands fa-chrome"></i></div> </a></div>
                          </div>
                        </div>
                        
                      
                    <div class="projectbox-inner">
                        <div class="projectpic">
                            <img src="https://picsum.photos/id/238/200/300 " alt="">
                        </div>
                    </div>
                </div>
            </div>
            

             <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div class="projectbox">
                    <div class="projectbox-inner">
                        <div class="projectpic">
                            <img src="https://picsum.photos/id/240/200/300 " alt="">
                        </div>
                    </div>
                    <div class="projectbox-inner my-5">
                        <img src="https://picsum.photos/id/163/200/300 " alt="Avatar" class="projectpic">
                        <h3 class="textclr text-center">Resturaunt</h3>
                        <div class="promiddle">
                          <div class="protext"><div class="btn btn-danger"><i class="text-light fa-brands fa-github-alt"></i></div></div>
                          <div class="protext"><div class="btn btn-danger"><i class="fa-brands fa-chrome"></i></div></div>
                        </div>
                        </div>
                      
                      
                    <div class="projectbox-inner">
                        <div class="projectpic">
                            <img src="https://picsum.photos/id/238/200/300 " alt="">
                        </div>
                    </div>
                </div>
            </div>
          </div>
          </div>

</section>
	
		
</template>

<script>
	
	
		
</script>

<style scoped>
.cube { padding-right:100px;
    width: 50px;
    height: 50px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(-45deg); 
 }
 .cube div {
    width: 50px;
    height: 50px;
    position: absolute;
    background: var(--highlight-color);

    box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.6);
 }
 .cube:hover .top {
    transform: translateX(-60px);
 }
 
 
 .cube div.top {
    z-index: 1000;
    transform: rotateX(90deg);
    margin-top: -25px;
    transition: all ease-in-out 1s;
 }
 .cube div.top:hover{
     transform: translateX(-60px);
 }
 
 .cube div.right {
    transform: rotateY(90deg); 
    margin-left: 25px;
    transition:all ease-in-out 1s;
 }
 .cube div.right:hover, .top {
    display:block;
 }
 

 .cube div.bottom {
   transform: rotateX(90deg);
   margin-top: 25px;
 }
 
 .cube div.left {
    transform: rotateY(-90deg);
    margin-left: -25px;
 }
 
 .cube div.front {
    transform: translateZ(25px); 
    transition: all ease-in-out 2s;
 }
 
 .cube div.back {
    transform: translateZ(-25px); 
 }

 @media screen and (max-width:390px) {
    .cube { 
        width: 25px;
        padding-right: 60px;
     }
    
     .cube div { 
        width: 25px;
        height: 25px;

     }
     .cube div.top {
        transform: rotateX(90deg);
        margin-top: -12px;
        transition: all ease-in-out 1s;
     }
     .cube div.top:hover{
         transform: translateX(-60px);
     }
     
     .cube div.right {
        transform: rotateY(90deg); 
        margin-left: 12px;
        transition:all ease-in-out 1s;
     }
     
     
    
     .cube div.bottom {
       transform: rotateX(90deg);
       margin-top: 12.5px;
     }
     
     .cube div.left {
        transform: rotateY(-90deg);
        margin-left: -12.5px;
     }
     
     .cube div.front {
        transform: translateZ(12.5px); 
        transition: all ease-in-out 2s;
     }
     
     .cube div.back {
        transform: translateZ(-12.5px); 
     }
    
 }
 #projects{
     min-height: fit-content;
     padding-top: 5%;
    padding-bottom: 5%;
    max-width:100vw;
 }
 .projectbox{
    padding:10px;
    display:flex;
    flex:wrap;
    justify-content: space-around;
}
.prjectbox-inner{
    position: relative;
width:25%
}
.projectpic {
    opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
}
.promiddle{
        transition: .5s ease;
     opacity: 0; 
    position: absolute;
    transform: translate(48%, -200%);
    text-align: center;
 }
 .projectbox-inner:hover .projectpic{
    opacity: 0.3;
  }
  
  .projectbox-inner:hover .promiddle{
    opacity: 1;
  }
 

.protext {
    color:--text-color;
    font-size: 16px;
    padding: 16px 32px;
 }

</style>
