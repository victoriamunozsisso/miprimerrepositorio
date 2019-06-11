/*Almacena la edad actual de las personas en una variable.
Almacena una edad máxima estimada en una variable.
Almacene una cantidad estimada por semana (como un número).
Calcule cuántas semanas pasarán hasta el final de la vida de esta persona.
Calcule cuántas papas se comerían en total durante el resto de su vida.
Envíe el resultado a la pantalla mediante una consola como la siguiente: "NAME tiene NN años y se comerán NN papas hasta la edad de X".*/

let name = "Victoria";
let age = 28;
let maxAge =  80;
let numPerWeek = 4;
let weeksForLife = (maxAge - age) * (48);
let total = numPerWeek * weeksForLife;
let message = name + "tiene" + age + "años y se comerá" + total + "papas hasta la edad de" + maxAge;
console.log(message);



