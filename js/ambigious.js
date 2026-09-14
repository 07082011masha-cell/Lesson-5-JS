// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

let choice = "Кава";

switch (choice) {
  case "Кава":
    console.log("Ви обрали каву");
    break;

  case "Чай":
    console.log("Ви обрали чай");
    break;

  case "Сік":
    console.log("Ви обрали сік");
    break;
}


// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

let day = prompt("Введіть день тижня:").toLowerCase();

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        console.log("Це робочий день"); 
        break;

    case "субота":
    case "неділя":
    console.log("Це вихідний день");
        break;

    default:
     console.log("Такого дня тижня не існує.");
}


// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

let num = Number(prompt("Введіть номер місяця"));

switch (num) {
    case 12:
    case 1:
    case 2:
        console.log("Це зима");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Це весна");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Це літо");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Це осінь");
        break;

    default:
        console.log("Такого місяця не існує");
}

// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let colour = prompt("Введіть один з кольорів сфітлофора");

switch (colour) {
    case "червоний":
        console.log("стоп");
        break;

        case "зелений":
        console.log("йти");
        break;

            case "жовтий":
        console.log("чекати");
        break;
    default:
        console.log("Це не колір сфітлофора");
        break;
}

// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let num1 = Number(prompt("Введіть перше число"));
let num2 = Number(prompt("Введіть друге число"));
let operator = prompt("Введіть оператор (+, -, *, /)");

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

     case "/":
        if (num2 === 0) {
            console.log("На нуль ділити не можна!");
        } else {
            console.log(num1 / num2);
        }
        break;

    default:
        console.log("Такого оператора не існує");
}
