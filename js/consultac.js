// Coder Pelis!
const empleados = [];
let valorDolar;

function cargarEmpleados() {
  // Ajax
  $.getJSON('data/empleados.json', (res, estado) => {
    if (estado === "success") {
      console.log(res);
      res.map(p=>empleados.push(p));
    } else {
      console.log('Error al cargar empleados.')
    }
  });
}

function agregarEmpleadosADom() {
  for(empleado of empleados) {
    $('#empleadoss').append(`
    
        
      <tr id="empleado_${empleado.id}">
      
      <td><b>${empleado.nombreFull}</b></td>
      <td>${empleado.numDocumento}</td>
      <td>${empleado.email}</td>
      <td>${empleado.ciudad}</td>
      <td>${empleado.nombreEmpresa}</td>
      <td>${empleado.salario}</td>
      <td><img class="pic_empleado" width=150 height=150 src="${empleado.image}"></td>
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

function filtrarYOrdenar(busqueda, nombreEmpresa) {
  for(empleado of empleados) {
    const coincideNombre = empleado.numDocumento.substr(0,busqueda.length) === busqueda;
    const coincideEmpresa = empleado.nombreEmpresa.toLowerCase() === nombreEmpresa.toLowerCase();
    if (coincideNombre && coincideEmpresa) {
      $(`#empleado_${empleado.id}`).show();
    } else {
      $(`#empleado_${empleado.id}`).hide();
    }
  }
}

// 1) 
cargarEmpleados();

// 2) ready
$(() => {
  agregarEmpleadosADom();
  $("#formBuscar").submit((e) => {
    e.preventDefault();
    const busqueda = $("#buscar").val();
    const nombreEmpresa = $("#nombreEmpresa option:selected").text();
    filtrarYOrdenar(busqueda,nombreEmpresa);
  });
});
