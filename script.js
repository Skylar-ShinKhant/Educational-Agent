  const body=document.querySelector('body');
  const cursor=document.querySelector('.cursor');
  const modes=document.querySelectorAll('.lightDark');
  const navBar=document.querySelector('nav');
  const humburger=document.querySelector('.humburger');
  const sideNav=document.querySelector('.sideNav');
  const exitSideNav=document.querySelector('.exitSideNav');
  const navLinks=document.querySelectorAll('.navItems span a');
  const sideNavLinks=document.querySelectorAll('.sideNav div a');
  const cover=document.querySelector('.cover');
  const consultants=document.querySelectorAll('.consultants .consultants-container .consultant');
  const quickLinks=document.querySelectorAll('.about .quickLinks ul li a');
  const rocket=document.querySelector('.backToTop');

  //Cursor
  window.addEventListener('mousemove',e=>{
  cursor.style.top=e.pageY+'px';
  cursor.style.left=e.pageX+'px';
  });

  //Light && Dark
  modes.forEach(mode=>{
    mode.addEventListener('click',()=>{
      modes[0].classList.toggle('mode');
      modes[1].classList.toggle('mode');

      body.classList.toggle('toggleColor');
    });
  });

  //Humburger Button Click Event
  humburger.addEventListener('click',()=>{
  sideNav.style.transform="translate(0)";
  });
  //Humburger Button Hovering
  humburger.addEventListener('mouseover',()=>{
  cursor.classList.add('grow2'); 
  });
  humburger.addEventListener('mouseleave',()=>{
  cursor.classList.remove('grow2');
  });

  //Side Nav Exit Button Click Event
  document.addEventListener('click',(e)=>{
  let target=e.target;
  const hrs=document.querySelectorAll('hr');
  if(target == sideNav || target == humburger || target == hrs[0] || target == hrs[1] || target == hrs[2]){
    sideNav.style.transform="translate(0)"
  }
  else{
      sideNav.style.transform="translate(200px)";  
  }
  });
  exitSideNav.addEventListener('click',()=>{
  sideNav.style.transform="translate(200px)";
  });  
  //Side Nav Exit Button Hovering Animation
  exitSideNav.addEventListener('mouseover',()=>{
  cursor.classList.add('grow2'); 
  });
  exitSideNav.addEventListener('mouseleave',()=>{
  cursor.classList.remove('grow2');
  });

  //Window Scroll
  window.addEventListener('scroll',()=>{
  //Fixed Nav
  if(window.pageYOffset>navBar.getBoundingClientRect().height)
  {
    navBar.classList.add('fixedNav');
  }
  else{
    navBar.classList.remove('fixedNav');
  }
  //Scroll & Adding Active
   navLinks.forEach(link=>{
    let id=link.getAttribute('href').slice(1);
    let element=document.getElementById(id);

  if(window.pageYOffset>=element.offsetTop-navBar.getBoundingClientRect().height-10){    
    removeActive(navLinks);
    link.parentElement.classList.add('active');

    sideNavLinks.forEach(li=>{
      li.parentElement.classList.remove('active');
      if(link.innerText==li.innerText){
        li.parentElement.classList.add('active');
      }
    }); 
  }
  });
  //Back To Top
  if(window.pageYOffset>=cover.getBoundingClientRect().height){
    rocket.style.opacity='1';
  }
  else{
    rocket.style.opacity='0';
  }

  if(window.pageYOffset<=2){
    rocket.style.animationName='infiAlter1';
    
  }
});

  //Back To Top
  rocket.addEventListener('click',()=>{
    rocket.style.animationName='infiAlter2';
  });

  //Nav Links Hovering Animation
  navLinks.forEach(link=>{
  link.addEventListener('mouseover',e=>{
    if(navBar.classList.contains('fixedNav')){
    cursor.classList.add('grow1');
    e.target.classList.add('Ani1');
    }
    // else{
    // cursor.classList.add('grow');
    // e.target.classList.add('Ani');
    // }
      
  });
  link.addEventListener('mouseleave',e=>{
    if(navBar.classList.contains('fixedNav')){
    cursor.classList.remove('grow1');
    e.target.classList.remove('Ani1');
    }
    else{
    cursor.classList.remove('grow');
    e.target.classList.remove('Ani');
    }
  });
  //Nav Links Click Event
  link.addEventListener('click', e=>{
    removeActive(navLinks);
    e.target.parentElement.classList.add('active');

    sideNavLinks.forEach(link=>{
      link.parentElement.classList.remove('active');
      if(e.target.innerText==link.innerText){
        link.parentElement.classList.add('active');
      }
    });   
  });
  });  

  //Side Nav Links Hovering Animation
  sideNavLinks.forEach(link=>{
  link.addEventListener('mouseover',e=>{
    cursor.classList.add('grow1');
    e.target.classList.add('Ani1');  
  });
  link.addEventListener('mouseleave',e=>{
    cursor.classList.remove('grow1');
    e.target.classList.remove('Ani1');
  });
  //Side Links Click Event
  link.addEventListener('click', e=>{
    removeActive(sideNavLinks);
    e.target.parentElement.classList.add('active');

    navLinks.forEach(link=>{
      link.parentElement.classList.remove('active');
      if(e.target.innerText==link.innerText){
        link.parentElement.classList.add('active');
      }
    });
  });
  });

  //Removing Active
  function removeActive(links){
    links.forEach(link=>{
      link.parentElement.classList.remove('active');
    });
  }

  smoothScroll(navLinks);
  smoothScroll(sideNavLinks);
  smoothScroll(quickLinks);

  //Smooth Scroll
function smoothScroll(links){
  links.forEach(link=>{
    link.addEventListener('click',e=>{
      e.preventDefault();

      let id=e.target.getAttribute('href').slice(1);
      let navigate=document.getElementById(id);
      let position;
      if(navBar.classList.contains('fixedNav')){
        position=navigate.offsetTop-navBar.getBoundingClientRect().height+10;
      }
      else{
        position=navigate.offsetTop-(navBar.getBoundingClientRect().height*2)+10;
      }
      window.scrollTo({
        left:0,
        top:position,     
      });
    });
  });
}
  
  //Universities
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:`<a href="#" class="slick-prev"><i class="fas fa-arrow-circle-left"></i></a>`,
    nextArrow:`<a href="#" class="slick-next"><i class="fas fa-arrow-circle-right"></i></a>`,
    responsive:[
    {
      breakpoint:900,
      settings:{
      slidesToShow:1,
      }
    },
    {
      breakpoint:1260,
      settings:{
      slidesToShow:2,
      }
    }
    ]
  });

  //Consultants
  consultants.forEach(consultant=>{
    let consultantName=consultant.querySelector('.name');
    let consultantContact=consultant.querySelector('.contact');

    consultant.addEventListener('mouseover',()=>{
      consultantName.style.opacity="0";
      consultantContact.style.transform="translateY(-5rem)";
      consultantContact.style.padding="15px";
    });

    consultant.addEventListener('mouseleave',()=>{
      consultantName.style.opacity="1";
      consultantContact.style.transform="translateY(1000px)";
      consultantContact.style.padding="0";
    });
  });

  //Feedbacks
  $('.single-item').slick({
    prevArrow:`<a href="#" class="slick-prev"><i class="fas fa-sort-down"></i></a>`,
    nextArrow:`<a href="#" class="slick-next"><i class="fas fa-sort-up"></i></a>`,
  });
  