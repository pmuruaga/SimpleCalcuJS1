var operacion = "";

const setOperacion = (boton) => {
    operacion = boton.id;
    let operador = "#"
    switch(operacion){
        case "suma":    operador = "+";
                        break;
        case "resta":   operador = "-";
                        break;
        case "multi":   operador = "*";
                        break;
        case "divi":   operador = "/";
                        break;
    }
    
    document.getElementById("operador").innerHTML = operador;
};


const Operar = () => {
    let value1 = parseFloat(document.getElementById("valor1").value);
    let value2 = parseFloat(document.getElementById("valor2").value);
    let result = document.getElementById("labelResult");
    if(operacion == "" || value1 == 0 || value2 == 0 || isNaN(value1) || isNaN(value2)){
        result.innerHTML = "ERROR: Defina Operacion y Valores";
    }
    else{
        let calculo = Calcular(value1, value2);
        result.innerHTML = calculo;
    }
};

const Calcular = (value1, value2) => {    
    switch(operacion){
        case "suma":    return value1 + value2;
                        break;
        case "resta":   return value1 - value2;
                        break;
        case "multi":   return value1 * value2;
                        break;
        case "divi":    return value1 / value2;
                        break;
    }
};