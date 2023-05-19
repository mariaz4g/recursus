function inputCheck()
{
    var User = document.getElementById("1");
    var Pass = document.getElementById("2");
    var prompt = document.getElementById("3");

    if (User.value == "209030" && Pass.value == "1234")
    {
        return location='home.html';
    }
    else
    {
        prompt.innerHTML = "Contraseña o usuario incorrecto";
        return;
    }
}