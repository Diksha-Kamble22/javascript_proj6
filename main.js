console.log('Hello World!');

function f1(int_1, int_2) {
  var a = int_1;
  var c = int_2;
  var jk = 46;
  var d = (a - c) * jk * 4 * int_2;
  return d;
}
var res = f1(3, 5);
console.log(res);

function f2(int_1, int_2, int_3) {
  var e = int_1;
  var c = int_2;
  var jk = -15;
  var d = (e - c) * 9 * int_1;
  return (c - jk) === (e + d);
}
var res = f2(9, 7);
console.log(res);

//examble 2 -type

function minus(bh, gb) {
  return bh - gb;
}

function division(ad, kj) {
  return ad / kj;
}

function multiple(kgf, rrr) {
  return (kgf * rrr);
}

function Addition(mn, lk) {
  return mn + lk;
}

var output = Addition(36, 0) * multiple(5, 54) / 72;
console.log(output);

// example 3 - type 

function coordination(fname = "Pihu", lname = "Ram") {
  var convert = fname + " & " + lname;
  return convert;
}
var prob = coordination("Moana is a singer", "Music player");
console.log(prob);

var solution = coordination();
console.log(solution);

// example 4- type:

function problem1(num) {
  var i = 1;
  console.log("table of " + num);

  do {
    var res = num * i;
    console.log(res);
    i = i + 1;
  } while (i < 15);
}

problem1(7);

// example 5 - type

function flower_pot(total) {
  var name_of_flower = "None";

  if (total === 3) {
    name_of_flower = "LOTUS";
  } else if (total === 6) {
    name_of_flower = "ROSE";
  } else if (total === 9) {
    name_of_flower = "lily"
  }
  return name_of_flower;
}

var operation_1 = flower_pot(6);
console.log(operation_1);

var operation_2 = flower_pot(3);
console.log(operation_2);

var operation_3 = flower_pot(0);
console.log(operation_3);
