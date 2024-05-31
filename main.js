// functions for basic mathematical operations
function sum(n1, n2){
    var res = n1 + n2;
    return res;
};
function sub(n1, n2){
    var res = n1 - n2;
    return res;
};
function mul(n1, n2){
    var res = n1 * n2;
    return res;
};
function div(n1, n2){
    var res = n1 / n2;
    return res;
};

// function for showing result
function showres(opFunc, opName){
    // console.log(operation);
    var [n1, n2] = get_inputs();
    res = opFunc(n1, n2);
    document.getElementById('outputLabel').innerHTML = opName;
    document.getElementById('output').value = String(res);
    // alert(String(res) + ' ' + operation);
};

// function for retrieving inputs
function get_inputs(){
    var n1 = Number(document.getElementById('num1').value);
    var n2 = Number(document.getElementById('num2').value);
    // console.log(n1, n2);
    return [n1, n2];
}

// execution of specific operation on specific button click

var sumop = document.getElementById('sum');
sumop.addEventListener('click', function(){
    // var [n1, n2] = get_inputs();
    // console.log(n1, n2);
    // var res = sum(n1, n2);
    // showres('Summation', res);
    showres(sum, 'Summation');
});

var subop = document.getElementById('sub');
subop.addEventListener('click', function(){
    showres(sub, 'Subtraction');
});

var mulop = document.getElementById('mul');
mulop.addEventListener('click', function(){
    showres(mul, 'Multiplication');
});

var divop = document.getElementById('div');
divop.addEventListener('click', function(){
    showres(div, 'Division');
});




/*

// var num1 = document.getElementById('num1').value;
// var num2 = document.getElementById('num2').value;

// var equal = document.getElementById('equal');

// var n1 = Number(num1);
// var n2 = Number(num2);

// var input1 = document.getElementById('num1')
// input1.addEventListener('change', function(){
//     var num1 = Number(input1.value);
//     // console.log(num1);
//     // alert(num1);
//     // return num1;
// })

// var input2 = document.getElementById('num2')
// input2.addEventListener('change', function(){
//     var num2 = Number(input2.value);
//     // console.log(num2);
//     // alert(num1);
//     // return num2;
// })

var op = document.getElementsByClassName('ope');
op.addEventListener('click', function(){
    var n1 = Number(document.getElementById('num1').value);
    var n2 = Number(document.getElementById('num2').value);
    operation = op.innerHTML;
    alert(operation);
    if(operation = '+'){
        var result = n1 + n2;
        document.getElementById('outputLabel').innerHTML = 'Summation'
        document.getElementById('output').value = result;
        // alert(op);
    }
    if(operation = '-'){
        var result = n1 - n2;
        document.getElementById('outputLabel').innerHTML = 'Subtraction'
        document.getElementById('output').value = result;
        // alert(op);
    }
    if(operation = '*'){
        var result = n1 * n2;
        document.getElementById('outputLabel').innerHTML = 'Multiplication'
        document.getElementById('output').value = result;
        // alert(op);
    }
    if(operation = '/'){
        var result = n1 / n2;
        document.getElementById('outputLabel').innerHTML = 'Division'
        document.getElementById('output').value = result;
        // alert(op);
    }
})

// equal.addEventListener('click', function(){
//     var n1 = Number(document.getElementById('num1').value);
//     var n2 = Number(document.getElementById('num2').value);
//     console.log(n1, n2);
//     alert(String(num1) + ' ' + String(num2));
//     document.getElementById('output').value = num1;
// });

*/