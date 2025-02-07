
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
    let monto = document.querySelector(".monto").value.trim();

    if(!name_Alumno || !act_Pago || !monto){
        alert("Ingrese los datos solicitados");

    }else{
        console.log("Nombre del Alumno: " +name_Alumno);
        console.log("Actividad Cancelada: " +act_Pago);
        console.log("Monto a Pagar: " +monto);

        const datetime = fechahora(); //obtengo la fecha y hora de la funcion fechahora()
        console.log(datetime);

        // Crear un nuevo documento PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const imgData = "data:firma/png;base64"

        doc.text("Comprobante de Pago - 8voA", 70, 20);
        doc.text("Cancelado el: " + datetime, 20, 40);
        doc.text(`Nombre del Alumno: ${name_Alumno}`, 20, 50);
        doc.text(`Actividad a Cancelar: ${act_Pago}`, 20, 60);
        doc.text(`Monto Cancelado: $${monto}`, 20, 70);
        doc.addImage(imgData, "PNG",10,10,100,50);

    
        // Guardar el PDF con un nombre dinámico
        doc.save(`Comprobante de Pago_${name_Alumno}.pdf`);
    }   
        });