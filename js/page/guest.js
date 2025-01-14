var page=1;

function drawList()
{
    var uname=document.getElementsByClassName('guest-input-name')[0];
    uname.value=getStore("myName");
    var ugd = localStorage.getItem("user_guest_db");
    var arr = JSON.parse(ugd);
    var gl = document.getElementById("guest-list");
    gl.innerHTML="";
    for(var i=arr.length-1;i>=0;i--) {
        gl.innerHTML+=`
        <li class="guest-chat-box"><div class="container">
                        <div class='message-who'>`+arr[i].name+`</div>
                        <div class="message-container">
                        <div class='message-box'>
                            <ul>
                                <li class="message-date">`
                                    +arr[i].date+
                                `</li>
                                <li class="message-text">`
                                    +arr[i].text+
                                `</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </li>
        `;
    }
}

function submitText()
{
    var ugd = localStorage.getItem("user_guest_db");
    var uname=document.getElementsByClassName('guest-input-name')[0].value;
    var utext=document.getElementsByClassName('guest-input-info')[0].value;
    if(utext.length>0 && utext.length<50) {
        var now = new Date();
        var year = now.getFullYear();
        var month = ('0' + (now.getMonth() + 1)).slice(-2);
        var day = ('0' + now.getDate()).slice(-2);
        var udate = year + '.' + month  + '.' + day;
        let params =  {
            name:uname,
            date:udate,
            text:utext
        };
        var testList = JSON.parse(ugd);
        testList.push(params);
        localStorage.setItem("user_guest_db",JSON.stringify(testList));
        location.href="./guest.html";
    }
}


function resetData()
{
    document.getElementsByClassName('guest-body')[0].scrollTo({top:0,left:0,behavior:'smooth'});
}