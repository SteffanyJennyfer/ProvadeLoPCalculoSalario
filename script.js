// Entrada
var SalarioBruto = parseFloat(prompt("Qual seu salario bruto? "));
var INSS;

//Calculando INSS
if(SalarioBruto <= 1212){
  INSS = SalarioBruto - (SalarioBruto*0.075) //7,5%
}
else{
  if(SalarioBruto <= 2427.35){
    INSS = (SalarioBruto - ((SalarioBruto - 1212.01) * 0.09) - 82.5)
  } else{
  if(SalarioBruto <= 3641.03){
    INSS = (SalarioBruto - ((SalarioBruto - 2427.36) * 0.12) - 181.8123)
  } else{
  if(SalarioBruto <= 7087.22){
    INSS = (SalarioBruto - ((SalarioBruto - 3641.04) * 0.14) - 314.0199)
  } else{
    if(SalarioBruto > 7087.23){
      INSS = SalarioBruto - 828.39
    }
  }
}
}
}

var salarioLiquido;

if(INSS <= 1903.98){
  salarioLiquido = INSS
}
else if(INSS <= 2851.65){
  salarioLiquido = (INSS - ((INSS - 1903.98) * 0.075))
} else{
  if(INSS <= 3751.05){
    salarioLiquido = (INSS - ((INSS - 2826.66) * 0.15) - 69.20)
  } else{
    if(INSS <= 4664.68){
      salarioLiquido = (INSS - ((INSS - 3751.06) * 0.225) - 207.86)
    } else{
      if(INSS >= 4664.69){
        salarioLiquido = (INSS - ((INSS - 4664.68) * 0.275) - 413.43)
      }
    }
  }
}

alert(salarioLiquido.toFixed(2))