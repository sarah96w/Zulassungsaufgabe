function diamond(number) {
    line = '';
    //up
    for (i = 1; i <= number; i++) {

        for (j = 1; j <= i; j++) {

            line += ' ' + j; //left

        }
        for (j = i; j > 1; j--) {

            line += ' ' + (j - 1); //right

        }


        line += '<br>';
    }

    //down
    for (i = number - 1; i >= 1; i--) {

        for (j = 1; j <= i; j++) {

            line += ' ' + j; //left

        }
        for (j = i; j > 1; j--) {

            line += ' ' + (j - 1); //right

        }


        line += '<br>';
    }



    document.getElementById('result').innerHTML = line;

}
