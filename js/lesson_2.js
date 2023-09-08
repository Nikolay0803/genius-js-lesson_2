// Якщо змінна більше нуля - виведіть true, менше - false
// let nam = 1;
//Перевірте це на варіантах 1, 0, -3.
// nam > 0 ? console.log('true') : console.log("false");
// let nam = 0;
// nam > 0 ? console.log("true") : console.log("false");
// let nam = -3;
// nam > 0 ? console.log("true") : console.log("false");

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test'
// ,
// "qwerty"
// , true
// let test = "test";
// test === "test" ? console.log("true") : console.log("false");
// let test = ",";
// test === "test" ? console.log("true") : console.log("false");
// let test = "qwerty";
// test === "test" ? console.log("true") : console.log("false");
// let test = ", true";
// test === "test" ? console.log("true") : console.log("false");
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.
// let sub = 1;
// let sub = 10;
// let sub = 13;
// if (sub > 10) {
//   console.log(sub - 5);
// } else if (sub < 10) {
//   console.log(sub + 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const value = prompt("Введіть номер місяця");
// let cost;

// switch (value) {
//   case "1":
//     name = "Січень";
//     alert(`${value} це ${name}`);
//     break;
//   case "2":
//     name = "Лютий";
//     alert(`${value} це ${name}`);
//     break;
//   case "3":
//     name = "Березень";
//     alert(`${value} це ${name}`);
//     break;
//   case "4":
//     name = "Квітень";
//     alert(`${value} це ${name}`);
//     break;
//   case "5":
//     name = "Травень";
//     alert(`${value} це ${name}`);
//     break;
//   case "6":
//     name = "Червень";
//     alert(`${value} це ${name}`);
//     break;
//   case "7":
//     name = "Липень";
//     alert(`${value} це ${name}`);
//     break;
//   case "8":
//     name = "Серпень";
//     alert(`${value} це ${name}`);
//     break;
//   case "9":
//     name = "Вересень";
//     alert(`${value} це ${name}`);
//     break;
//   case "10":
//     name = "Жовтень";
//     alert(`${value} це ${name}`);
//     break;
//   case "11":
//     name = "Листопад";
//     alert(`${value} це ${name}`);
//     break;
//   case "12":
//     name = "Грудень";
//     alert(`${value} це ${name}`);
//     break;

//   default:
//     alert(`Такого ${value}, місяця не існує`);
// }
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let inputt = prompt("Введіть тризначне число:");
// if (inputt.length !== 3 || isNaN(inputt)) {
//   alert("Буль-ласка, введіть правильне тризначне число");
// } else {
//   let num = parseInt(inputt);

//   let hundred = Math.floor(num / 100);
//   let dozen = Math.floor((num % 100) / 10);
//   let units = Math.floor(num % 10);

//   let sum = 0;
//   switch (hundred) {
//     case 1:
//       sum += 1;
//       break;
//     case 2:
//       sum += 2;
//       break;
//     case 3:
//       sum += 3;
//       break;
//     case 4:
//       sum += 4;
//       break;
//     case 5:
//       sum += 5;
//       break;
//     case 6:
//       sum += 6;
//       break;
//     case 7:
//       sum += 7;
//       break;
//     case 8:
//       sum += 8;
//       break;
//     case 9:
//       sum += 9;
//       break;
//   }
//   switch (dozen) {
//     case 1:
//       sum += 1;
//       break;
//     case 2:
//       sum += 2;
//       break;
//     case 3:
//       sum += 3;
//       break;
//     case 4:
//       sum += 4;
//       break;
//     case 5:
//       sum += 5;
//       break;
//     case 6:
//       sum += 6;
//       break;
//     case 7:
//       sum += 7;
//       break;
//     case 8:
//       sum += 8;
//       break;
//     case 9:
//       sum += 9;
//       break;
//   }
//   switch (units) {
//     case 1:
//       sum += 1;
//       break;
//     case 2:
//       sum += 2;
//       break;
//     case 3:
//       sum += 3;
//       break;
//     case 4:
//       sum += 4;
//       break;
//     case 5:
//       sum += 5;
//       break;
//     case 6:
//       sum += 6;
//       break;
//     case 7:
//       sum += 7;
//       break;
//     case 8:
//       sum += 8;
//       break;
//     case 9:
//       sum += 9;
//       break;
//   }

//   alert(`Сума цифр у числі ${num} дорівнює ${sum}`);
// }
