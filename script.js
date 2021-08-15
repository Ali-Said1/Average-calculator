function average(){
    var i;
    var sum = 0;
    for(i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    var average = sum / i;
    
    return average;
}

var result = average(55, 95, 45);

var p = document.querySelector('p');

p.innerText= result;