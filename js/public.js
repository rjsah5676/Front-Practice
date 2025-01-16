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

function settingMenu() {
    menu = new Menu("#myMenu");
    var item1 = new Item("list", "fas fa-bars", "");
    var item2 = new Item("home", "fas fa-sign-out-alt", "", "");
    var item3 = new Item("up", "fas fa-id-card", "", "");
    var item4 = new Item("my-info", "fas fa-exchange-alt", "",
        `<ul id='myinfo'>
        <li>ㅎㅇㅇ</li>
        <li>ㅎㅇㅇㅇ</li>
        <li>ㅎㅇㅇㅇㅇ</li>
        </ul>`);
    var item5 = new Item("info-contents", "fas fa-exchange-alt", "","");

    menu.add(item1);
    menu.add(item2);
    menu.add(item3);
    menu.add(item4);
    menu.add(item5);

    let menuList=document.getElementById("list");

    let homeButton=document.getElementById("home");
    var upButton=document.getElementById("up");
    var myInfoButton=document.getElementById("my-info");
    var contents=document.getElementById("info-contents");

    contents.innerHTML=
    `
    <div id='contents-line'></div>
    <ul>
        <li><div id='dot'>●</div><div id='contents-date'>1997.12 ~ </div><div id='contents-text'>출생</div></li>
        <li><div id='dot'>●</div><div id='contents-date'>2013.03 ~ 2016.02</div><div id='contents-text'>풍생고등학교 입학</div></li>
        <li><div id='dot'>●</div><div id='contents-date'>2016.03 ~ 2022.02</div><div id='contents-text'>아주대학교 소프트웨어학과 입학</div></li>
        <li><div id='dot'>●</div><div id='contents-date'>2017.03 ~ 2018.12</div><div id='contents-text'>육군 5사단 근무</div></li>
        <li><div id='dot'>●</div><div id='contents-date'>2021.06 ~ 2021.08</div><div id='contents-text'>(주) 트루피플 인턴 실습</div></li>
        <li><div id='dot'>●</div><div id='contents-date'>2024.11 ~</div><div id='contents-text'>한국ICT인재개발원 교육</div></li>
    </ul>
    `
    ;

    homeButton.addEventListener('click', () => {
        window.location.href = './mainPage.html';
    });

    upButton.addEventListener('click', () => {
        window.scrollTo({top:0,left:0,behavior:'smooth'});
    });
    var clicked=false;

    menuList.addEventListener('mousedown', () => {
        if(clicked) {
            contents.style.opacity=0;
            clicked = !clicked;
        }
    });

    myInfoButton.addEventListener('click', () => {
        if(!clicked) {
            contents.style.left=getNumberFromPixel(myInfoButton.style.left)-470+'px';
            contents.style.top=getNumberFromPixel(myInfoButton.style.top)-220+'px';
            contents.style.opacity=1;
        }
        else {
            contents.style.opacity=0;
        }
        clicked = !clicked;
    });
}

function getNumberFromPixel(_px) {
    if (_px == null || _px == "") {
        return 0;
    }
   
    _px = _px + "";
   
    if (_px.indexOf("px") > -1) {
        _px = _px.replace("px", "");
    }
   
    if (_px.indexOf("PX") > -1) {
        _px = _px.replace("PX", "");
    }
   
    var result = parseInt(_px, 10);
    if ((result + "") == "NaN") {
        return 0;
    }
   
    return result;
}