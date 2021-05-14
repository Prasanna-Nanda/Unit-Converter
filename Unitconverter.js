

var UnitConverter;
var Input;
var Calculate;
var Select;
var inputselect;
var result;
var Unitarray = {
    Area: ["Kilometer", " Meter", "Yard", "Centimeter", "Inches", "Feet"],
    Temperature: ["kelvin", "celsius", "Fahrenheit"],
    Speed: ["Miles per hour", "Kilometer per Hour", "Knot"]
};


// var Inputvalue = document.querySelector('#Inputvalue');
// // console.log("Input", Input)
// // Inputvalue.addEventListener("keyup", WorkingOnInput);
// // Inputvalue.addEventListener("keyup", WorkingOnInput);


// var Calculatevalue = document.querySelector('#Calculatevalue')
// // console.log("Input", Calculate)
// // Calculatevalue.addEventListener("keyup", WorkingOnResult)


// Select = document.querySelector('#unitconverter')
// // console.log("Unitconverter", Select.value)
// // Select.addEventListener('change', populate)



// inputselect = document.querySelector('#inputselect')
// // console.log("Unitconverter", inputselect)
// // inputselect.addEventListener('change', WorkingOnInput)

// result = document.querySelector('#result')
// // console.log("Unitconverter", result)
// result.addEventListener('change', WorkingOnResult)

window.addEventListener("DOMContentLoaded", function () {
    // console.log("length")

    Input = document.querySelector('#Inputvalue')
    // console.log("Input", Input)
    Input.addEventListener('keyup', WorkingOnInput)


    Calculate = document.querySelector('#Calculatevalue')
    // console.log("Input", Calculate)
    Calculate.addEventListener('keyup', WorkingOnResult)


    Select = document.querySelector('#unitconverter')
    // console.log("Unitconverter", Select.value)
    Select.addEventListener('change', populate)



    inputselect = document.querySelector('#inputselect')
    // console.log("Unitconverter", inputselect)
    inputselect.addEventListener('change', WorkingOnInput)

    result = document.querySelector('#result')
    // console.log("Unitconverter", result)
    result.addEventListener('change', WorkingOnResult)

    // UnitConverter = document.querySelector('#UnitConverter')
    // // console.log("Unitconverter", UnitConverter)
    // Select.addEventListener('change', populate)

    populate();


})


// inputselect.addEventListener('change', function(){
//     result.addEventListener('change', function(){
//     var Selected_option = Unitarray[this.value];
//     while(inputselect.options.length && result.options.length > 0){
//         inputselect.options.remove(0);
//         result.options.remove(0);
//     }
//     Array.from(Selected_option).forEach(function(el){
//         let option = new option(el,el);
//         Sub.appendchild(option);
//     })

// })
// })


// })

function WorkingOnInput() {
    console.log("working_input")
    selection("input");
}

function WorkingOnResult() {
    console.log("working_result")
    selection("result");
}


function populate() {
    // var unitconverter = document.getElementById(unitconverter);
    var inputselect = document.getElementById('inputselect');
    var result = document.getElementById('result');
    // console.log("53", Select);
    var selectedOption = Unitarray[this.value] || Unitarray.Area;
    // console.log(selectedOption);
    while (inputselect.options.length > 0 && result.options.length > 0) {
        inputselect.options.remove(0);
        result.options.remove(0);
    }
    Array.from(selectedOption).forEach(function (e) {
        // console.log("value", e)
        let option1 = new Option(e, e);
        let option2 = new Option(e, e);
        inputselect.appendChild(option1);
        result.appendChild(option2);
    })
    // for (var option in selectedOption) {

    // console.log(option);
    // }
    // MapselectedOption =
    // console.log("At 40",unitconverter.value);

    // inputselect.innerHTML = "";
    // result.innerHTML = "";
    // console.log("46", unitconverter)
    // if (unitconverter == "Temperature") {

    //     var OptionArray = ["kelvin|Kelvin","Fahrenheit|Fahrenheit","celsius|Celsius"];
    //     var OptionArray2 = ["Fahrenheit|Fahrenheit","kelvin|Kelvin","celsius|Celsius"];
    // }else if(unitconverter == "Area"){
    //     var OptionArray = ["Kilometer|Kilometer","Meter|Meter","Yard|Yard", "Miles|Miles", "Centimeter|Centimeter", "Inches|Inches"];
    //     var OptionArray2 = ["Meter|Meter","Kilometer|Kilometer","Yard|Yard", "Miles|Miles", "Centimeter|Centimeter", "Inches|Inches"];
    // }

    // for (var option in OptionArray) {

    //     var pair = OptionArray[option].split("|");
    //     var pair = OptionArray2[option].split("|");
    //     var newoption = document.createElement("option");


    //     newoption.value = pair[0];
    //     newoption.innerHTML = pair[1];
    //     converter1.option.add(newoption);
    //     converter2.option.add(newoption);
}
// }



