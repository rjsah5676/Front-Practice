var imgs=new Array();
var page=0;

function loadImage()
{
    page=0;
    for(var i=1;i<=17;i++ ){
        imgs.push("../../img/page/gallery/gallery_"+i+".png");
    }
    renderImage();
}

function renderImage()
{
    let gb = document.querySelector(".gallery-box");
    gb.innerHTML="";
    for(var i=0+8*page;i<8+8*page;i++) {
        gb.innerHTML += 
        `<div class="gallery-item" onclick="openGalleryImg(1,`+i+`)" style="background-image: url(`+imgs[i]+`);"></div>`;
    }
}

function nextButton()
{
    let gp = document.querySelector(".gallery-page");
    page++;
    gp.innerHTML=page+1;
    renderImage();
}

function prevButton()
{
    if(page>0) {
        let gp = document.querySelector(".gallery-page");
        page--;
        gp.innerHTML=page+1;
        renderImage();
    }
}

function openGalleryImg(a,b){
    let ci=document.querySelector('.clicked-img');
    let cb=document.querySelector('.clicked-img-box');
    cb.style.opacity=a;
    ci.style.background="url('../../img/page/gallery/gallery_"+(b+1)+".png')";
    ci.style.backgroundPosition='center';
    ci.style.backgroundSize='cover';
    if(a==1) {
        cb.style.zIndex=8;
    }
    if(a==0) {
        cb.style.zIndex=-1;
    }
}

function closeGalleryImg(){
    let cb=document.querySelector('.clicked-img-box');
    cb.style.opacity=0;
    cb.style.zIndex=-1;
}