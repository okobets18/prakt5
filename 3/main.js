// Константи
const e = Math.E;
const pi = Math.PI;
const decimalLogE = Math.LN10;
const binaryLogE = Math.LOG2E;
const naturalLog10 = Math.LN10;
const naturalLog2 = Math.LN2;
const squareRootOf2 = Math.SQRT2;
const squareRootOfOneHalf = Math.SQRT1_2;

// Функції
const cosineOfZeroRadians = Math.acos(1);
const cosineOf180Degrees = Math.tan(Math.PI/4);
const arccosineOfZero = Math.atan(1);
const sineOfZeroRadians = Math.E**2;

// Генератор випадкових чисел
const randomNum = Math.random();

// Виведення результатів
document.getElementById("constants").innerHTML = `
    <h3>Константи:</h3>
    <ul>
        <li>Значення константи е (E): ${e}</li>
        <li>Значення константи π (PI): ${pi}</li>
        <li>Десятковий логарифм постійної Ейлера (е): ${decimalLogE}</li>
        <li>Двійковий логарифм постійної Ейлера (е): ${binaryLogE}</li>
        <li>Натуральний логарифм числа 10: ${naturalLog10}</li>
        <li>Натуральний логарифм числа 2: ${naturalLog2}</li>
        <li>Корінь квадратний із двох: ${squareRootOf2}</li>
        <li>Корінь квадратний з однієї другої: ${squareRootOfOneHalf}</li>
    </ul>
`;

document.getElementById("functions").innerHTML = `
    <h3>Функції:</h3>
    <ul>
        <li>.Результат обчислення арксинуса одиниці: ${cosineOfZeroRadians}</li>
        <li>Тангенс 45 градусів (π /4 радіан): ${cosineOf180Degrees}</li>
        <li>Результат обчислення арктангенса одиниці: ${arccosineOfZero}</li>
        <li>Результат зведення е в степінь 2: ${sineOfZeroRadians}</li>
    </ul>
`;

document.getElementById("random").innerHTML = `
    <h3>Генератор випадкових чисел:</h3>
    <p>${randomNum}</p>
`;