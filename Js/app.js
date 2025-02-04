
function fechahora(){
    const hoy = new Date();
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const optionsdate = {hour: '2-digit', minute: '2-digit', second: '2-digit'};
        const fecha = hoy.toLocaleDateString('es-ES', options);
        const date = hoy.toLocaleTimeString('es-ES', optionsdate);

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

    if(!name_Alumno || !act_Pago){
        alert("Ingrese los datos solicitados");
    }

    // Crear un nuevo documento PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Comprobante de Pago - 8voA", 20, 20);
    doc.text(`Nombre: ${name_Alumno}`, 20, 40);
    doc.text(`Cancela: ${act_Pago}`, 20, 50);

    // Guardar el PDF con un nombre dinámico
    doc.save(`Formulario_${name_Alumno}.pdf`);
    
    console.log("Nombre del Alumno: " +name_Alumno);
    console.log("Actividad Cancelada: " +act_Pago);
    });

    /*
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
    }*/