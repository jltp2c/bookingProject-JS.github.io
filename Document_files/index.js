const startDate = document.getElementById("start_date");
const endDate = document.getElementById("end_date")
let date = new Date().toISOString().split("T")[0];
let tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate()+1);

//date d'aujourd'hui
startDate.value = date ;
startDate.min = date ;

//demain
endDate.value = tomorrow;


