var nombreDpto = document.getElementById("input_nombreDpto").value;
var codigoDpto = document.getElementById("input_codigoDpto").value; 
var responsableDpto = document.getElementById("input_responsableDpto").value; 
var emailDpto = document.getElementById("input_emailDpto").value; 
var input_telefonoDpto = document.getElementById("input_telefonoDpto").value; 
var areasDpto = document.getElementById("input_areasDpto").value; 




$("#form_eventos").submit((e)=>{
      
e.preventDefault();
    console.log(document.getElementById("input_nombreDpto").value);
    console.log(document.getElementById("input_codigoDpto").value);
    console.log(document.getElementById("input_emailDpto").value);
    console.log(document.getElementById("input_telefonoDpto").value);
    console.log(document.getElementById("input_areasDpto").value);
  
});


function load() {
        
    $("#listass").append(`
        <p>${"Hola " + document.getElementById("input_nombreDpto").value + " Tu Salario Actual es " + document.getElementById("input_codigoDpto").value}</p>
        
    `);
        
       $("#listass").append(`
        <textarea> ${"Señor@ " + document.getElementById("input_nombreDpto").value + ", Tu Aumento en base a los datos ingresados es de " + document.getElementById("input_areasDpto").value} </textarea>
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
    
