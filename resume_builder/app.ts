
const ToggleHobbiesButton =  document.getElementById('Hobbies_toggle_button') as HTMLButtonElement;
const Hobbies= document.getElementById('Hobbies') as HTMLElement;

let ToggleHobbiesVisible = ():void =>{
if(Hobbies.style.display==="none"){
      Hobbies.style.display = "block"
}
else{
      Hobbies.style.display ="none" 
}
}

ToggleHobbiesButton.addEventListener('click', ToggleHobbiesVisible);


