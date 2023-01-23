const hypotenuse = document.querySelector('.hypotenuse');
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

/* 
   Transforma em um numero com ponto flutuante
   A API so aceita valores dessa maneira 
*/
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
const checkValues = (valueHypotenuse, valueA, valueB) => {
   if (valueA === "0.0" && (parseFloat(valueB) > parseFloat(valueHypotenuse))) {
      alert("Invalid values!");
      return false;
   }
   if (valueB === "0.0" && (parseFloat(valueA) > parseFloat(valueHypotenuse))) {
      alert("Não é possível relacionar esses valores!");
      return false;
   }
   return true;
};

const URLBase = "http://localhost:5000";

const getValue = (hypotenuse, sizeA, sizeB) => {
   const URLWithValues = `${URLBase}/triangleSides/${hypotenuse};${sizeA};${sizeB}`;
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
      const inputNotNull = countInput(hypotenuse.value, sizeA.value, sizeB.value)
      if (inputNotNull === 2) {
         const valueHypotenuse = transformInFloat(hypotenuse.value);
         const valueA = transformInFloat(sizeA.value);
         const valueB = transformInFloat(sizeB.value);
         if (checkValues(valueHypotenuse, valueA, valueB))
            getValue(valueHypotenuse, valueA, valueB)
      } else {
         alert(`Insira valores em dois campos (lados dos triangulos) e deixe em branco aquele no qual deseja calcular o valor!`)
      }
   }
});

const printValue = (size, value) => {
   if (size === "hipotenusa") {
      hypotenuse.value = value.toFixed(2);
   } else if (size === "cateto A") {
      sizeA.value = value.toFixed(2);
   } else {
      sizeB.value = value.toFixed(2);
   }
};

