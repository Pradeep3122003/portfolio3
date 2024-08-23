let s0=document.querySelector('.sw0');
let s1=document.querySelectorAll('.sw1');
let s2=document.querySelector('.sw2');

let home=document.getElementById("home");
let about=document.getElementById("about");
let proj=document.getElementById("proj");
let cont=document.getElementById("cont");

let slide=[home,about,proj,cont];
let slides=["grid","block","block","block"];

let t1=document.getElementById("t1");
let t2=document.getElementById("t2");
let t3=document.getElementById("t3");
let t4=document.getElementById("t4");



let tool=[t1,t2,t3,t4];

let sc=0;
swih=()=>{
if(sc==0)
{
    s0.style.background="white";
    s1.forEach(x=>{
           x.style.background="#f6f4f4";
           x.style.transition="0.8s";
           if(window.innerWidth > 480)
            {
                home.style.backgroundImage="linear-gradient(105deg,rgb(251, 155, 30) 20%, #f6f4f4 20%)";
                home.style.transition="0.8s";
            }

    });
    if(window.innerWidth <= 480)
    {
        s2.style.background="#f6f4f4";
        
        s2.style.transition="0.8s";
    }
  
    

    s0.style.transition="0.8s";
    
    
   
    sc=1;
}
else{
    s0.style.background="rgb(85, 86, 86)";
    s1.forEach(x=>{
        x.style.background="black";
        if(window.innerWidth > 480)
            {
                home.style.backgroundImage="linear-gradient(105deg,rgb(251, 155, 30) 20%, #111 20%)";
                home.style.transition="0.8s";
            }
 });
 if(window.innerWidth <= 480)
    {
        s2.style.background="#2b2a2a";
       
        s2.style.transition="0.8s";
    }
    
 
    sc=0;
}
}

tool.forEach(x=>{
    

    x.addEventListener('click', function(){
        tool.forEach(y=>{
            y.style.background="rgb(81, 80, 80)";
        })
        x.style.background="orange";
        x.style.transition="0.8s";
        slide.forEach(y=>{
            y.style.display="none";
        })
        var st=tool.indexOf(x);
        slide[st].style.display=slides[st];
    })
})