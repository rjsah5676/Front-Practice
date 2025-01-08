function getStyles() {
    let bd=document.querySelector('body');
    bd.style.backgroundColor='#121212';
    bd.style.userSelect='none';

    let ft=document.getElementsByClassName("footer")[0];
    ft.innerHTML = `Copyright 2024. 
    <a href="https://github.com/rjsah5676/Front-Practice" 
    style="text-decoration:none; color:#a2a2a2;">이건모.</a> All Right Reserved.`;
    ft.style.widdth="100%";
    ft.style.height="60px";
    ft.style.lineHeight="60px";
    ft.style.color="#a2a2a2";
    ft.style.fontSize="20px";
    ft.style.zIndex="-1";
    ft.style.textAlign="center";
}