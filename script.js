
var tl=gsap.timeline();
function loadinganimation(){
    






tl.from(".line h1",{
    y:"+150",
    duration:0.6,
    delay:0.5,
    opacity:0,
   
    stagger:0.2
});


tl.from("#line1-part,.line h2",{
    opacity:0,
    duration:0.1,

    delay:0.2,
    onstart:function(){
        var cout_loader=document.querySelector("#line1-part h5");
        var c=0;
        setInterval(function(){
           
            if(c<100){
                c++;
                cout_loader.textContent=c;
            }
        
        
        },30);
    }
    
    
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
    duration:1,
  
})
tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:0
});
tl.from("#page1",{
    y:1200,
    opacity:0,
    ease:Power4,
    
})
tl.to("#loader",{
    display:"none"
})

}
function cursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#header-part h3,.brand__svg" , {
       
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}
loadinganimation();
cursor();
tl.from("#nav #header-part ,#nav svg",{
    opacity:0,
    duration:0.2,
    delay:0.3,
    stagger:0.2
})

tl.from(".hero h1,.hero h5,.hero h4",{
    y:120,
    duration:0.5,
   
    stagger:0.2

})
