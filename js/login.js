var user_id=['test1111','test2222'];
var user_pw=['test1111','test2222'];

function idChk(id){
    for(var i=0;i<user_id.length;i++) if(user_id[i]==id) return i;
    return -1;
}

function pwChk(id_chk,pw) {
    return user_pw[id_chk] == pw;
}

function login(){
    let i_id=document.getElementById("user_id").value;
    let i_pw=document.getElementById("user_pw").value;
    
    let id_x=document.getElementById("id-x");
    let pw_x=document.getElementById("pw-x");
    id_x.style.opacity=0;
    pw_x.style.opacity=0;
    let id_chk=idChk(i_id);

    if(id_chk==-1) {
        id_x.style.opacity=1;
        return -1;
    }
    if(!pwChk(id_chk,i_pw)){
        pw_x.style.opacity=1;
        return -2;
    }
    sessionStorage.setItem("myLogin",i_id);
    location.href="./page/mainPage.html";
}