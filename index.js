function cursorEffect(){
    var page1content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")





page1content.addEventListener("mousemove", function(dets){
       gsap.to(cursor,{
        x:dets.x,
        y:dets.y
       })
})

page1content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}

cursorEffect()

var page2 = document.querySelector("#page2")
var cursor = document.querySelector("#cursor")





page2.addEventListener("mousemove", function(dets){
       gsap.to(cursor,{
        x:dets.x,
        y:dets.y
       })
})

page2.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page2.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

cursorEffect()


var page3 = document.querySelector("#page3")
var cursor = document.querySelector("#cursor")





page3.addEventListener("mousemove", function(dets){
       gsap.to(cursor,{
        x:dets.x,
        y:dets.y
       })
})

page3.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page3.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

cursorEffect()

function page2Animation(){
    gsap.from("#page2 h1", {
        y:120,
        stagger:0.2,
        duration:1,
        scrolltregger: {
            trigger:"#page2",
            scroller: "#main",
            start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })
}
page2Animation()
 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
  });

  var tl = gsap.timeline()
   
  tl.from("#loader h3" , {
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
  })
  tl.to("#loader h3", {
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
  })
  tl.to("#loader" ,{
    opacity:0
  })
  tl.from("#page1-content h1 span" , {
    y:100,
    opacity:0,
    stagger:0.2,
    duration:0.5,
    delay:-0.5
  })
  tl.to("#loader" ,{
    display:"none"
  })
 
