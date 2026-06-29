let array = [];


function ElementBTN() {

    let input = Number(document.getElementById("input_id").value);

    let result = document.getElementById("result");

    result.innerHTML = "";

    for (let i = 0; i < input; i++) {

        result.innerHTML += `<input type="text" class="num" placeholder="Enter Element">`;

    }

}


function createArray() {

    array = [];

    let num = document.getElementsByClassName("num");

    for (let i = 0; i < num.length; i++) {

        array.push(Number(num[i].value));

    }

    display();

}

function display() {

    document.getElementById("display").innerText = array;

}


// 1. POP
function popM() {

    array.pop();

    display();

}

// 2. SPLICE
function spliceM() {

    array.splice(1, 2);

    display();

}

// 3. PUSH
function pushM() {

    let result = Number(prompt("Enter Value"));

    array.push(result);

    display();

}

// 4. UNSHIFT
function unshiftM() {

    let result = Number(prompt("Enter Value"));

    array.unshift(result);

    display();

}

// 5. LENGTH
function lengthM() {

    document.getElementById("buttonResult").innerText =
        "Length : " + array.length;

}

// 6. SLICE
function sliceM() {

    document.getElementById("buttonResult").innerText =
        array.slice(1, 5);

}

// 7. CONCAT
function concatM() {

    let arr = array.concat([1000, 2000]);

    document.getElementById("buttonResult").innerText = arr;

}

// 8. JOIN
function joinM() {

    document.getElementById("buttonResult").innerText =
        array.join("+");

}

// 9. REVERSE
function reverseM() {

    array.reverse();

    display();

}

// 10. INDEXOF
function indexOFM() {

    let result = Number(prompt("Enter Element"));

    document.getElementById("buttonResult").innerText =
        array.indexOf(result);

}

// 11. INCLUDES
function includesM() {

    let result = Number(prompt("Enter Element"));

    document.getElementById("buttonResult").innerText =
        array.includes(result);

}

// 12. SORT
function sortM() {

    array.sort((a, b) => a - b);

    display();

}

// 13. FIND
function findM() {

    let result = Number(prompt("Enter Element"));

    document.getElementById("buttonResult").innerText =
        array.find((x) => x == result);

}

// 14. FINDINDEX
function findindexM() {

    let result = Number(prompt("Enter Element"));

    document.getElementById("buttonResult").innerText =
        array.findIndex((x) => x == result);

}

// 15. EVERY
function everyM() {

    let result = Number(prompt("Enter Number"));

    document.getElementById("buttonResult").innerText =
        array.every((x) => x > result);

}

// 16. FILTER
function filterM() {

    document.getElementById("buttonResult").innerText =
        array.filter((x) => x % 2 == 0);

}

// 17. REDUCE
function reduceM() {

    let total = array.reduce((a, b) => a + b, 0);

    document.getElementById("buttonResult").innerText =
        "Reduce Sum : " + total;

}

// 18. MAP
function mapM() {

    document.getElementById("buttonResult").innerText =
        array.map((x) => x * 5);

}