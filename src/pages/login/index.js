const onClickLogin = async() => {
    const email = document.getElementById("input-email").value;
    if (email.lenght <5 || !email.includes("@")){
        alert("Email invalido");
        return;
    }
    
    window.open("../member_area/index.html", "_self");
};