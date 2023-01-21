const HIP = document.querySelector('.HIP');
const sizeA = document.querySelector('.size-A');
const sizeB = document.querySelector('.size-B');
const button = document.querySelector('.buttonCalculate');

document.addEventListener('click', (event) => {
   if (event.target === button) {
      const valueHIP = checkValueAndAddCaractere(HIP.value);
      // console.log(valueHIP)
      const valueA = checkValueAndAddCaractere(sizeA.value);
      const valueB = checkValueAndAddCaractere(sizeB.value);
      getValue(valueHIP || "0.0", valueA || "0.0", valueB || "0.0")
   }
});

const checkValueAndAddCaractere = (value) => {
   if (!value) {
      return null;
   }
   if (value.indexOf('.') === -1) {
      return value + '.0';
   } else {
      return value + '0';
   }
}

const getValue = (HIP, sizeA, sizeB) => {
   const URLWithValues = `http://localhost:5000/triangleSides/${HIP};${sizeA};${sizeB}`;
   axios.get(URLWithValues)
      .then(response => {
         return response.data;
      })
      .then(data => {
         printValue(data.size, data.value);
   })
}

const printValue = (size, value) => {
   if (size === "hip") {
      HIP.value = value;
   } else if (size === "A") {
      sizeA.value = value;
   } else {
      sizeB.value = value;
   }
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