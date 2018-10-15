(function(){
      //АДАПТИВНОЕ МЕНЮ
    let elMenuButton = $(".menuToggle");
    let elContent =$('.all');
    let nav = $(".nav");
    let body = $("body");
    let allLi = document.querySelectorAll(".nav>ul>li");
    let arrayChildren = Array.prototype.slice.call(allLi);
    let status = false;
    let x = 0;
     window.addEventListener('resize', resizeHeandler);
     elMenuButton.addEventListener('click', clickHeandler);
     elContent.style.transition = 'transform 0.3s cubic-bezier(.9,.4,.5,1.1)';
   
     //РАЗМЕР ОКНА
       function resizeHeandler(){
      x = window.innerWidth;
      if(x > 850){
        status = false;
        elContent.classList.remove('leftAll');
        elContent.style.transition = 'none';
        for(let i =0; i < arrayChildren.length; i++){
            arrayChildren[i].classList.remove("openMenu");
        }
      
          }
      else if(x < 848){
        elContent.style.transition = 'transform 0.3s cubic-bezier(.9,.4,.5,1.1)';
        
       }
     }
     
  //КЛИК СОБЫТИЕ
     function clickHeandler(){
    if(status === false ){
        elContent.classList.add('leftAll');
        body.style.overflowY = "hidden";
        setTimeout(animation,200,arrayChildren,status)
           status=true;
      } 
      else if(status === true){
        animation(arrayChildren,status);
          setTimeout(function(){
            elContent.classList.remove('leftAll');
            body.style.overflowY = "auto";
          },500)
      
           status = false;
      } 
  }

    })();


    function animation(el,state) {
        for (let i = 0; i < el.length; i++) {
            if(state == false){
          setTimeout(function() {
            el[i].classList.add("openMenu");
          }, i + "00" - 100);
        }
        else if(state == true){
            setTimeout(function() {
                el[i].classList.remove("openMenu");
              }, i + "00" - 100);
        }
        }
      }
      
      function backAnimation(el) {
        let a = 0;
        for (let i = el.length-1; i >= 0; i--) {
          a += 50;
         
              setTimeout(function() {
                  el[i].classList.remove("openMenu");
                }, a);
          
        
        }
      }


      //ДОБВАЛЕНИЕ АНИМАЦИИ ПРИ СКРОЛЕЕ

      function addAnimate(el, animation){
        animation =  "fadeInUp" || animation;
        el.classList.add(animation);
      }

      //СОБЫТИЕ СКРОЛАА

       window.addEventListener("scroll", scrollHeadndler);
      window.addEventListener("resize",function(){

      }) 

    function scrollHeadndler(){
        let top =  window.pageYOffset;
        console.log(top);
     if(top > 210){
          addAnimate($(".sect_cont1 h1"));
       }
      if(top > 250){
         addAnimate($(".descript"));
       }
       if(top > 700){
        addAnimate($(".our"));
        addAnimate($(".sect_cont2 h1"));
        addAnimate($(".e"));
       }
       if(top > 750){
        addAnimate($(".serviece"));
       
       }
       if(top > 1400){
        addAnimate($(".eserviese"));
        addAnimate($(".sect_cont3 h1"));
        addAnimate($(".aa"));
       
       }
       if(top > 1550){
        addAnimate($(".info"));
         }
       if(top > 1750){
        addAnimate($(".sect_cont4 h1"));
         }
       if(top > 1850){
        addAnimate($(".news"));
         }

       if(top > 2600){
        addAnimate($(".sect_contFootUp"));
         }
       if(top > 2750){
        addAnimate($(".fbUp"));
         }
       if(top > 2950){
        addAnimate($(".fbCent"));
         }
       if(top > 3200){
        addAnimate($(".fbBot"));
         }

      }; 

     
    