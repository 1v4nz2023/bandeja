$(document).ready(function () {
  getParam();
});

let UserObject;
//let table_Programas = new DataTable('#ID_tb_Programas');
let table_Programas = $("#ID_tb_Programas").DataTable({
  responsive: true,
  oLanguage: {
    sInfo: "Mostrando _START_ de _END_ de _TOTAL_ entradas", // text you want show for info section
    sSearch: "Buscar ",
    sLengthMenu: "Mostrando _MENU_ entradas",
    sInfoFiltered: " - filtrando de  _MAX_ registros",
    sZeroRecords: "No hay registros que mostrar",
    sInfoEmpty: "Mostrando _START_ de _END_ de _TOTAL_ entradas",
    oPaginate: {
      sNext: "Siguiente",
      sPrevious: "Atras",
    },
  },
});


function getParam() {
  let url_path = location.href;
  let array_Params = url_path.split("?");
  let aux_Param = array_Params[1];
  let tokenValidate;

  if (aux_Param != undefined && aux_Param.includes("U")) {
    let User_Aux = aux_Param.split("=")[1];
    if (User_Aux.length > 0 && User_Aux != undefined) {
      UserObject = lista_Usuario.find((u) => u.usuario == User_Aux);
      try {
        if (UserObject.usuario.length > 0 && UserObject != undefined) {
          tokenValidate = true;

          $("#id_user").text(UserObject.nombres);
        } else {
          tokenValidate = false;
        }
      } catch (error) {
        tokenValidate = false;
      }
    } else {
      tokenValidate = false;
    }
  } else {
    tokenValidate = false;
  }

  if (tokenValidate) {
    iniciarBandeja();
  } else {
    window.location = "/index.html";
  }
}

function iniciarBandeja() {
  //table_Programas

  let array = [];
  for (let i = 0; i < lista_Programas.length; i++) {
    let item = { detalle_cursos: [] };
    array = Object.assign(lista_Programas[i], item);

    for (let j = 0; j < lista_Programas[i].Cursos.length; j++) {
      for (let k = 0; k < lista_Cursos.length; k++) {
        if (lista_Programas[i].Cursos[j] == lista_Cursos[k].Cod_Curso) {
          lista_Programas[i].detalle_cursos.push(lista_Cursos[k]);
        }
      }
    }

    // pasamos los datos a la nueva tabla

    table_Programas.row
      .add([
        "<span>" + lista_Programas[i].Cod_Programa + "</span>",
        "<span>" + lista_Programas[i].Nombre_Programa + "</span>",
        "<span>" + lista_Programas[i].Cursos.length + "</span>",
        "<span>" + lista_Programas[i].Fecha_inicio + "</span>",
        "<span>" + lista_Programas[i].Fecha_Fin + "</span>",
        "<span><span class='btn btn-sm btn-success'data-bs-toggle='modal' data-bs-target='#exampleModal" +
          i +
          "'> ver programa </span> </span>",
      ])
      .draw(true);



    let item2 = `<div class="modal fade" id="exampleModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Lista de cursos: ${lista_Programas[i].Nombre_Programa}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            <div class="table-responsive">
                <table class="table table-dark table-striped">
                <thead>
                <tr>
                    <th>Cod_Curso</th>
                    <th>Nombre_Curso</th>
                    <th>Duración</th>
                    <th>Cod_Tema</th>
                    <th>Nombre_Tema</th>
                </tr>
             </thead>
                <tbody id="tbody_programas${i}">
                </tbody>
                </table>
            </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>`;



    $(".modal-container").append(item2);


    for(let l=0; l< lista_Programas[i].detalle_cursos.length; l++){

        let item_table= `<tr>
                            <td>${lista_Programas[i].detalle_cursos[l].Cod_Curso}</td>
                            <td>${lista_Programas[i].detalle_cursos[l].Nombre_Curso}</td>
                            <td>${lista_Programas[i].detalle_cursos[l].Duracion} Horas</td>
                            <td></td>
                            <td></td>

                        </tr>`;
                        $("#tbody_programas"+i).append(item_table);

        let numcursos= lista_Programas[i].detalle_cursos[l].Temas.length;
     console.log(numcursos);
        for(let x=0; x<numcursos; x++){
            // console.log(lista_Programas[i].detalle_cursos[l].Temas[x].Cod_Tema);
            // console.log(lista_Programas[i].detalle_cursos[l].Temas[x].Nombre_Tema);
        let item_temas= `<tr>
        <td></td>
        <td></td>
        <td></td>
        <td>${lista_Programas[i].detalle_cursos[l].Temas[x].Cod_Tema}</td>
        <td>${lista_Programas[i].detalle_cursos[l].Temas[x].Nombre_Tema}</td></tr>`;
        $("#tbody_programas"+i).append(item_temas);
        }
    }
    
  }

}

