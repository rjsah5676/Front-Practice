window.addEventListener('resize', function() {
    handleMain(window.innerWidth);
});

function handleMain(winWidth) {
    let mc = document.getElementById('main-page-box');
    let bt = document.getElementById('plus-button');
    if(winWidth<1024) {
        mc.style.display='none';
        bt.style.display='block';
    } else {
        mc.style.display='block';
        bt.style.display='none';
    }
}

function clickPlus(){
    window.open('popupMain.html',"gunmo-lee","location=no,width=1350,height=600");
}