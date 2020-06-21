const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {

   // dataset object contains all the data attributes
   const suffix = this.dataset.sizing || '';
   document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Attach event handlers to both change and move events for inputs
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));