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
              
       $("#departamentoss").append(`
            <tr>  
            <td><b>${document.getElementById("input_nombreDpto").value}</b></td>
            <td>${document.getElementById("input_codigoDpto").value}</td>
            <td>${document.getElementById("input_areasDpto").value}</td>
            <td>${document.getElementById("input_responsableDpto").value}</td>
            <td>${document.getElementById("input_emailDpto").value}</td>
            <td>
            <div class="btn-group open">
                <button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    Action <span class="caret"></span>
                </button>
                <ul class="dropdown-menu dropdown-default pull-right" role="menu">

                    <!-- teacher EDITING LINK -->
                    <li>
                        <a href="#Edit">
                            <i class="entypo-pencil"></i>
                            Editar                                </a>
                    </li>
                    <li>
                        <a href="#Perfil">
                            <i class="entypo-user"></i>
                            Perfil                                </a>
                    </li>
                    
                </ul>
            </div></td>
            </tr>
       
        `);
  }

 $('#btn-info').on('click', load);



 $("#btn_bor").click(function (){
    $("#listass").hide(2000, function () {
        $("#listass").remove() (location.reload());
        
    });
    
})

























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
    
