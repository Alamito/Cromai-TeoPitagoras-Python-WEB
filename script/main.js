const HIP = document.querySelector('.HIP');
const sizeA = document.querySelector('.size-A');
const sizeB = document.querySelector('.size-B');
const button = document.querySelector('.buttonCalculate');

axios.defaults.baseURL = 'http://localhost:5000/'

// Conta quantos lados do triangulo possuem valor
const countInput = (...valuesSizes) => {
   let countInputNotNull = 0;
   valuesSizes.forEach(value => {
      if (value) {
         countInputNotNull++;
      }
   });
   return countInputNotNull;
};

// Transforma em um numero com ponto flutuante
const transformInFloat = (value) => {
   if (value === "") {
      return "0.0";
   } else if (value.indexOf('.') === -1) {
      return value + '.0';
   } else {
      return value + '0';
   }
};

// Alerta caso o tamanho do CA ou CO for maior que a hipotenusa
const checkValues = (valueHIP, valueA, valueB) => {
   if (valueA === "0.0" && (parseFloat(valueB) > parseFloat(valueHIP))) {
      alert("Invalid values!");
      return false;
   }
   if (valueB === "0.0" && (parseFloat(valueA) > parseFloat(valueHIP))) {
      alert("Invalid values!");
      return false;
   }
   return true;
};

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
};

document.addEventListener('click', (event) => {
   if (event.target === button) {
      const inputNotNull = countInput(HIP.value, sizeA.value, sizeB.value)
      if (inputNotNull === 2) {
         const valueHIP = transformInFloat(HIP.value);
         const valueA = transformInFloat(sizeA.value);
         const valueB = transformInFloat(sizeB.value);
         if (checkValues(valueHIP, valueA, valueB))
            getValue(valueHIP, valueA, valueB)
      } else {
         alert(`Insira valores em dois campos (lados dos triangulos) e deixe em branco aquele no qual deseja calcular o valor!`)
      }
   }
});

const printValue = (size, value) => {
   if (size === "hip") {
      HIP.value = value.toFixed(2);
   } else if (size === "A") {
      sizeA.value = value.toFixed(2);
   } else {
      sizeB.value = value.toFixed(2);
   }
};

