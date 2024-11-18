var formulario = document.querySelector(".formulario-de-cadastro");

function obterDados(formulario){
    var paciente = {
        nome:formulario.nome,
        peso:formulario.peso,
        altura:formulario.altura,
        gordura:formulario.gordura,
        imc: calcularImc(formulario.peso.value,formulario.altura.value,2)

    }
    return paciente;
}

function validarDadoos(){
    var paciente = obterDados(formulario);
    if(paciente.nome.value==""){
        alert("Preencha todos os campos");
        paciente.nome.classList.add("campo-invalido")
    }else{
        paciente.nome.classList.remove("campo-invalido")
        if(paciente.peso.value<=0 || paciente.peso.value>=300){
            alert("peso invalido")
            paciente.peso.classList.add("campo-invalido")

        }else{
            paciente.peso.classList.remove("campo-invalido")

            if(paciente.altura.value<=0 || paciente.altura.value>=5.0){
                alert("altura invalida");
                paciente.altura.classList.add("campo-invalido")

            }else{
                paciente.altura.classList.remove("campo-invalido")

                if(paciente.gordura.value<=0 || paciente.gordura.value>=100){
                    alert("gordura invalida")
                    paciente.gordura.classList.add("campo-invalido")


                }else{
                    paciente.gordura.classList.remove("campo-invalido");

                    adicionarPaciente(paciente);
                    limparlinhas();
                }
            }
        }
    }
}

function adicionarPaciente(paciente){
    var pacienteTr = document.createElement("tr");

    var nomeTd = montaTd(paciente.nome.value,"info-nome")
    var pesoTd = montaTd(paciente.peso.value,"info-peso")
    var alturaTd = montaTd(paciente.altura.value,"info-altura")
    var gorduraTd = montaTd(paciente.gordura.value,"info-gordura")
    var imcTd = montaTd(paciente.imc,"info-imc")
    console.log(paciente)

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabela.appendChild(pacienteTr);
}

function montaTd(dados,classe){
    var td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe)
    return td;
}

function limparlinhas(){
    document.querySelector("#fm-nome").value="";
   document.querySelector("#fm-peso").value="";
    document.querySelector("#fm-altura").value="";
   document.querySelector("#fm-gordura").value="";
}