function selection(inputtype) {
    let caseselect1 = inputselect.value + "-" + result.value;
    let caseselect2 = result.value + "-" + inputselect.value;
    // var inputtype = "input";
    console.log(caseselect1)
    console.log("result Value", caseselect2)

    // console.log("data given", Input.value)
    // console.log("data given1", Calculate.value)
    // console.log("data selected", Select.value)
    // console.log("data ", inputselect.value)
    // console.log("data unit", result.value)



    // console.log(typeof (caseselect));
    // console.log("141",Select.value)

    console.log("178", Select.value)
    switch (Select.value) {

        case "Area":
            console.log("182", caseselect1)
            Inputtype(inputtype, calculateArea1, calculateArea2, caseselect1, caseselect2);
            break;

        case "Temperature":
            Inputtype(inputtype, calculateTemperature1, calculateTemperature2, caseselect1, caseselect2);
            break;

        case "Speed":
            Inputtype(inputtype, calculateSpeed1, calculateSpeed2, caseselect1, caseselect2);
            break;

    }
}

function Inputtype(inputtype, method1, method2, option1, option2) {
    if (inputtype == "input") {
        // console.log("data recive in method1", method1, option1)
        method1(option1);
        
    } else {
        // console.log("data recive in method2", method2, option2)
        method2(option2);
        
    }

}


// Area: ["Kilometer", " Meter", "Yard", "Centimeter", "Inches", "Feet"],

