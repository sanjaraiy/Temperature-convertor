let cel=document.querySelector('#celcius>input');
let fah=document.querySelector('#fahrenheit>input');
let kel=document.querySelector('#kelvin>input');

let btn=document.querySelector('.btn button');

function roundNumber(number){
    return Math.round(number*100)/100;
}
//conversion celcius to fahrenheit And kelvin
cel.addEventListener('input', function(){
    let ctemp= parseFloat(cel.value);
    let ftemp=(ctemp*(9/5))+32;
    let ktemp=ctemp+273.15;

    fah.value=roundNumber(ftemp);
    kel.value=roundNumber(ktemp);
});

//conversion fahrenheit to celcius And kelvin
fah.addEventListener('input', function(){
    let ftemp= parseFloat(fah.value);
    let ctemp=(ftemp-32)*(5/9);
    let ktemp=(ftemp-32)*(5/9)+273.15;

    cel.value=roundNumber(ctemp);
    kel.value=roundNumber(ktemp);
});

//conversion kelvin to celcius And fahrenheit 
kel.addEventListener('input', function(){
    let ktemp= parseFloat(kel.value);
    let ctemp=(ktemp-273.15);
    let ftemp=(ktemp-273.15)*(9/5)+32;

    cel.value=roundNumber(ctemp);
    fah.value=roundNumber(ftemp);
});

btn.addEventListener('click',()=>{
    cel.value="";
    fah.value="";
    kel.value="";
});

//activity of scroll reveal
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });
 
 ScrollReveal().reveal('.tag', { origin:'top'});
 ScrollReveal().reveal('.container', { origin:'bottom'});

 //activity of typed.js 
 const typed = new Typed('.move',{
    strings: ['Conversion'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
 })