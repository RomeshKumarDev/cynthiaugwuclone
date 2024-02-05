

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function firstPageAnime()
{
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:2,
        ease:Expo.easeInOut

    })
       .to(".boundaryelem",{
       y:0,
       ease:Expo.easeInOut,
       duration:2,
       stagger:.2,
       delay:-1

    })
    .from("#heroFooter",{
        y:'-10',
        opacity:0,
        duration:1.3,
        delay:-1,
        ease:Expo.easeInOut

    })

}
function circleChaptaKaro()
{
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets)
    {
        this.clearTimeout(timeout);
     var xdiff=   dets.clientX-xprev;
     var ydiff=   dets.clientY-yprev;
        xprev=dets.clientX;
        yprevv=dets.clientY;
     xscale=   gsap.utils.clamp(.8,1.2,xdiff);
     yscale=   gsap.utils.clamp(.8,1.2,ydiff)
     circleMouseFollower(xscale,yscale)
    
     timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    })

}
circleChaptaKaro();
function circleMouseFollower(xscale,yscale)
{//window means browser screen
    window.addEventListener("mousemove",function(dets)
    {
      document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`

    })

}
circleMouseFollower();
firstPageAnime();
document.querySelectorAll(".elem").forEach(function(elem)
{
    var rotate=0;
    var diffroot=0;
    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });
    elem.addEventListener("mousemove",function(details)
    {

        var diff=details.clientY-elem.getBoundingClientRect().top;
        diffroot=details.clientX-rotate;
        rotate=details.clientX;
       
        gsap.to(elem.querySelector("img"),
        {opacity:1,ease: Power1,
            top:diff,
            left:details.clientX,
            rotate: gsap.utils.clamp(-20,20,diffroot*0.2)
        })
    });
});