function calculateArea1(caseselect) {
    console.log("214", caseselect)
    switch (caseselect) {

        case "Feet-Meter": Calculate.value = Input.value / 3.2808;
            console.log("Meter : ", Calculate.value)
            break;

        case "Feet-Inches": Calculate.value = Input.value * 12;
            console.log("Inches : ", Calculate.value)
            break;

        case "Feet-Centimeter": Calculate.value = Input.value / 0.032808;
            console.log("Centimeter : ", Calculate.value)
            break;

        case "Feet-Yard": Calculate.value = Input.value * 0.33333;
            console.log("Yard : ", Calculate.value)
            break;

        case "Feet-Kilometer": Calculate.value = Input.value / 3280.8;
            console.log("Kilometer : ", Calculate.value)
            break;



        case "Inches-Feet": Calculate.value = Input.value * 0.083333;
            console.log("Feet : ", Calculate.value)
            break;

        case "Inches-Meter": Calculate.value = Input.value / 39.370;
            console.log("Meter : ", Calculate.value)
            break;

        case "Inches-Centimeter": Calculate.value = Input.value / 0.39370;
            console.log("Centimeter : ", Calculate.value)
            break;

        case "Inches-Yard": Calculate.value = Input.value * 0.027778;
            console.log("Yard : ", Calculate.value)
            break;

        case "Inches-Kilometer": Calculate.value = Input.value / 39370;
            console.log("Kilometer : ", Calculate.value)
            break;

        case "Inches-Miles": Calculate.value = Input.value * 0.000015783;
            console.log("Miles : ", Calculate.value)
            break;

        case "Meter-Feet": Calculate.value = Input.value * 3.2808;
            console.log("Feet : ", Calculate.value)
            break;

        case "Meter-Inches": Calculate.value = Input.value * 39.370;
            console.log("Inches : ", Calculate.value)
            break;

        case "Meter-Centimeter": Calculate.value = Input.value / 0.01;
            console.log("Centimeter : ", Calculate.value)
            break;

        case "Meter-Yard": Calculate.value = Input.value * 1.0936;
            console.log("Yard : ", Calculate.value)
            break;

        case "Meter-Kilometer": Calculate.value = Input.value / 1000;
            console.log("Kilometer : ", Calculate.value)
            break;

        case "Meter-Miles": Calculate.value = Input.value * 0.00062137;
            console.log("Miles : ", Calculate.value)
            break;

        case "Yards-Feet": Calculate.value = Input.value * 3;
            console.log("Feet : ", Calculate.value)
            break;

        case "Yards-Meter": Calculate.value = Input.value / 1.0936;
            console.log("Meter : ", Calculate.value)
            break;

        case "Yards-Inches": Calculate.value = Input.value * 36;
            console.log("Inches : ", Calculate.value)
            break;

        case "Yards-Centimeter": Calculate.value = Input.value / 0.010936;
            console.log("Centimeter : ", Calculate.value)
            break;


        case "Yards-Kilometer": Calculate.value = Input.value / 1093.6;
            console.log("Kilometer : ", Calculate.value)
            break;

        case "Yards-Miles": Calculate.value = Input.value * 0.00056818;
            console.log("Miles : ", Calculate.value)
            break;

        case "Centimeter-Feet": Calculate.value = Input.value * 0.032808;
            console.log("Feet : ", Calculate.value)
            break;

        case "Centimeter-Meter": Calculate.value = Input.value / 100;
            console.log("Meter : ", Calculate.value)
            break;

        case "Centimeter-Inches": Calculate.value = Input.value * 0.39370;
            console.log("Inches : ", Calculate.value)
            break;

        case "Centimeter-Yard": Calculate.value = Input.value * 0.010936;
            console.log("Yard : ", Calculate.value)
            break;

        case "cm-Kilometer": Calculate.value = Input.value / 100000;
            console.log("Kilometer : ", Calculate.value)
            break;

        case "cm-Miles": Calculate.value = Input.value * 0.0000062137;
            console.log("Miles : ", Calculate.value)
            break;

        case "Miles-Feet": Calculate.value = Input.value * 5280;
            console.log("Feet : ", Calculate.value)
            break;

        case "Miles-Meter": Calculate.value = Input.value / 0.00062137;
            console.log("Meter : ", Calculate.value)
            break;

        case "Miles-Inches": Calculate.value = Input.value * 63360;
            console.log("Inches : ", Calculate.value)
            break;

        case "Miles-Centimeter": Calculate.value = Input.value / 0.0000062137;
            console.log("Centimeter : ", Calculate.value)
            break;

        case "Miles-Yard": Calculate.value = Input.value * 1760;
            console.log("Yard : ", Calculate.value)
            break;

        case "Miles-Kilometer": Calculate.value = Input.value / 0.62137;
            console.log("Kilometer : ", Calculate.value)
            break;

        case "Kilometer-Feet": Calculate.value = Input.value * 3280.8;
            console.log("Feet : ", Calculate.value)
            break;

        case "Kilometer-Meter": Calculate.value = Input.value * 1000;
            console.log("Meter : ", Calculate.value)
            break;

        case "Kilometer-Inches": Calculate.value = Input.value * 39370;
            console.log("Inches : ", Calculate.value)
            break;

        case "Kilometer-Centimeter": Calculate.value = Input.value * 100000;
            console.log("Centimeter : ", Calculate.value)
            break;

        case "Kilometer-Yard": Calculate.value = Input.value * 1093.6;
            console.log("Yard : ", Calculate.value)
            break;


        case "Kilometer-Miles": Calculate.value = Input.value * 0.62137;
            console.log("Miles : ", Calculate.value)
            break;
    }

}

