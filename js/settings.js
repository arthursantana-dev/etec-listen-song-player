document.getElementById('btn_edit').addEventListener("click", () =>{
    document.querySelector('#username').style.backgroundColor="white";
    document.querySelector('#username').style.color="black";
    document.querySelector('#username').style.border="solid 1px black";
    document.querySelector('#username').style.borderRadius=".5rem";
    document.querySelector('#username').readOnly = false;
    document.querySelector('#username').removeAttribute("value");
    check = document.querySelector("#btn_check").style.display="block";
});

document.getElementById('btn_check').addEventListener("click", () => {
    username = document.getElementById('username').value
    document.querySelector("#btn_check").style.display="none";
    document.querySelector('#username').style.backgroundColor="transparent";
    document.querySelector('#username').style.color="white";
    document.querySelector('#username').style.border="none";
    document.querySelector('#username').style.borderRadius="0";
    document.querySelector('#username').readOnly = true;
    document.querySelector('#username').setAttribute("value", username);
});

