const startDate = document.getElementById("start_date");
const endDate = document.getElementById("end_date")
const btn = document.querySelector(".btn");
let date = new Date().toISOString().split("T")[0];

let tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate()+1);

//date d'aujourd'hui
startDate.value = date ;
startDate.min = date ;

//demain
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
endDate.value = tomorrowFormat;
endDate.min = tomorrowFormat;


//changer la date de retour automatiquement quand on change la date de depart a n+1
startDate.addEventListener('change', (e) => {

    let target1 =new Date(e.target.value);
    
    target1.setDate(target1.getDate()+1) ;

    if (startDate.value > endDate.value){
        let TomTarget = target1.toISOString().split("T")[0];
        endDate.value = TomTarget;
    }

});

//changer la date de start date qd c'est inferieur n-1; 
endDate.addEventListener('change', (e)=>{
    let target2 = new Date(e.target.value);
    target2.setDate(target2.getDate()-1);

    if (endDate.value < startDate.value){
        let TomTarget1 = target2.toISOString().split("T")[0];
        startDate.value = TomTarget1
    }

})

// ajout du total

btn.addEventListener('click',() =>{
    let target1 = startDate.value;
    let target2 = endDate.value;
    let diffDate = Math.abs(new Date(target2)- new Date(target1))
    let totalPrice = Math.ceil((diffDate/ (3600*24*1000))*46)

total.innerHTML = `${totalPrice}`

});

    