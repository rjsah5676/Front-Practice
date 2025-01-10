function isLogin(){
    console.log(sessionStorage.getItem("myLogin"));
    if(sessionStorage.getItem("myLogin")!==null) {
        location.href="./page/mainPage.html";
    }
}