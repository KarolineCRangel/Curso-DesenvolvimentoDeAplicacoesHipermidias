function hotel()
{
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let dateC = document.getElementById("datec").value;
    let dateS = document.getElementById("dates").value;
    let quarto = document.getElementById("quarto");
    let child = document.getElementById("child");
    let dias = dates(dateC,dateS);
    let valorChild;
    let valorTotal;

    if(name.value === "" && phone.value === "")
    {
        alert("Preencha os campos obrigatorios!");
    }
    else
    {
        if(quarto.value === 'Single'){

            if(child.value > 0)
            {
                valorChild = child.value * 30;

                valorTotal = (valorChild + 139) * dias;
                
                return alert("Valor total: R$" + valorTotal);
            }
            else
            {
                return alert("Valor Total: R$139");
            }        
        }
    
        if(quarto.value === 'Double')
        {
            
            if(child.value > 0)
            {
                if(child.value < 3)
                {
                    valorChild = child.value * 30;
                    valorTotal = (valorChild + 220) * dias;
                    
                    return alert("Valor total: R$" + valorTotal);
                }
                else
                {
                    return alert("Numero maximo de hospedes excedido!");
                } 
            }
            else
            {
                return alert("Valor Total: R$220");
            }   
        }
    
        if(quarto.value === 'Triple')
        {
            if(child.value > 0)
            {
                if(child.value < 2)
                {
                    valorChild = child.value * 30;
                    valorTotal = (valorChild + 340) * dias;
                    
                    return alert("Valor total: R$" + valorTotal);
                }
                else
                {
                    return alert("Numero maximo de hospedes excedido!");
                } 
            }
            else
            {
                return alert("Valor Total: R$220");
            }   
        }
    }
    
}

function dates(datac,datas)
{
    let day1 = new Date(datac);
    let day2 = new Date(datas);
    let difference = day2.getTime() - day1.getTime();

    let data = new Date(difference);
    let dia = data.getDay();

    return dia;
}


