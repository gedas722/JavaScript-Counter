
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");

plus.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

    output.innerText = result;
});
    
minus.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;

    output.innerText = result;
});

reset.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = 0;

    output.innerText = result;
});