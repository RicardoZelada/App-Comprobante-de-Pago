
function fechahora(){
    const hoy = new Date();
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        const optionsdate = {hour: '2-digit', minute: '2-digit', second: '2-digit'};
        const fecha = hoy.toLocaleDateString('es-ES', options);
        const date = hoy.toLocaleTimeString('es-ES', optionsdate);

        let informacion = document.querySelector(".date-time");
        informacion.classList.add("text-center","p-2","text-danger");
        informacion.textContent = `${fecha} - ${date}`;

        return `${fecha} - ${date}`;
    }
    setInterval(fechahora, 1000);


const btnAux_Generator = document.getElementById("btn__enviar");

btnAux_Generator.addEventListener('click', ()=>{
    let name_Alumno = document.querySelector(".alumno").value.trim();
    let act_Pago = document.querySelector(".pago").value.trim();

    if(!name_Alumno || !act_Pago){
        alert("Ingrese los datos solicitados");

    }else{
        console.log("Nombre del Alumno: " +name_Alumno);
        console.log("Actividad Cancelada: " +act_Pago);

        // Crear un nuevo documento PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const datetime = fechahora(); //obtengo la fecha y hora de la funcion fechahora()
        console.log(datetime);

        doc.text("Cancelado el: " + datetime, 20, 30);
        doc.text("Comprobante de Pago - 8voA", 20, 20);
        doc.text(`Nombre del Alumno: ${name_Alumno}`, 20, 40);
        doc.text(`Actividad a Cancelar: ${act_Pago}`, 20, 50);


        // Guardar el PDF con un nombre dinámico
        doc.save(`Comprobante de Pago_${name_Alumno}.pdf`);
    }   
        });