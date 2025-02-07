
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

        async function LoadImg(url) {
            const response = await fetch(url);
            const blob = await response.blob();
            return new Promise((resolve) => {
              const reader = new FileReader();
              reader.onloadend = () => resolve(reader.result); // Convertir a Base64
              reader.readAsDataURL(blob);
            });
          }
          
          async function generarPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
          
            const img1 = await LoadImg("assets/Colegio.png");
            const img2 = await LoadImg("assets/firma.png");
          
            doc.setFontSize(18);
            doc.text("Comprobante de Pago - 8voA", 65, 20);
            doc.setFontSize(14);
            doc.text("Cancelado el: " + datetime, 20, 40);
            doc.text(`Nombre del Alumno: ${name_Alumno}`, 20, 50);
            doc.text(`Actividad a Cancelar: ${act_Pago}`, 20, 60);
            doc.text(`Monto Cancelado: $${monto}`, 20, 70);
            doc.addImage(img1, "PNG", 10, 10, 50, 50);
            doc.addImage(img2, "PNG", 70, 10, 50, 50);
            doc.setFontSize(12);
            doc.text("Directiva 8vo A - Colegio Arturo Edwards",120,95);
          
            // Guardar el PDF con un nombre dinámico
            doc.save(`Comprobante de Pago_${name_Alumno}.pdf`);
          }
          
          generarPDF();
          
        
    }   
        });


        
  
    
   