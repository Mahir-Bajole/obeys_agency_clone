

document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })
})
document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
})

document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
})

function cursor(){
    Shery.mouseFollower({
        skew:true,
        ease:"cubic-bezier(0.23,1,0.320,1)",
        duration:1
    });
    Shery.makeMagnet("#nav-part2 h4"); 
    var video1=document.querySelector("#video-container")
    var vi=document.querySelector("#video-container video");
    vi.addEventListener("click",function(){
        vi.play();
        vi.style.opacity=1
    })
    video1.addEventListener("mouseenter",function(){
        video1.addEventListener("mousemove",function(dets){
           
            gsap.to("#video-cur",{
                left:dets.x-1100,
                y:dets.y-500
    
            })
        })
    })

    var flag=0;
    vi.addEventListener("click",function(){
        if(flag==0){
            vi.play();
            vi.style.opacity=1
            document.querySelector("#video-cur").innerHTML=`<i class="fa-solid fa-pause" style="color: #f4f6fb;"></i>`
            gsap.to("#video-cur",{
                scale:0.5
            })
            flag=1;


        }else{
            vi.pause();
            vi.style.opacity=0
            document.querySelector("#video-cur").innerHTML=`<i class="ri-play-fill"></i>`
            gsap.to("#video-cur",{
                scale:1
            })
            flag=0;

        }
    })
}
var video1=document.querySelector("#video-container");
video1.addEventListener("mouseleave",function(){
    gsap.to("#video-cur",{
        left:"10%",
        
    })
})

function sherryanime(){
    Shery.imageEffect(".image-div",{
        style:5,
   
        
        gooey:true
    })
}
sherryanime();

var tl=gsap.timeline();
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    
});

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
        
        
        },26);
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
    delay:3.8
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
loadinganimation();
cursor();

tl.from("#nav #header-part ,#nav svg",{
    opacity:0,
    duration:0.2,
    delay:0.3,
    stagger:0.2
})

tl.from(".hero h1",{
    y:150,
    duration:0.5,
   
    stagger:0.2

})


