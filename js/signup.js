function signup(){
    let user_id = document.getElementById("user-id").value;
    let user_pw = document.getElementById("user-pw").value;
    let user_pw_chk = document.getElementById("user-pw-chk").value;
    let user_email_1 = document.getElementById("user-email-1").value;
    let user_email_2 = document.getElementById("user-email-2").value;
    let user_name = document.getElementById("user-name").value;
    let user_birth_1 = document.getElementById("user-birth-1").value;
    let user_birth_2 = document.getElementById("user-birth-2").value;
    let user_birth_3 = document.getElementById("user-birth-3").value;

    var result = 0;

    result+=checking("id-alert",user_id=="",user_id.length < 6,idChk(user_id)!=-1);
    result+=checking("pw-alert",user_pw=="",user_pw.length<8,false);
    result+=checking("pw-chk-alert",user_pw_chk=="",user_pw!=user_pw_chk,false);
    result+=checking("email-alert",user_email_1==""||user_email_2=="",!domainChk(user_email_2),false);
    result+=checking("name-alert",user_name=="",user_name.length<2,false);
    result+=checking("birth-alert",user_birth_1==""||user_birth_2==""||user_birth_3=="",birthChk(user_birth_1,user_birth_2,user_birth_3));

    if(result==6) {
        sessionStorage.setItem("user_id_db",sessionStorage.getItem("user_id_db")+","+user_id);
        sessionStorage.setItem("user_pw_db",sessionStorage.getItem("user_pw_db")+","+user_pw);
        sessionStorage.setItem("user_name_db",sessionStorage.getItem("user_name_db")+","+user_name);
        location.href="./index.html";
    }
}

function resetOpacity(a) {
    for(var i=0;i<a.length;i++) a[i].style.opacity=0;
}

function birthChk(a,b,c) {
    var two=29;
    if(b==2) {
        if(a%400==0) two=29;
        else if(a%100==0) two=28;
        else if(a%4==0) two=29;
        else two=28;
    }

    x=[31,two,31,30,31,30,31,31,30,31,30,31];
    if(isNaN(a)||isNaN(b)||isNaN(c)) return true;
    if(a<1900 || a>2024) return true;
    if(b>12 || b<1) return true;
    if(c<1 || c>x[b-1]) return true;
    return false;
}

function domainChk(email) {
    var x = -1;
    if(email.length<3) return false;
    for(var i=0;i<email.length;i++) {
        if(email[i]=='.' && x!=-1) return false;
        if(email[i]=='.') x=i;
    }
    if(x==-1) return false;
    if(email.length<x || x==0) return false;
    return true;
}

function checking(str,boolsOne,boolsTwo,boolsThree) {
    let arr=new Array();
    arr.push(document.getElementById(str+"-null"));
    if(document.getElementById(str)!=null)arr.push(document.getElementById(str));
    if(document.getElementById(str+"-2")!= null) arr.push(document.getElementById(str+"-2"));
    resetOpacity(arr);
    if(boolsOne) {
        arr[0].style.opacity=1;
        return -1;
    }
    else if(boolsTwo) {
        arr[1].style.opacity=1;
        return -1;
    } 
    else if(boolsThree) {
        arr[2].style.opacity=1;
        return -1;
    }
    return 1;
}