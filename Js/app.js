
function fechahora(){
    const hoy = new Date();
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const optionsdate = {hour: '2-digit', minute: '2-digit', second: '2-digit'};
        const fecha = hoy.toLocaleDateString('es-ES', options);
        const date = hoy.toLocaleTimeString(optionsdate, 'es-ES');

        let informacion = document.querySelector(".date-time");
        informacion.classList.add("text-center","p-2","text-danger");
        informacion.textContent = `${fecha} - ${date}`;
    }
    fechahora();
    setInterval(fechahora, 1000);


window.registro = [];

const btnAux_Generator = document.getElementById("btn__enviar");

btnAux_Generator.addEventListener('click', ()=>{
    let name_Alumno = document.querySelector(".alumno").value.trim();
    let act_Pago = document.querySelector(".pago").value.trim();

    array_Error = [];

    if (name_Alumno === ""){
        array_Error.push("Ingrese nombre del alumno");
    if (act_Pago === ""){
        array_Error.push("ingrese pago");
    }
    if(array_Error.length === 0){
            let registro={}
            registro.nombre = name_Alumno;
            registro.pago = act_Pago;
        };

        console.log(array_Error);
        console.log(registro);
    }
    console.log("Nombre del Alumno: " +name_Alumno);
    console.log("Actividad Cancelada: " +act_Pago);
    });
/*
        let error = document.querySelector(".div__alert");
        
        let toast__Container = document.createElement("div");
        toast__Container.classList.add("alert", "alert-danger", "mt-2");
        let text_Parrafo = document.createElement("p");
        text_Parrafo.innerText = "Ingrese Datos Solicitados"

        text_Parrafo.appendChild(toast__Container);
        error.appendChild(toast__Container);
            */