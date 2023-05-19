/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código
  // if (x === y) {
  //   return true;
  // } else {
  //   return false;
  // }
  return x === y
}
sonIguales();

function tienenMismaLongitud(str1, str2) {
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  
  return str1.length === str2.length
}
//tienenMismaLongitud();

function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
  
    if ( num < 90) {
   return true;
   } else {
     return false;
   }
  //const resultado = num < 90;
  //console.log(resultado);
}

menosQueNoventa();

function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:

  return num > 50;
}
mayorQueCincuenta();

function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  
  const par = num % 2 == 0;
  console.log("num par= " + par);
  return par;
}
esPar();

function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  const impar = num % 2 != 0;
  console.log("num impar= " + impar);
  return impar;
}
esImpar();

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar,
};
