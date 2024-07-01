const calcSearch = document.getElementById("calcSearcher");
const btn1 = document.getElementById("btn1");

function appendToDisplay(input) {
    calcSearch.value += input;
}

function clearDisplay() {
    calcSearch.value = "";
}

function calculate() {
    //calcSearch;
    try {
        calcSearch.value = eval(calcSearch.value);
    } catch (error) {
        calcSearch.value = "error";
    }
}



