function clickPersonal(){
    let pbutton = document.getElementById("personal-button");
    let tbutton = document.getElementById("team-button");

    let pb = document.getElementById("personal-box");
    let tb = document.getElementById("team-box");

    pb.style.transform="translateX(0px)";
    tb.style.transform="translateX(0px)";

    tbutton.style.backgroundColor='#121212';
    tbutton.style.color='white';
    tbutton.style.fontWeight=400;

    pbutton.style.backgroundColor='white';
    pbutton.style.color='#121212';
    pbutton.style.fontWeight=600;
}

function clickTeam(){
    let pbutton = document.getElementById("personal-button");
    let tbutton = document.getElementById("team-button");

    let pb = document.getElementById("personal-box");
    let tb = document.getElementById("team-box");

    pb.style.transform="translateX(-960px)";
    tb.style.transform="translateX(-960px)";

    pbutton.style.backgroundColor='#121212';
    pbutton.style.color='white';
    pbutton.style.fontWeight=400;

    tbutton.style.backgroundColor='white';
    tbutton.style.color='#121212';
    tbutton.style.fontWeight=600;
}