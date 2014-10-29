$(document).ready(function(){
    var i = 1;
    var output;

    while (i <= 100){
        output = '';

        if (i%3 === 0){
            output += 'fizz ';
        }
        if (i%5 === 0){
            output += 'buzz';
        }
        if (output === ''){
            output = i;
        }

        i++;

        $('body').append(output + '<br>')
    }
});
