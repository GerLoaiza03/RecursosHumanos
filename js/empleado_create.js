var nombreFull = document.getElementById("input_nombreFull").value;
var numDocumento = document.getElementById("input_numDocumento").value; 
var fechNac = document.getElementById("input_fechNac").value; 
var genEmpleado = document.getElementById("input_genEmpleado").value; 
var telEmpleado = document.getElementById("input_telEmpleado").value; 
var ciudadEmpleado = document.getElementById("input_ciudadEmpleado").value; 
var dirEmpleado = document.getElementById("input_dirEmpleado").value; 
var emailEmpleado = document.getElementById("input_emailEmpleado").value; 
var nacEmpleado = document.getElementById("input_nacEmpleado").value; 
var salEmpleado = document.getElementById("input_salEmpleado").value; 
var fotoEmpleado = document.getElementById("input_fotoEmpleado").value; 




$("#form_eventos").submit((e)=>{
      
e.preventDefault();
    console.log(document.getElementById("input_nombreFull").value);
    console.log(document.getElementById("input_numDocumento").value);
    console.log(document.getElementById("input_fechNac").value);
    console.log(document.getElementById("input_genEmpleado").value);
    console.log(document.getElementById("input_telEmpleado").value);
    console.log(document.getElementById("input_ciudadEmpleado").value);
    console.log(document.getElementById("input_dirEmpleado").value);
    console.log(document.getElementById("input_emailEmpleado").value);
    console.log(document.getElementById("input_nacEmpleado").value);
    console.log(document.getElementById("input_salEmpleado").value);
    console.log(document.getElementById("input_fotoEmpleado").value);
  
});


function load() {
        
    $("#listass").append(`
        <p>${"Hola " + document.getElementById("input_nombreFull").value + " Tu Salario Actual es " + document.getElementById("input_numDocumento").value}</p>
        
    `);
        
       $("#listass").append(`
        <textarea> ${"Señor@ " + document.getElementById("input_fechNac").value + ", Tu Aumento en base a los datos ingresados es de " + document.getElementById("input_genEmpleado").value} </textarea>
        `);
  }

 $('#btn-info').on('click', load);





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
    
