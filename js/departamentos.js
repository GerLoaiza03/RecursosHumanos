// Coder Pelis!
const departamentos = [];
let valorDolar;

function cargarDpto() {
  // Ajax
  $.getJSON('data/departamentos.json', (res, estado) => {
    if (estado === "success") {
      console.log(res);
      res.map(p=>departamentos.push(p));
    } else {
      console.log('Error al cargar departamentos.')
    }
  });
}

function agregarDptoADom() {
  for(departamento of departamentos) {
    $('#departamentoss').append(`
    
        
      <tr id="departamento_${departamento.id}">
      
      <td><b>${departamento.nombreDpto}</b></td>
      <td>${departamento.codigoDpto}</td>
      <td>${departamento.areasDpto}</td>
      <td>${departamento.responsableDpto}</td>
      <td>${departamento.emailDpto}</td>
      
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
                  <li class="divider"></li>

                  <!-- teacher DELETION LINK -->
                  <li>
                      <a href="#" onclick="confirm_modal_hard_reload('#id');">
                          <i class="entypo-trash"></i>
                          Borrar                                </a>
                  </li>
              </ul>
          </div>
      </td>
      </tr>

     
     
`);
  }
}

function filtrarYOrdenarDpto (busqueda, nombreDpto) {
  for(departamento of departamentos) {
    const coincideCodigo = departamento.codigoDpto.substr(0,busqueda.length) === busqueda;
    const coincideNombre = departamento.nombreDpto.toLowerCase() === nombreDpto.toLowerCase();
    if (coincideCodigo && coincideNombre) {
      $(`#departamento_${departamento.id}`).show();
    } else {
      $(`#departamento_${departamento.id}`).hide();
    }
  }
}

// 1) 
cargarDpto();

// 2) ready
$(() => {
  agregarDptoADom();
  $("#formBuscar").submit((e) => {
    e.preventDefault();
    const busqueda = $("#buscar").val();
    const nombreDpto = $("#nombreDpto option:selected").text();
    filtrarYOrdenarDpto(busqueda,nombreDpto);
  });
});
