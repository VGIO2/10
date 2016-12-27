function calcular(){
    
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var psalida =  document.getElementById("salida");
    
    
    var vara=a.value;
    var varb=b.value;
    var suma=parseInt(vara)+parseInt(varb);
    
  if(vara==10 || varb==10){
      psalida.innerHTML="1";
  }
    else if(suma==10){
        psalida.innerHTML="1";
        
    }
    
    else{
        psalida.innerHTML="0";
    }
    
}