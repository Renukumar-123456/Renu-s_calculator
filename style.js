document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('input[type="text"]');
    let buttons = document.querySelectorAll('button');
    let string = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML === '=') {
                string=eval(string);
                input.value=string;
            } else if (e.target.innerHTML === 'AC') {
                string = "";
                input.value = "";
            } else if (e.target.innerHTML === 'DEL') {
                // string = string.slice(0, -1);
                string=string.substring(0,string.length-1);
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
});













// let input=document.getElementById('inputBox');
// let buttons=document.querySelectorAll('button');

// let string="";
// buttons.forEach(button=>{
//     button.addEventListener('click',(e)=>{
//         if(e.target.innerHTML==="="){
//             string=eval(string);
//             input.value=string;
//         }
//         else if(e.target.innerHTML==="AC"){
//             string="";
//             input.value=string;

//         }
//         else if(e.target.innerHTML==="DEL"){
//             string.length-=1;
//             input.value=string;

//         }
//         else{
//             string+=e.target.innerHTML;
//             input.value=string;

//         }
//     }
//     )
// })










// document.addEventListener('DOMContentLoaded', function() {
//     let input = document.querySelector('input[type="text"]');
//     let buttons = document.querySelectorAll('button');
//     let string = "";

//     buttons.forEach(button => {
//         button.addEventListener('click', (e) => {
//             let buttonText = e.target.innerHTML;
//             if (buttonText === '=') {
//                 try {
//                     string = eval(string);
//                     if (isNaN(string) || !isFinite(string)) {
//                         throw new Error("Invalid input");
//                     }
//                     input.value = string;
//                 } catch (error) {
//                     input.value = "Error";
//                 }
//             } else if (buttonText === 'AC') {
//                 string = "";
//                 input.value = "";
//             } else if (buttonText === 'DEL') {
//                 string = string.slice(0, -1);
//                 input.value = string;
//             } else {
//                 string += buttonText;
//                 input.value = string;
//             }
            
//             // Blur the input field to prevent focus
//             // input.blur();
//         });
//     });
// });
