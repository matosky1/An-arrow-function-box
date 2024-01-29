const header = document.createElement("h1");
header.innerText = "Odinukwe Anthony";
header.style.textAlign = "center";
header.style.color = "gray";
document.body.appendChild(header);
 

document.body.style.margin= "auto";
document.body.style.padding= "10px";
document.body.style.backgroundColor= "#A9A9A9";

let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "Input no");
input1.addEventListener("mouseover",()=>{
    input1.style.border="4px solid red"
    input1.style.width = "15vw"
input1.style.backgroundColor = "gray";
})
input1.addEventListener("mouseout",()=>{
    input1.style.border="4px solid gray"
    input1.style.backgroundColor = "white";
})
document.body.appendChild(input1);
input1.style.marginLeft = "20vw";
input1.style.height = "10vh";
input1.style.width = "10vw"

input1.style.textAlign = "center";
input1.style.fontSize = "20px";


//box2
let input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "Input no");
input2.addEventListener("mouseover",()=>{
    input2.style.border="4px solid red"
    input2.style.width = "15vw"
input2.style.backgroundColor = "gray";
})
input2.addEventListener("mouseout",()=>{
    input2.style.border="4px solid gray"
    input2.style.backgroundColor = "white";
})
document.body.appendChild(input2);
input2.style.marginLeft = "40vw";

 
input2.style.height = "10vh";
input2.style.width = "10vw"

input2.style.textAlign = "center";
input2.style.fontSize = "20px";


let div = document.createElement("div");
document.body.appendChild(div);
 
let button = document.createElement("button");
button.innerText = "Click To Display Addition Result";
div.appendChild(button);
button.style.height="10vh";
button.style.color="gray";
button.style.fontWeight="bolder"
div.style.textAlign="center";
div.style.display=" flex";
div.style.justifyContent=" center";
div.style.alignItems="center";
 
button.addEventListener("click", () => {
  try
  {
    if (isNaN(input1.value) && isNaN(input2.value)){
        input1.style.border = "4px solid red";
        input2.style.border = "4px solid red";
        throw "not a number.";
    }
     if (isNaN(input1.value)) {
        input1.style.border = "4px solid red";
        throw "not a number.";
     }
     if (isNaN(input2.value)) {
        input2.style.border = "4px solid red";
        throw "not a number.";
     }  
  }
  catch (err)
  {
   result.innerHTML = "Check your input(s), it is " + err;
  }
 
 
  if (!(isNaN(input1.value))){
    input1.style.border = "1px solid black";
  }
  if (!(isNaN(input2.value))){
    input2.style.border = "1px solid black";
  }
  if (!(isNaN(input1.value)) && !(isNaN(input2.value)))
  {
    result.innerHTML = Number(input1.value) + Number(input2.value);
 
  }
 
});
 
