//This is for fruits function
var fruits = ["Banana", "Mango", "Apple", "Orange"];

function load_fruits() {
    document.getElementById("fruits").innerHTML = fruits;
}

function my_function() {
    var my_fruit = prompt('What is your favorite fruit?');
    fruits[fruits.length] = my_fruit;
    document.getElementById('fruits').innerHTML = fruits;
}