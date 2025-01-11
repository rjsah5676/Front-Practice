function getStyles() {
    let bd=document.querySelector('body');
    bd.style.backgroundColor='#121212';
    bd.style.userSelect='none';

    let ft=document.getElementsByClassName("footer")[0];
    ft.innerHTML = `Copyright 2024. 
    <a href="https://github.com/rjsah5676/Front-Practice" 
    style="text-decoration:none; color:#a2a2a2;">이건모.</a> All Right Reserved.`;
    ft.style.width="100%";
    ft.style.height="60px";
    ft.style.lineHeight="60px";
    ft.style.color="#a2a2a2";
    ft.style.fontSize="20px";
    ft.style.zIndex="-1";
    ft.style.textAlign="center";

    let hd=document.getElementsByClassName("header")[0];
    if(hd!=null)
        hd.innerHTML = `
                <li id="logo"><a href="./mainPage.html">GM LEE</a></li>
                <li id="nav"><div><a href="./about.html">About</a></div><div><a href="./project.html">Project</a></div><div><a href="./guest.html">Guest</a></div><div><a href="./gallery.html">Gallery</a></div></li>
                <li id="contact-logout"><div id="logout" onclick="logout()">Logout</div><div id="contact">Contact</div></li>
            `;

    const media = window.matchMedia("screen and (max-width: 1024px)");
    window.addEventListener('resize', function() {
        handleFooter(media);
    });

    document.addEventListener('DOMContentLoaded', () => {
        window.setTimeout(() => {
            document.body.classList.remove('fade');
        });
    });
}

function handleFooter(a){
    let ft=document.getElementsByClassName("footer")[0];
    if(a.matches) {
        ft.style.fontSize = "15px";
    }
    else {
        ft.style.fontSize = "20px";
    }
}

function hoverHome(){
    let hb=document.getElementById("gohome");
    hb.style.background = "url(../img/home_hover.jpg)";
}
function unhoverHome(){
    let hb=document.getElementById("gohome");
    hb.style.background = "url(../img/home.jpg)";
}