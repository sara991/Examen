// Cn = (CapitalInicial)* (i + 1) ^ n)
// i = interés
// n = períodos (en meses)

exports.calcularinterescompuesto = (capital, años, tasaInteres) => {
    let cuota = 0;
    let deposito= 0;
    let interes = 0;
    let interp=0;
    let tasaDecimal = tasaInteres / 100;
    const interesses = [];
   let capitalinicial=0;
   let saldofinal = 0;
   
   let capi=0;
    
    // Transformar los años en meses
    años = Math.round(años * 12);
    // Calcular la cuota
    
  
  
      
      for (var mes = 0; mes < años; ++mes)
      { 
          deposito = capital;
          cuota =((capital )* (tasaDecimal + 1)** años);


          interes =   interes + tasaDecimal;
    
    capital= (capital + interes);
    

    interesses.push({
    mes, deposito, interes,saldofinal})
     
      
      }
      
  return interesses;
  
    
    
  
  };
  
  
  
  