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

function increaseCounter(cookieName, id, inventario)
{
    var quantity = document.getElementById(id).value;
    var counterCookie = parseInt(getCookie(cookieName));

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
    setCookie(cookieName, counter);
    return location='home.html';
}
var boolean = false;

function showNotification() {
    var notificationBox = document.getElementById("notification");
    if (boolean && storedCounter == 3)
        notificationBox.style.display = "none";
    else
    {
        notificationBox.innerHTML = "Recurso 1 disponible";
        notificationBox.style.display = "block";
    }
    console.log(boolean);
    boolean = !boolean;
}
function toggleDisplay(cookieName, id, inventario) {
    var displayText = document.getElementById(id);

    if (displayText.style.display === "none" && getCookie('counterCookie') == 3)
    {
      displayText.style.display = "block";
    } else
    {
      displayText.style.display = "none";
    }
  }


const storedCounter = getCookie('counterCookie');
console.log(storedCounter);