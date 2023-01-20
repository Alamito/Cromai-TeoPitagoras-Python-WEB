const HIP = document.querySelector('.HIP');
const sizeA = document.querySelector('.size-A');
const sizeB = document.querySelector('.size-B');

document.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
      // console.log(sizeA.value, sizeB.value)
      getValue(HIP.value, sizeA.value, sizeB.value)
   }
});

const getValue = (HIP = 0.0, sizeA = 0.0, sizeB = 0.0) => {
   const URLWithValues = `http://localhost:5000/triangleSides/${HIP};${sizeA};${sizeB}`;
   axios.get(URLWithValues)
      .then(response => {
         const data = response.data;
         console.log(data)
      })
}




function onlyNumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   var regex = /^[0-9.-]+$/;
   if(!regex.test(key)) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}