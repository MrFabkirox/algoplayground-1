
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('algoplayground-1, try those urls: /array-reverse /sum-of-four-or-nine/10 /specific-route-1');
})

app.get('/array-reverse', (req, res) => {

    var num1 = ["zero", "one", "two", "three", "four", "five"];
    console.log("num1 : " + num1);

    console.log("-------num2 = num1.slice()----");
    var num2 = num1.slice();
    
    console.log("--------REVERSE num2----------");

    var i = 0;

    while (i<num1.length) {

        num2[i] = num1[ (num1.length -1) - i];
        i++;

    }

    console.log("------display num1------------");
    console.log(num1);

    console.log("------display num2------------");
    console.log(num2);
    console.log("------------------------------");

    const arrayz  = [
        { num1 },
        { num2 }
      ];
      
      res.json(arrayz);  

});

app.get('/sum-of-four-or-nine/:nbIn', (req, res) => {

    var numbersYouWantTheMultipleOf = req.params.nbIn;;

    const requirement = "If we list all the natural numbers below 10 " +
      "that are multiples of 4 or 9, " +
      "we get 4, 8 and 9. " +
      "The sum of these multiples is 21. " +
      "Find the sum of all the multiples of 4 or 9 below ";

    console.log(requirement, numbersYouWantTheMultipleOf);

    var i = 0;
    var multipleOfFourOrNine = 0;
    var sumOfMultipleOfFourOrNine = 0;
    
    for (i; i<numbersYouWantTheMultipleOf; i++) {
        if ( (i%4)  == 0 || (i%9) == 0 ) {
            sumOfMultipleOfFourOrNine+=i;
            ++multipleOfFourOrNine;
            console.log("For i = " + "[" + i + "] " +
                "Number of multiple of four or nine: [" + multipleOfFourOrNine + "]" +
                " sumOfMultipleOfFourOrNine: " + "[" + sumOfMultipleOfFourOrNine + "]");
        }   
    }

    console.log("---Total Sum in " + "[" + numbersYouWantTheMultipleOf + "]" + "---");
    console.log("[" + sumOfMultipleOfFourOrNine + "]");

    const sumOfFourOrNine = [
        { "requirement" : `${requirement} ${numbersYouWantTheMultipleOf}`},
        { "numbersYouWantTheMultipleOf" : numbersYouWantTheMultipleOf },
        { "multipleOfFourOrNine" : multipleOfFourOrNine },
        { "sumOfMultipleOfFourOrNine" : sumOfMultipleOfFourOrNine }
    ]

    res.json(sumOfFourOrNine);  

});

app.get('/super-mario', (req, res) => {

    const heroes = [
        { id: 1, name: "Mario" },
        { id: 2, name: "Luigi" }
    ]
    res.json(heroes)
});

app.get('/specific-route-1', (req, res) => {
    res.send(
        'specific-route-1'
    );
});

module.exports = app;