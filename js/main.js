$(document).ready(function(){
    var i = 1;
    var output;
    var top;

    $(document).on('click', '.submit', function(){
        top = getTop();

        if (isNaN(top) || (top % 1) != 0){
            alert('Please enter a valid number');
        } else {
            $('.top').val('');
            fizzBuzz(+top);
        }
    });

    function fizzBuzz(top) {
        while (i <= top) {
            output = '';

            if (i % 3 === 0) {
                output += 'fizz ';
            }
            if (i % 5 === 0) {
                output += 'buzz';
            }
            if (output === '') {
                output = i;
            }

            i++;

            $('.fizzbuzz').append(output + '<br>')
        }
    }

    function getTop(){
        return $('.top').val();
    }
});
