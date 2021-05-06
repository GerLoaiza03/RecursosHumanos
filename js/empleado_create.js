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
var nombreEmpresa = document.getElementById("input_nombreEmpresa").value; 




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
    console.log(document.getElementById("input_nombreEmpresa").value);
  
});


function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }



function load() {
              
    $("#empleadoss").append(`
         <tr>  
         <td><b>${document.getElementById("input_nombreFull").value}</b></td>
         <td>${document.getElementById("input_numDocumento").value}</td>
         <td>${document.getElementById("input_emailEmpleado").value}</td>
         <td>${document.getElementById("input_ciudadEmpleado").value}</td>
         <td>${document.getElementById("input_nombreEmpresa").value}</td>
         <td>${document.getElementById("input_salEmpleado").value}</td>
         <td><img id="img">Foto Subida</img></td>
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

