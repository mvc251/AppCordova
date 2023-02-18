function recibirDatos() {
    var matriculaU = document.getElementById("txtMatricula").value;
    var nombreU = document.getElementById("txtNombre").value;
    var apellidosU = document.getElementById("txtApellido").value;
    var generoU = document.getElementById("genero").value;
    var cuatriU = document.getElementById("cuatrimestre").value;
    var programaU = document.getElementById("programaEducativo").value;

    const objDatosEstudiante = {
        Estudiante: [{
            Matricula: matriculaU,
            Nombre: nombreU,
            Apellido: apellidosU,
            Genero: generoU,
            Cuatrimestre: cuatriU,
            Carrera: programaU
        }]
    }
    let datosEstudiante_1 = JSON.stringify(objDatosEstudiante);
    localStorage.setItem("testJSON", datosEstudiante_1);
    //alert(datosEstudiante_1);    
    //Retrieving Data
    let text = localStorage.getItem("testJSON");
    let objEstudiante = JSON.parse(text);

    document.getElementById("_matricula").innerHTML =
        objEstudiante.Estudiante[0].Matricula;

    document.getElementById("_nombre").innerHTML =
        objEstudiante.Estudiante[0].Nombre;

    document.getElementById("_apellidos").innerHTML =
        objEstudiante.Estudiante[0].Apellido;

    document.getElementById("_genero").innerHTML =
        objEstudiante.Estudiante[0].Genero;

    document.getElementById("_cuatrimestre").innerHTML =
        objEstudiante.Estudiante[0].Cuatrimestre;

    document.getElementById("_carrera").innerHTML =
        objEstudiante.Estudiante[0].Carrera;
}

let datosEstudiante = '{"estudiante":[' +
    '{"matricula":21301069,"nombre":"Benjamin","apellido":"Mendoza","genero":"Hombre","cuatrimestre":"Quito","Carrera":"DSM"},' +
    '{"matricula":30106958,"nombre":"Emil","apellido":"Gruz","genero":"Hombre","cuatrimestre":"Quito","Carrera":"DSM"},' +
    '{"matricula":50697881,"nombre":"Mariano","apellido":"Ventura","genero":"Hombre","cuatrimestre":"Quito","Carrera":"DSM"}' +
    ']}';



