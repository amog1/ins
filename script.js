// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;
// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var minus50Btn = document.getElementById("minus50");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
// document.getElementById("plus1").addEventListener("click", add1);

plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
minus50Btn.addEventListener("click", sub50);

function sub50() {
  counter = counter - 50;
  displayEl.innerHTML = counter;
}

function add1() {
  counter = counter + 1;
  //   console.log(counter);
  displayEl.innerHTML = counter;
}

function sub10() {
  counter = counter - 10;
  displayEl.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time.";
function updateStory() {
  var newWord = stringInEl.value;
  story += newWord;
  //   console.log(story);
  stringInEl.value = "";
  story += newWord + "";
  stringOutEl.innerHTML = story;
}
// 4. Math.random() is used to bring RNG (random number generator) to your applications.

// let rand = Math.random() * 100; // 0-99.9
// rand = Math.floor(rand); // 0-100
// rand -= 50;
// console.log(rand);
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutlEl = document.getElementById("rand1-out");
var rand2OutlEl = document.getElementById("rand2-out");
var rand3OutlEl = document.getElementById("rand3-out");

rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random() * 100;
  rand = Math.floor(rand);
  rand += 100;
  rand1OutlEl.innerHTML = rand;
}

rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand = Math.random();
  rand.toFixed(3);
  rand2OutlEl.innerHTML = rand;
}

rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand = Math.random();
  rand.toFixed(3);
  rand3OutlEl.innerHTML = rand;
}
//
var rand4Btn = document.getElementById("rand4");
var rand4OutlEl = document.getElementById("rand4-out");

rand4Btn.addEventListener("click", showRand4);

function showRand4() {
  var rand = Math.random();
  rand.toFixed(3);
  rand4OutlEl.innerHTML = rand;
}
