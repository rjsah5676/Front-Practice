function getStyles() {
    let bd=document.querySelector('body');
    bd.style.backgroundColor='#121212';
    bd.style.userSelect='none';

    let ft=document.getElementsByClassName("footer")[0];
    if(ft!=null) {
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
    }

    var user_name_db=getStore("myName");

    let hd=document.getElementsByClassName("header")[0];
    if(hd!=null)
        hd.innerHTML = `
                <li id="logo"><a href="./mainPage.html">GM LEE</a></li>
                <li id="nav"><div><a href="./guest.html">Guest</a></div><div><a href="./diary.html">Diary</a></div><div><a href="./gallery.html">Gallery</a></div><div><a href="./project.html">Project</a></div></li>
                <li id="contact-logout"><div id="logout" onclick="logout()">Logout</div><div id="contact" onclick="openContact(1)">Contact</div><h6>Welcome. `+user_name_db+`</h6></li>
            `;

    let cc=document.getElementById("contact-container");
    if(cc!=null) {
        cc.innerHTML = `
        <div id="contact-box">
            <div id="contact-img-info">
                <div id="contact-img"></div>
            </div>
            <ul>
                <li class="contact-name">
                    Gunmo Lee
                </li>
                <li class="contact-info" id="contact-tel">
                    Tel.&nbsp;&nbsp; 010-6385-4676
                </li>
                <li class="contact-info" id="contact-email">
                    Email.&nbsp;&nbsp; rjsah5676@gmail.com
                </li>
            </ul>
            <button id="exit-button" onclick="openContact(0)">X</button>
        </div>
        `;
    }

    window.addEventListener('resize', function() {
        handleFooter(window.innerWidth);
    });

    document.addEventListener('DOMContentLoaded', () => {
        window.setTimeout(() => {
            document.body.classList.remove('fade');
        });
    });
}

function handleFooter(a){
    let ft=document.getElementsByClassName("footer")[0];
    if(a<1024) {
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