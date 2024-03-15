// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let currmonth=currentDate.getMonth();
// let currentDay=currentDate.getDate();

// console.log(currentYear); 

// let dob=document.querySelector("#age");

// let s="";
// let r="";
// let l="";
// dob.addEventListener("input", () => {
//     let t=dob.value;
//     for(let i=0;i<t.length;i++){
//         console.log(t[i]);
//         if(i==0 ||i==1){
//             l+=t[i];
//         }
//         if(i==3 ||i==4){
//             r+=t[i];
//         }
//         if(i==6 || i>6){

//             s+=t[i];
//         }
//     }
// });

// let submit=document.querySelector("#sub");
// let msg=document.querySelector("#msg");
// submit.addEventListener("click",()=>{
//     let f=currentYear-s;
//     if(currmonth<r){
//         alert(f-1);
//     }else if(r==currmonth){
//         if(l>=currentDay){
//           alert(f);
//         }else{
//             alert(f-1);
//         }
//     }
//     else if(r>currmonth){
//         alert(f);
//     }
//     // alert(`Age : ${currentYear-s}`)
// });
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-indexed
let currentDay = currentDate.getDate();

console.log("Current Year:", currentYear); 

let dob = document.querySelector("#age");

dob.addEventListener("input", () => {
    let dobValue = dob.value;
    let dobDate = new Date(dobValue);
    
    if (isNaN(dobDate.getTime())) {
        // Invalid date entered
        return;
    }

    // let dobYear = dobDate.getFullYear();
    // let dobMonth = dobDate.getMonth() + 1; // Adding 1 because months are zero-indexed
    // let dobDay = dobDate.getDate();

    // console.log("DOB Year:", dobYear);
    // console.log("DOB Month:", dobMonth);
    // console.log("DOB Day:", dobDay);

    // let age = currentYear - dobYear;

    // // Check if birthday has passed this year
    // if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDay < dobDay)) {
    //     age--;
    // }

    // console.log("Age:", age);
});

let submit = document.querySelector("#sub");
submit.addEventListener("click", () => {
    let dobValue = dob.value;
    let dobDate = new Date(dobValue);
    
    if (isNaN(dobDate.getTime())) {
        // Invalid date entered
        alert("Please enter a valid date of birth.");
        return;
    }

    let dobYear = dobDate.getFullYear();
    let dobMonth = dobDate.getMonth() ; // Adding 1 because months are zero-indexed
    let dobDay = dobDate.getDate();

    let age = currentYear - dobYear;

    // Check if birthday has passed this year
    if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDay < dobDay)) {
        age--;
    }

    // Display age
    // alert("Age: " + age);
    msg.textContent = "Your age is " + age + " years.";
});

