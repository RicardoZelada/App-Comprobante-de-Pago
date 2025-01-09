
const btnAux_Generator = document.getElementById("btn__enviar");

btnAux_Generator.addEventListener('click', ()=>{
    let name_Alumno = document.querySelector(".alumno").value.trim();
    let act_Pago = document.querySelector(".pago").value.trim();

    


    console.log("Nombre del Alumno: " +name_Alumno);
    console.log("Actividad Cancelada: " +act_Pago);
})
