var pacientes = document.querySelectorAll(".paciente")
var tabela = document.querySelector("#tabela-pacientes")
var adicionar = document.querySelector('.adicionar')

function calcularImcGeral(){
    pacientes.forEach(paciente => {
        var peso = paciente.querySelector(".info-peso")
        var altura = paciente.querySelector(".info-altura")
        var imc= paciente.querySelector(".info-imc")

        if(peso.textContent <=0 || peso.textContent>=1000){
            imc.innerHTML = (`Peso invalida`);
            paciente.classList.add("paciente-invalido")

        }else {if(altura.textContent <=0 || altura.textContent>=1000){
            imc.innerHTML = (`Altura invalida`);
            paciente.classList.add("paciente-invalido")

        }else{
            imc.innerHTML = calcularImc(peso.textContent,altura.textContent,2);
        }}
    }
    );
}

function calcularImc(peso,altura,casas){
    return (peso/(altura*altura)).toFixed(casas);
}

adicionar.onclick = function(event){
    event.preventDefault();
    validarDadoos();

};

document.querySelector("body").onload = calcularImcGeral;


    
