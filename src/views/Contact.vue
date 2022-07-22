<template>
<section id="contact">
     <h1 class="section-heading">Contact Me</h1> 
     <div class="contact-container p-5 container"> 

         <div class="contactrow p-5 text-center row">
             <div class="col-md-4 col-xs-12">
                <div class="contact-icon">
                    <i class="fa-solid fa-envelopes-bulk display-2 mb-3 highlight"></i>
                    <h4>call Me On</h4>
                    <p class="text-muted">+27 83 219 0021</p>
                 </div>
             </div>

             <div class="col-md-4 col-xs-12">
                <div class="contact-icon">
                    <i class="fa-solid fa-envelopes-bulk display-2 mb-3 highlight"></i>
                    <h4>Home</h4>
                    <p class="text-muted">Cape town, south Africa</p>
                 </div>
             </div>

             <div class="col-md-4 col-xs-12">
                <div class="contact-icon">
                    <i class="fa-solid fa-envelopes-bulk display-2 mb-3 highlight"></i>
                    <h4>Email</h4>
                    <p class="text-muted">jesse.2601@gmail.com</p>
                 </div>
             </div>
             
         </div> 
    </div>
     
    <form
  action="https://formspree.io/f/moqryngy"
  method="POST"
>
        <div class="container py-2 contactform ">
            <div class="row my-5">
              <div class="form-item col-6">
                  <div class="form-group">
                      <input type="text" class="form-control" name="name" placeholder="Name"> 
                  </div>
              </div>
              <div class="form-item col-6">
                <div class="form-group">
                    <input type="email" name="email" class="form-control" placeholder="Email"> 
                </div>
            </div>    
            </div>
            <div class="row my-5">
                <div class="form-item col-12">
                    <div class="form-group">
                        <input type="text" name="subject" class="form-control" placeholder="subject">
                    </div>
                </div>
            </div>
            <div class="row my-5">
                <div class="form-item col-12">
                    <div class="form-group">
                        <textarea name="message" id="" class="form-control" placeholder="Message"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-item col-12">
                   
                    <button type="submit" class= "btn btn-danger">Send <i class="fa-solid fa-rocket"></i></button>
                </div>
            </div>

        </div>
    </form>
  
    
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    /*Footer*/
.contact-container{
    margin-top: 80px;
    }
    .contactrow{
        display:flex;
    
    }

.footerbox{
    box-shadow: 0.6px 0.6px 4px 4px lightgray;
    background-color: rgba(252, 252, 252, 0.2);
}
</style>