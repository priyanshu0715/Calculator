// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      let val = eval(string);
      if(val!=undefined){
        string =val;
      }
      else{
        string = "error";
      }
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'Del'){
      string = string.substring(0,string.length-1);
      document.querySelector('input').value = string;

    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

function percent (x,y){
  let value = (x*y)/100;
  return value;
}
function addition (x,y){
  let value = (x+y);
  return value;
}
function subtraction (x,y){
  let value = (x-y);
  return value;
}
function product (x,y){
  let value = (x*y);
  return value;
}
function division (x,y){
  let value = (x/y);
  return value;
}

function operand (expression){
  
}