function calculateArea2(caseselect) {

    console.log("calculateArea2", Calculate.value)
    switch (caseselect) {
        case "Feet-Meter": Input.value = Calculate.value / 3.2808;
            console.log("Meter : ", Input.value)
            break;

        case "Feet-Inches": Input.value = Calculate.value * 12;
            console.log("Inches : ", Input.value)
            break;

        case "Feet-Centimeter": Input.value = Calculate.value / 0.032808;
            console.log("Centimeter : ", Input.value)
            break;

        case "Feet-Yard": Input.value = Calculate.value * 0.33333;
            console.log("Yard : ", Input.value)
            break;

        case "Feet-Kilometer": Input.value = Calculate.value / 3280.8;
            console.log("Kilometer : ", Input.value)
            break;



        case "Inches-Feet": Input.value = Calculate.value * 0.083333;
            console.log("Feet : ", Input.value)
            break;

        case "Inches-Meter": Input.value = Calculate.value / 39.370;
            console.log("Meter : ", Input.value)
            break;

        case "Inches-Centimeter": Input.value = Calculate.value / 0.39370;
            console.log("Centimeter : ", Input.value)
            break;

        case "Inches-Yard": Input.value = Calculate.value * 0.027778;
            console.log("Yard : ", Input.value)
            break;

        case "Inches-Kilometer": Input.value = Calculate.value / 39370;
            console.log("Kilometer : ", Input.value)
            break;

        case "Inches-Miles": Input.value = Calculate.value * 0.000015783;
            console.log("Miles : ", Input.value)
            break;

        case "Meter-Feet": Input.value = Calculate.value * 3.2808;
            console.log("Feet : ", Input.value)
            break;

        case "Meter-Inches": Input.value = Calculate.value * 39.370;
            console.log("Inches : ", Input.value)
            break;

        case "Meter-Centimeter": Input.value = Calculate.value / 0.01;
            console.log("Centimeter : ", Input.value)
            break;

        case "Meter-Yard": Input.value = Calculate.value * 1.0936;
            console.log("Yard : ", Input.value)
            break;

        case "Meters-Kilometer": Input.value = Calculate.value / 1000;
            console.log("Kilometer : ", Input.value)
            break;

        case "Meter-Miles": Input.value = Calculate.value * 0.00062137;
            console.log("Miles : ", Input.value)
            break;

        case "Yards-Feet": Input.value = Calculate.value * 3;
            console.log("Feet : ", Input.value)
            break;

        case "Yards-Meter": Input.value = Calculate.value / 1.0936;
            console.log("Meter : ", Input.value)
            break;

        case "Yards-Inches": Input.value = Calculate.value * 36;
            console.log("Inches : ", Input.value)
            break;

        case "Yards-Centimeter": Input.value = Calculate.value / 0.010936;
            console.log("Centimeter : ", Input.value)
            break;


        case "Yards-Kilometer": Input.value = Calculate.value / 1093.6;
            console.log("Kilometer : ", Input.value)
            break;

        case "Yards-Miles": Input.value = Calculate.value * 0.00056818;
            console.log("Miles : ", Input.value)
            break;

        case "Centimeter-Feet": Input.value = Calculate.value * 0.032808;
            console.log("Feet : ", Input.value)
            break;

        case "Centimeter-Meter": Input.value = Calculate.value / 100;
            console.log("Meter : ", Input.value)
            break;

        case "Centimeter-Inches": Input.value = Calculate.value * 0.39370;
            console.log("Inches : ", Input.value)
            break;

        case "Centimeter-Yard": Input.value = Calculate.value * 0.010936;
            console.log("Yard : ", Input.value)
            break;

        case "Centimeter-Kilometer": Input.value = Calculate.value / 100000;
            console.log("Kilometer : ", Input.value)
            break;

        case "Centimeter-Miles": Input.value = Calculate.value * 0.0000062137;
            console.log("Miles : ", Input.value)
            break;

        case "Miles-Feet": Input.value = Calculate.value * 5280;
            console.log("Feet : ", Input.value)
            break;

        case "Miles-Meter": Input.value = Calculate.value / 0.00062137;
            console.log("Meter : ", Input.value)
            break;

        case "Miles-Inches": Input.value = Calculate.value * 63360;
            console.log("Inches : ", Input.value)
            break;

        case "Miles-Centimeter": Input.value = Calculate.value / 0.0000062137;
            console.log("Centimeter : ", Input.value)
            break;

        case "Miles-Yard": Input.value = Calculate.value * 1760;
            console.log("Yard : ", Input.value)
            break;

        case "Miles-Kilometer": Input.value = Calculate.value / 0.62137;
            console.log("Kilometer : ", Input.value)
            break;

        case "Kilometer-Feet": Input.value = Calculate.value * 3280.8;
            console.log("Feet : ", Input.value)
            break;

        case "Kilometer-Meter": Input.value = Calculate.value * 1000;
            console.log("Meter : ", Input.value)
            break;

        case "Kilometer-Inches": Input.value = Calculate.value * 39370;
            console.log("Inches : ", Input.value)
            break;

        case "Kilometer-Centimeter": Input.value = Calculate.value * 100000;
            console.log("Centimeter : ", Input.value)
            break;

        case "Kilometer-Yard": Input.value = Calculate.value * 1093.6;
            console.log("Yard : ", Input.value)
            break;


        case "Kilometer-Miles": Input.value = Calculate.value * 0.62137;
            console.log("Miles : ", Input.value)
            break;
    }
}


