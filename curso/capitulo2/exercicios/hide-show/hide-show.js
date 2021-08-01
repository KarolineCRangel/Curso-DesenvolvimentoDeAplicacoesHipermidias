var visibilidade = true;

function ocultarExibir(conteudo,enlace) { 

    if (visibilidade)
    {
        document.getElementById(conteudo).style.display = "none";
        visibilidade = false;
        document.getElementById(enlace).innerHTML = "Mostrar conteudo";
    } 
    else
    {
        document.getElementById(conteudo).style.display = "block";
        visibilidade = true;
        document.getElementById(enlace).innerHTML = "Ocultar conteudo";
    }
}