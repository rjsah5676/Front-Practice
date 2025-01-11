if(sessionStorage.getItem("user_id_db")==null){
    sessionStorage.setItem("user_id_db",['test1111','test2222']);
    sessionStorage.setItem("user_pw_db",['test1111','test2222']);
    sessionStorage.setItem("user_name_db",['테스트1','테스트2']);
}

function getStore(idpw){
    let store = sessionStorage.getItem(idpw);
    return store.split(",");
}

function idChk(id){
    var user_id_db =getStore("user_id_db");
    for(var i=0;i<user_id_db.length;i++) if(user_id_db[i]==id) return i;
    return -1;
}

function pwChk(id_chk,pw) {
    var user_pw_db = getStore("user_pw_db");
    return user_pw_db[id_chk] == pw;
}

function isLogin(){
    if(sessionStorage.getItem("myLogin")!==null) {
        location.href="./page/mainPage.html";
    }
}

function logout(){
    sessionStorage.clear("myLogin");
    location.href="../index.html";
}