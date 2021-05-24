       window.onscroll = function() {
           myfunction();
       }
       let navbar = document.getElementById("navbar");
       let sticky = navbar.offsetTop;

       function myfunction() {
           if(window.pageYOffset >= sticky) {
               navbar.classList.add("sticky");
           }

           else {
               navbar.classList.remove("sticky");
           }
       }