function Saludo() {
    alert("bienvenido a mi sitio")
}

function suma() {
    // declaramos las variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    
    
    // solicitamos valores
    A = parseInt(prompt("ingrese el primer valor de la suma"));
    B = parseInt(prompt("ingrese el segundo valor a sumar"));
    
    // realizamos procesos
    
    S = A + B;
    
    // PRESENTAMOS EL RESULÑTADO
    
    alert("el resultado de la suma es: " +  S);
        
    }

function operaciones() {
    let A1 = 0;
    let B1 = 0;
    let S = 0;
    let R = 0;
    let W = 0;
    let X = 0;

    A1=parseInt(prompt("ingrese el primer valor a calcular"))
    B1=parseInt(prompt("ingrese eñ segundo valor"))

}


function mayor() {
    alert("algoritmo que determinara el numero de mayor de los ingresados por el usuario")

    let N1 = 0;
    let N2 = 0;

    N1 = parseInt(prompt("ingrese el primer valor"))
    N2= parseInt(prompt("ingrese el segundo valor"))

    if (N1 == N2) {
        alert("los valores ingresados son iguales nose estupido y lea bien")
        
    }
    else if (N1 > N2) {
    alert("el primer numero es mayor que el segundo")
        
    }

    else {
        alert("el segundo valor es mayor que el primero")
    }

}




    function menor() {
        alert("algoritmo que determinara el numero de menor de los ingresados por el usuario")
    
        let N1 = 0;
        let N2 = 0;
    
        N1 = parseInt(prompt("ingrese el primer valor"))
        N2= parseInt(prompt("ingrese el segundo valor"))
    
        if (N1 == N2) {
            alert("los valores ingresados son iguales nose estupido y lea bien")
            
        }
        else if (N1 < N2) {
        alert("el primer numero es menor que el segundo")
            
        }
    
        else {
            alert("el segundo valor es menor que el primero")
    
        }

    }

        // el colegio abc requiere un algoritmo o un sistema que permita a los diferentes estudiantes ingresar su nombre, materia, y 7 calificaciones y este le indique si aprobo o reprobo la materia teniendo en cuenta que se aprueba  si el puntaje es mayor  o igual a 6


        function colegio() {
           
            let N = 0;
            let M = 0;
            let x1 =0;
            let x2 =0;
            let x3 =0;
            let x4 =0;
            let x5 =0;
            let x6 =0;
            let x7 =0;
            let t =0;
            let t2= 0;
           
           
           
           
            N= prompt("ingrese su nombre completo")
            M=prompt("ingrese la materia ")
            x1=parseInt(prompt("ingrese la primera nota"))
            x2= parseInt(prompt("ingrese la segunda nota"))
            x3=parseInt(prompt("ingrese la tercera nota"))
            x4= parseInt(prompt("ingrese la cuarta nota"))
            x5=parseInt(prompt("ingrese la quinta nota"))
            x6=parseInt(prompt("ingrese la sexta nota"))
            x7=parseInt(prompt("ingrese la septima nota"))

            t=x1+x2+x3+x4+x5+x6+x7
            t2= t/7


            alert("el estudiante " + N )
            alert("obtuvo un promedio de " + t2)
            alert( `en la materia ${M}`)

          if (t2 <= 5) {
            alert("por desgracia perdio")
            
          }  else {
            alert("felicidades paso")
            
         } 
            
      
        }

    // se requiere un sistea de algoritmos que al ingresar un valor en dolares nos diga que cuanto equivalen en pesos conlombianos, euros, y soles
function convertidor() {
    

    let d=0
    let z=0
    let c=0
    let e=0
    let s=0

    z=parseInt(prompt("ingrese a que quiere comvertir 1. para pesos colombianos, 2. para euros, 3 para soles peruanos"))
    d=parseInt(prompt("por favor ingrese el numero de dolares a convertir"))

   

    c=d * 4091 
    e=d * 0,92
    s=d * 3,72

    

 if (z=1) {
    alert("la cantidad de dolares ingresados convertidos en pesos colombianos equivale a: " + c)
        
    } 
    
    else if (z=2) {
        alert("la cantida de de dolares ingresados convertidos en euros equivalen a:" + e )
        
    }

    else if (z=3) {
        alert("la cantidad de dolares ingresados convertidos a soles peruanos equivalen a: " + s )
    }
    

    
   

}

    // UN INDIVIDUO DECEA Invertir su capital en un banco y requiere de saber cuanto dinero ganara despues de n numero de años teniendo en cuenta que el banco paga un interes del 1.3% mensual


        
    

 function circulo() {

        // capturamos en una constante el elemento html que deseamos manipular
        const figura = document.getElementById("figura");
        figura.classList.add("circulo");
        
    }

    function movetop() {
        const figura = document.querySelector("#figura");
        figura.classList.toggle("top");
        
    }

    function panellateral() {
        const panel = document.getElementById("panel-lateral");

        panel.classList.toggle("active");
        
    }

    function gif(){
        const figura = document.getElementById("figura");

        figura.classList.toggle("gif");

        
    }


    function bottom() {

        const figura = document.querySelector("#figura");
        figura.classList.toggle("bottom");
        
    }

    function left() {

        const figura = document.querySelector("#figura");
        figura.classList.toggle("left");
        
    }

    function rhigt() {

        const figura = document.querySelector("#figura");
        figura.classList.toggle("rhigt");
        
    }

    function horizontal() {

        const figura = document.querySelector("#figura");
        figura.classList.toggle("horizontal");
        
    }

    function vertical() {

        const figura = document.querySelector("#figura");
        figura.classList.toggle("vertical");
        
    }

    function degradado() {

        const figura = document.querySelector("#figura");
        figura.classList.toggle("degradado");
        
    }

    function rombo() {

        const figura = document.querySelector("#figura");
        figura.classList.toggle("rombo");
        
    }

    function triangulo() {

        const figura = document.querySelector("#figura");
        figura.classList.toggle("triangulo");
        
    }


    function panelsuperior() {
        const panel = document.getElementById("panel-superior");

        panel.classList.toggle("active");
        
    }
    