const ToggleExpButton =  document.getElementById('exp_toggle_button') as HTMLButtonElement;
const ExpToggle = document.getElementById('exp_section') as HTMLElement;

let ToggleExpVisible = ():void =>{
if(ExpToggle.style.display==="none"){
      ExpToggle.style.display = "block"
}
else{
      ExpToggle.style.display ="none" 
}
}

ToggleExpButton.addEventListener('click', ToggleExpVisible);