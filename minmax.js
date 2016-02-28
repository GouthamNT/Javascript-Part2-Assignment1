
function generateInput() {
    var num = document.querySelector('#selector').value;
    
    var i;
    var input = document.querySelector('#inputs');
    var body = document.querySelector('body');
    var existing_text = document.querySelector('#text');
    if(existing_text != null) {
        body.removeChild(input);
        body.removeChild(document.querySelector('#result'));
    }
    var div = document.createElement('div');
    div.setAttribute('id', 'inputs');
    body.appendChild(div);
    for(i = 0; i<num ; i++) {
        var input = document.querySelector('#inputs');
        var para = document.createElement('p');
        para.textContent = 'Number '+ (i+1) +' : ';
        var text = document.createElement('input');
    
        text.setAttribute('id', 'text');
        para.appendChild(text);
        input.appendChild(para);
    }
    div = document.createElement('div');
    div.setAttribute('id', 'result');
    var button = document.createElement('button');
    button.setAttribute('onclick','findMaxMin()');
    button.textContent = "Find Max and Min";
    div.appendChild(button);
    body.appendChild(div);
    
}

function findMaxMin() {
    var numbers = document.querySelectorAll('#text');
    console.log(numbers);
    var len = numbers.length,
        i,max,min;
    var result = document.querySelector('#result'),
        para = document.querySelector('#maxmin');
    max = numbers[0].value;
    min = numbers[0].value;
    for(i = 0;i < len; i++) {
        var temp = parseInt(numbers[i].value);
        if(isNaN(temp)) {
            
        }
        else {
            if(max <= temp) {
                max = temp;
            }
            if(min >= temp) {
                min = temp;
            }
        }
    }
    if(para == null) {
        para = document.createElement('p');
        para.setAttribute('id','maxmin');
        para.textContent = "Max number is "+ max + " Min Number is "+min;
        result.appendChild(para);
    }
    else {
        var newpara = document.createElement('p');
        newpara.setAttribute('id','maxmin');
        newpara.textContent = "Max number is "+ max + " Min Number is "+min;
        result.replaceChild(newpara,para);
    }
}