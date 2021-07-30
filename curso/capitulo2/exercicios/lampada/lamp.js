var element = document.getElementById('lamp');

element.onclick = function() {

    if (element.src.match("lampada_on"))
    {
        element.src="/lampada/img/lampada_off.gif";
    }
    else
    {
        element.src="/lampada/img/lampada_on.gif";
    }
};