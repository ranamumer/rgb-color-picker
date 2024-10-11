const rangeInputs = Array.from(document.querySelectorAll(`input[type="range"`));
const numberInputs = Array.from(document.querySelectorAll(`input[type="number"`));

rangeInputs.forEach(el => {
   el.addEventListener('input', setValues);
});
numberInputs.forEach((el) => {
   el.addEventListener('input', setValues);
   el.value = 120;
   setValues.call(el);
});

function setValues() {
   const red = rangeInputs[0].value;
   const green = rangeInputs[1].value;
   const blue = rangeInputs[2].value;
   const parent = this.parentElement;
   // change output background
   if (parent.id === 'red-slider')
      parent.firstElementChild.style.background = `rgb(${this.value}, 0, 0)`;
   else if (parent.id === 'green-slider')
      parent.firstElementChild.style.background = `rgb(0, ${this.value}, 0)`;
   else if (parent.id === 'blue-slider')
      parent.firstElementChild.style.background = `rgb(0, 0, ${this.value})`;
   // change input value
   if (this.getAttribute('type') === 'number')
      parent.lastElementChild.value = this.value;
   else if (this.getAttribute('type') === 'range')
      parent.firstElementChild.nextElementSibling.value = this.value;
   // change screen background
   document.getElementById('screen').style.background = `rgb(${red}, ${green}, ${blue})`;
}