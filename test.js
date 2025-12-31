//The Text in Previous par is : Hello Traines :)
// const text = document.getElementById("p1").innerHTML;//get 
// console.log(text);
// document.getElementById("p2").innerHTML= "The Text in Previous par is :" + text;
// ///////////////////////////////////////////////////////////
// const arr = document.getElementsByTagName("p");
// const text2 = arr[0].innerHTML;  
// arr[1].innerHTML= "TEXT " + text2;

///class Name 
// const arr2 = document.getElementsByClassName("test"); 
// document.getElementById("img1").title="Asp.NetCore"; 

// document.getElementById("img1").style.width="50px";
// document.getElementById("img1").src="https://th.bing.com/th/id/R.ed5ba5075380cf69d308b420edbb8793?rik=rRlqEVM93Ho2sw&pid=ImgRaw&r=0";
//Create new HTML Element 
// const p =document.createElement("p"); //<p><p/>

// const textP = document.createTextNode("Paragraph three"); 
// p.appendChild(textP); //<p>Paragraph three<p/>

// const parent= document.getElementById("div1"); //p1 p2 p3 
// parent.appendChild(p); 

// const p2= document.getElementById("p2"); 
// //parent.insertBefore(p,p2); 
// parent.replaceChild(p,p2); 
// document.getElementById("p1").remove(); 




//DOM Events:
// Click on an Element => onclick 
//The page has loaded =>onload
//changed on Input Fields =>onChange
//Pressing any key=>onmousedown
//closing pr reizing a window

function changeText(id)
{
id.innerHTML='Hello Trainees:) '; 
}

document.getElementById("b1").addEventListener("click",displayDate); 
function displayDate(){
    const d= new Date().toDateString(); 
    document.getElementById("p1").innerHTML=d; 

}
function upperCase(){
    const input1 = document.getElementById('t1');
    const input2 = document.getElementById('t2');
    input2.value = input1.value.toUpperCase();


}


function Over(ele)
{
    ele.innerHTML="Hello Trainess :)"; 
    ele.style.fontSize="35px"; 
    ele.style.color="black"; 
    ele.style.backgroundColor="red"; 
    ele.style.width="300px"; 
    ele.style.height="300px"
}
function Out(ele)
{
    ele.innerHTML="Welcome to Masan3- Tech "; 

}





























