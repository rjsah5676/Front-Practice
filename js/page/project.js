var page=1;

function clickPersonal(){
    let pbutton = document.getElementById("personal-button");
    let tbutton = document.getElementById("team-button");

    let pb = document.getElementById("personal-box");
    let tb = document.getElementById("team-box");

    pb.style.transform="translateX(0px)";
    tb.style.transform="translateX(0px)";

    tbutton.style.backgroundColor='#121212';
    tbutton.style.color='white';
    tbutton.style.fontWeight=400;

    pbutton.style.backgroundColor='white';
    pbutton.style.color='#121212';
    pbutton.style.fontWeight=600;
}

function clickTeam(){
    let pbutton = document.getElementById("personal-button");
    let tbutton = document.getElementById("team-button");

    let pb = document.getElementById("personal-box");
    let tb = document.getElementById("team-box");

    pb.style.transform="translateX(-960px)";
    tb.style.transform="translateX(-960px)";

    pbutton.style.backgroundColor='#121212';
    pbutton.style.color='white';
    pbutton.style.fontWeight=400;

    tbutton.style.backgroundColor='white';
    tbutton.style.color='#121212';
    tbutton.style.fontWeight=600;
}

function openImg(a,b){
    let il=document.querySelector('#img-list-'+b);
    let preimg = document.querySelector("#img-list-"+b+" .banner_image:nth-child("+page+")");
    page=1;
    document.querySelector("#img-list-"+b+" .banner_image:nth-child(1)").style.opacity=a;
    il.style.opacity=a;
    if(a==1) {
        il.style.zIndex=9;
    }
    if(a==0) {
        preimg.style.opacity=0;
        il.style.zIndex=-1;
    }
}

function leftImage(w,pg){
    let preimg = document.querySelector("#img-list-"+w+" .banner_image:nth-child("+page+")");
    preimg.style.opacity=0;
    if(page==1) page=pg;
    else --page;
    console.log(page);
    let img = document.querySelector("#img-list-"+w+" .banner_image:nth-child("+page+")");
    img.style.opacity=1;
}

function rightImage(w,pg){
    let preimg = document.querySelector("#img-list-"+w+" .banner_image:nth-child("+page+")");
    preimg.style.opacity=0;
    if(page==pg) page=1;
    else ++page;
    console.log(page);
    let img = document.querySelector("#img-list-"+w+" .banner_image:nth-child("+page+")");
    img.style.opacity=1;
}
