var arr = [];
var q = 0; var w = 0; var e = 0;
function odd(arr) {
    for (var i = 0; i<arr.length; i++) {

    if (arr[i] === 0) {
        e += 1;
    } else if (arr[i] % 2 === 0) {
        w +=1;
    } else if (arr[i] % 2 === 1) {
        q += 1;
    } 
    } console.log(['нечетных: ', q], ['четных: ', w], ['нулей: ', e]);
}