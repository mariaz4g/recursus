// Set cookie
function setCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/`;
}

// Get cookie
function getCookie(name)
{
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (let i = 0; i < cookies.length; i++)
    {
        const cookie = cookies[i].split('=');
        if (cookie[0] === name)
        {
        return decodeURIComponent(cookie[1]);
        }
    }
  return null;
}

var counter = 0;

function increaseCounter()
{
    var quantity = document.getElementById("1").value;
    var counterCookie = parseInt(getCookie("counterCookie"));
    var inventario = 3;
    if(isNaN(counterCookie))
        counter = 0;
    else
        counter = counterCookie;

    counter += parseInt(quantity);
    if (counter > inventario)
        counter = inventario;
    else
    if (counter < 0)
        counter = 0;
    console.log(counter);
    setCookie('counterCookie', counter);
    return location='home.html';
}



const storedCounter = getCookie('counterCookie');
console.log(storedCounter);

