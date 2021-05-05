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
    $('#empleados').append(`
      <div class="container empleado" id="empleado_${empleado.id}">
        <div class="row py-3">
          <div class="col-3 px-3">
            
          </div>
            <div class="col-6 consulta">
                <img class="pic_empleado" width=150 height=150 src="${empleado.image}">
                <h2>${empleado.nombreFull}</h2>
                <p>N° Identificación: ${empleado.numDocumento}</p>
                <p>Email: ${empleado.email}</p>
                <p>Ciudad: ${empleado.ciudad}</p>
                <p>Empresa: ${empleado.nombreEmpresa}</p>
                <p>Salario: ${empleado.salario}</p>
            </div>
        </div>
      </div>
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
