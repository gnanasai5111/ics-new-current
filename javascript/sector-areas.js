
// sectorareas
var sectorBox=$(".sector-box");
var sectorWrap=$(".sector-img-wrap");
// console.log(sectorWrap.length);
sectorBox.mouseover(function(){
// $(this).children("a.sector-box-areas").css("background-color","rgba(249, 249, 249, 0.5)");
  $(this).children("a.sector-box-areas").css("background-color","rgba(85, 96, 105, 0.5)");
  $(this).find("i.sector-icons").css("color","#fff");
  $(this).find("span.sector-box-text").css("color","#fff");
  $(this).find("span.sector-box-line").animate({marginLeft:'100px',
opacity:'0'},10);


removeSectorVisible();
 $('.sector-img-wrap').eq($(this).index()-1).addClass("visible");
 var a=$(this).index()+1;
 console.log(a);
 $('.home-page-sectorareas').css("background-image",`url(images/icsexcels/${a}.jpg)`);
// $('.sector-img-wrap').css("background-image")
});
function removeSectorVisible(){
  $('.sector-img-wrap').removeClass("visible");
}
sectorBox.mouseout(function(){
// $(this).children("a.sector-box-areas").css("background-color","rgba(85, 96, 105, 0.5)");
  $(this).children("a.sector-box-areas").css("background-color","rgba(249, 249, 249, 0.5)");
  $(this).find("i.sector-icons").css("color","#000");
  $(this).find("span.sector-box-text").css("color","#414655");
  $(this).find("span.sector-box-line").animate({marginLeft:'0px',
opacity:'1'},10);

});
var Hardware=$(".Hardware");
Hardware.mouseover(function(){
  $(this).find("img.sector-icons").css("filter","invert(1)");
});
Hardware.mouseout(function(){
  $(this).find("img.sector-icons").css("filter","invert(0)");
});



// home page text fadein and  falling animation

const content=$(".item").find(".home-overlay-content");

const options={
  root:null,
  rootMargin:'0px',
  threshold:0.4
}
var observer=new IntersectionObserver((entries,observer)=>{

  entries.forEach((entry)=>{
    console.log(entries);

    if(entry.isIntersecting){
      entry.target.classList.add("fadeup");

    }
    else{
      entry.target.classList.remove("fadeup");

    }

  });


},options);

for(var i=0;i<content.length;i++){
  observer.observe(content[i]);
  console.log(i);
}
