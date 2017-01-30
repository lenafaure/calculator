/**
 * Created by lefaure on 30/01/2017.
 */

(function(){
    var digits = document.querySelectorAll(".btn-digit"),
        operations = document.querySelectorAll(".btn-operation"),
        symbols = document.querySelectorAll(".btn-symbol"),
        equals = document.getElementById("btn-equal"),
        del = document.getElementById("btn-del"),
        clear = document.getElementById("btn-clear"),
        result = document.getElementById("result"),
        typedHistory = document.getElementById("history")

    digits.forEach(function(digit){
        digit.addEventListener("click", function(){
            var digitValue = this.children[0].value;

            if(result.value === "0") {
                result.value = digitValue;
            }
            else {
                result.value = result.value + digitValue;
            }

            typedHistory.value += digitValue;
        })
    });

    operations.forEach(function(operation){
        operation.addEventListener("click", function(){
            var operationValue = this.children[0].value;
            typedHistory.value = typedHistory.value + operationValue;
            result.value = "";
        })
    });

    symbols.forEach(function(symbol) {
        symbol.addEventListener("click", function(){
            var symbolValue = this.children[0].value;

            if(symbolValue == ","){
                symbolValue = symbolValue.replace(",", ".");
            }

            typedHistory.value = typedHistory.value + symbolValue;
            result.value =  result.value + symbolValue;
        })
    });

    equals.addEventListener("click", function(){
        var calculate = typedHistory.value;

        if(calculate.indexOf("x") != 1){
            calculate = calculate.replace("x", "*");
        }
        if(calculate.indexOf(",") != 1){
            calculate = calculate.replace(",", ".");
        }

        console.log(calculate);
        result.value = eval(calculate);
    });

    clear.addEventListener("click", function(){
        typedHistory.value = "";
        result.value = "0";
    });

    del.addEventListener("click", function(){
        var currentValue = typedHistory.value;

        currentValue.charAt(currentValue.length-1);
        currentValue = currentValue.substr(0, currentValue.length-1);
        typedHistory.value = currentValue;
    });

})();
