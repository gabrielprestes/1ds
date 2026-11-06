function par(n){
    if(n%2==0){
        return "Par";
    }
    return "ímpar!";
}

function tipo(n){
    if(n>0){
        return "Positivo";
    }
else if(n==0){
    return "Zero";
}
else if(n<0){
    return "Negativo";
}
  return "Valor inválido!";
}