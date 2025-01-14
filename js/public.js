if(sessionStorage.getItem("user_id_db")==null){
    sessionStorage.setItem("user_id_db",['test1111','test2222']);
    sessionStorage.setItem("user_pw_db",['test1111','test2222']);
    sessionStorage.setItem("user_name_db",['테스트1','테스트2']);
}

if(localStorage.getItem("user_guest_db")==null) {
    var data = [
        {
            name:"이건모",
            date:"2024.12.26",
            text:"안녕하세요 첫 글 입니다."
        },
        {
            name:"테스트1",
            date:"2024.12.27",
            text:"안녕하세요 두번째 글 입니다."
        },
        {
            name:"테스트2",
            date:"2024.12.29",
            text:"안녕하세요 세번째 글 입니다."
        },
        {
            name:"안준현",
            date:"2025.01.02",
            text:"나는 배가 고프다."
        },
        {
            name:"성기훈",
            date:"2025.01.08",
            text:"안녕하세요 잘 보고 갑니다~"
        },
        {
            name:"성수ICT",
            date:"2024.01.13",
            text:"반갑습니다."
        }
    ];
    console.log(JSON.stringify(data));
    localStorage.setItem("user_guest_db",JSON.stringify(data));
}

function getStore(idpw){
    let store = sessionStorage.getItem(idpw);
    if(store!=null)
        return store.split(",");
    return "";
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

function openContact(a){
    let ct=document.getElementById("contact-container");
    ct.style.opacity=a;
    if(a==1) {
        ct.style.zIndex=10;
    }
    if(a==0) {
        ct.style.zIndex=-1;
    }
}