function calculateTemperature2(caseselect) {

    switch (caseselect) {

        case "kelvin-Fahrenheit": Input.value = ((Calculate.value - 273.15) * 1.8) + 32;
            console.log("Fahrenheit: ", Input.value);
            break;



        case "Fahrenheit-kelvin": Input.value = ((Calculate.value - 32) / 1.8) + 273.15;
            console.log("Kelvin: ", Input.value)
            break;


        case "Fahrenheit-celsius": Input.value = (Calculate.value - 32) / 1.8;
            console.log("Celsius : ", Input.value)
            break;

        case "celsius-Fahrenheit": Input.value = (Calculate.value * 1.8) + 32;
            console.log("Fahrenheit : ", Input.value)
            break;

        case "celsius-kelvin": Input.value = Calculate.value + 273.15;
            console.log("Kelvin: ", Input.value)
            break;

        case "kelvin-celsius": Input.value = Calculate.value - 273.15;
            console.log("Celsius : ", Input.value)
            break;
    }

}


function calculateTemperature1(caseselect) {

    switch (caseselect) {

        case "kelvin-Fahrenheit": Calculate.value = ((Input.value - 273.15) * 1.8) + 32;
            console.log("Fahrenheit: ", Calculate.value);
            break;



        case "Fahrenheit-kelvin": Calculate.value = ((Input.value - 32) / 1.8) + 273.15;
            console.log("Kelvin: ", Calculate.value)
            break;


        case "Fahrenheit-celsius": Calculate.value = (Input.value - 32) / 1.8;
            console.log("Celsius : ", Calculate.value)
            break;

        case "celsius-Fahrenheit": calculate.value = (Input.value * 1.8) + 32;
            console.log("Fahrenheit : ", calculate.value)
            break;

        case "celsius-kelvin": Calculate.value = Input.value + 273.15;
            console.log("Kelvin: ", Calculate.value)
            break;

        case "kelvin-celsius": Calculate.value = Input.value - 273.15;
            console.log("Celsius : ", Calculate.value)
            break;
    }

}


// ["Miles per hour", "Kilometer per Hour", "Knot"]

function calculateSpeed1(caseselect) {

    switch (caseselect) {
        case "Miles per hour-Kilometer per Hour": Calculate.value = Input.value * 1.609344;
            console.log("Kilometer per Hour : ", Calculate.value);
            break;

        case "Miles per hour-Knot": Calculate.value = Input.value / 1.150779;
            console.log("Knot : ", Calculate.value);
            break;

        case "Kilometer per Hour-Miles per hour": Calculate.value = Input.value / 1.609344;
            console.log("Miles per hour : ", Calculate.value);
            break;

        case "Kilometer per Hour-Knot": Calculate.value = Input.value / 1.852;
            console.log("Knot : ", Calculate.value);
            break;

        case "Knot-Miles per hour": Calculate.value = Input.value * 1.150779;
            console.log("Miles per hour : ", Calculate.value);
            break;


        case "Knot-Kilometer per hour": Calculate.value = Input.value * 1.852;
            console.log("Kilometer per hour : ", Calculate.value);
            break;
    }


}

function calculateSpeed2(caseselect) {

    switch (caseselect) {
        case "Miles per hour-Kilometer per Hour": Input.value = Calculate.value * 1.609344;
            console.log("Kilometer per Hour : ", Input.value);
            break;

        case "Miles per hour-Knot": Input.value = Calculate.value / 1.150779;
            console.log("Knot : ", Input.value);
            break;

        case "Kilometer per Hour-Miles per hour": Input.value = Calculate.value / 1.609344;
            console.log("Miles per hour : ", Input.value);
            break;

        case "Kilometer per Hour-Knot": Input.value = Calculate.value / 1.852;
            console.log("Knot : ", Input.value);
            break;

        case "Knot-Miles per hour": Input.value = Calculate.value * 1.150779;
            console.log("Miles per hour : ", Input.value);
            break;


        case "Knot-Kilometer per hour": Input.value = Calculate.value * 1.852;
            console.log("Kilometer per hour : ", Input.value);
            break;
    }


}


//         ["Miles per hour", "Kilometer per Hour", "Knot"]


// MPH to KPH= KPH=MPH*1.609344
// MPH to Knots= knots=MPH/1.150779

// KPH to MPH = MPH=KPH/1.609344
// KPH to Knots = 	knots=KPH/1.852

// Knots to MPH =  MPH=knots*1.150779
// Knots to KPH = KPH=knots*1.852




