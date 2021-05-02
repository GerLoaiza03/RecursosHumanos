var full_name = document.getElementById("input_fullname").value;
var celular = document.getElementById("input_cel").value; 
var email = document.getElementById("input_email").value; 
var ciudad = document.getElementById("input_ciudad").value; 
var empresa = document.getElementById("input_empresa").value; 
var salario = document.getElementById("input_salario").value; 
var porcentaje = document.getElementById("input_porcentaje").value; 
/* var años_cal = document.getElementById("input_año_cal").value; */
var aumento = 0;
 
 parseInt(porcentaje);
 parseFloat(salario);
 /* parseInt(años_cal);  */
 parseInt(aumento);
 

/*function mostrarAumentos(){
    
    for(var i=1; i<= años_cal; i++){
        calcularAumento();  
        document.getElementById("requerimientos").value = "Año " + i + " es " + aumento.toFixed();

        document.getElementById("requerimientos").value = `En el Año ${i} Su Aumento es ${aumento.toFixed()}`;

       alert("En el Año " + i + " su Aumento es = " + aumento.toFixed());


        let parrafo = document.createElement("listass")
        parrafo.innerHTML = "<h2> ¡Su Aumento es " + aumento.toFixed() + "! </h2>";        
        document.body.appendChild(parrafo);


        salario = aumento;
        aumento = 0;
    }
}*/


$("#form_eventos").submit((e)=>{
      
e.preventDefault();
    console.log(document.getElementById("input_fullname").value);
    console.log(document.getElementById("input_cel").value);
    console.log(document.getElementById("input_email").value);
    console.log(document.getElementById("input_ciudad").value);
    console.log(document.getElementById("input_empresa").value);
    console.log(document.getElementById("input_salario").value);
    console.log(document.getElementById("input_porcentaje").value);
    /* console.log(document.getElementById("input_año_cal").value); */
});


function load() {
    $("#listass").append($('<img>',{id:'theImg',src:'img/employeer.png'}))
    
    $("#listass").append(`
        <p>${"Hola " + document.getElementById("input_fullname").value + " Tu Salario Actual es " + document.getElementById("input_salario").value}</p>
        <p>${"Actualmente Trabajas Para " + document.getElementById("input_empresa").value + " En la Ciudad de " + document.getElementById("input_ciudad").value}</p>
    `);

   


    aumento = (Number(aumento) + (Number(document.getElementById("input_salario").value) + (Number(document.getElementById("input_salario").value) * (Number(document.getElementById("input_porcentaje").value)/100))));

    /*var aumentoFinal = (aumento + (Number(salario) + (Number(salario) * (porcentaje/100))));*/
     
    parseInt(aumento);
        
       $("#listass").append(`
        <textarea> ${"Señor@ " + document.getElementById("input_fullname").value + ", Tu Aumento en base a los datos ingresados es de " + aumento} </textarea>
        `);
  }

 $('#btn_inner').on('click', load);





$( "#btn_desple" ).click(function () {
    if ( $( "#listass" ).first().is( ":hidden" ) ) {
      $( "#listass" ).slideDown( "slow" );
    } else {
      $( "#listass" ).hide("slow");
    }
    
    
});



$("#btn_bor").click(function (){
    $("#listass").hide(2000, function () {
        $("#listass").remove() (location.reload());
        
    });
    
})


$('#scrollup').click(() => {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 2000);
    });
    
