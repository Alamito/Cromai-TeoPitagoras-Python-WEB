const HIP = document.querySelector('.HIP');
const sizeA = document.querySelector('.size-A');
const sizeB = document.querySelector('.size-B');
const button = document.querySelector('.buttonCalculate');

document.addEventListener('click', (event) => {
   if (event.target === button) {
      const inputNotNull = countInput(HIP.value, sizeA.value, sizeB.value)
      if (inputNotNull === 2) {
         const valueHIP = transformInFloat(HIP.value);
         const valueA = transformInFloat(sizeA.value);
         const valueB = transformInFloat(sizeB.value);
         getValue(valueHIP, valueA, valueB)
      } else {
         alert(`Insira valores em dois campos e deixe em branco aquele no qual deseja calcular o valor!`)
      }
   }
});

const countInput = (...valuesSizes) => {
   let countInputNotNull = 0;
   valuesSizes.forEach(value => {
      if (value) {
         countInputNotNull++;
      }
   });
   return countInputNotNull;
}

const transformInFloat = (value) => {
   if (value === "") {
      return "0.0";
   } else if (value.indexOf('.') === -1) {
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
      .catch(err => console.error(err))
}

const printValue = (size, value) => {
   if (size === "hip") {
      HIP.value = value.toFixed(2);
   } else if (size === "A") {
      sizeA.value = value.toFixed(2);
   } else {
      sizeB.value = value.toFixed(2);
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