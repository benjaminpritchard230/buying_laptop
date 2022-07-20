const basePrice = 1899;
let totalPrice = 0;
let extraList = [];

// add together items in array
function addUp() {
  let total = 0;
  for (let i = 0; i < extraList.length; i++) {
    total += extraList[i];
  }
  return total + basePrice;
}
// add item to array if it isnt already in the array
function addItem(item) {
  if (!extraList.includes(item)) {
    extraList.push(item);
  }
}

// Create object
function Processor(name, cost, id) {
  this.name = name;
  this.cost = cost;
  this.id = id;
  // Create method for object
  this.createButton = function () {
    const button = document.createElement("button");
    button.innerHTML = this.name;
    button.classList.add("btn", "btn-primary", "pr-3");
    button.addEventListener("click", function () {
      console.log(name);
      totalPrice = basePrice + cost;
      document.getElementById("total").innerHTML = `£${addUp()}`;
      addItem(cost);
    });
    document.getElementById("processorbuttons").appendChild(button);
  };
  this.createButton();
}

// new object instance
var pro = new Processor("M1 Pro", 0, "m1pro");
var max = new Processor("Max", 200, "m1max");
var ripoff = new Processor("Ripoff", 1000, "m1ripoff");

// Create object
function Memory(name, cost, id) {
  this.name = name;
  this.cost = cost;
  this.id = id;
  // Create method for object
  this.createButton = function () {
    const button = document.createElement("button");
    button.innerHTML = this.name;
    button.classList.add("btn", "btn-primary", "pr-3");
    button.addEventListener("click", function () {
      console.log(name);
      totalPrice = basePrice + cost;
      document.getElementById("total").innerHTML = `£${addUp()}`;
      addItem(cost);
    });
    document.getElementById("memorybuttons").appendChild(button);
  };
  this.createButton();
}

var sixteenGB = new Memory("16GB", 0, "16gb");
var thirtytwoGB = new Memory("32GB", 200, "32gb");

// create object
function Storage(name, cost, id) {
  this.name = name;
  this.cost = cost;
  this.id = id;
  // Create method for object
  this.createButton = function () {
    const button = document.createElement("button");
    button.innerHTML = this.name;
    button.classList.add("btn", "btn-primary", "pr-3");
    button.addEventListener("click", function () {
      console.log(name);
      totalPrice = basePrice + cost;
      document.getElementById("total").innerHTML = `£${addUp()}`;
      addItem(cost);
    });
    document.getElementById("storagebuttons").appendChild(button);
  };
  this.createButton();
}

var fiveTwelve = new Storage("512GB", 0, "512gb");
var terabyte = new Storage("1TB", 200, "1tb");

// add item to array if it isnt already in the array
function addItem(item) {
  if (!extraList.includes(item)) {
    extraList.push(item);
  }
}
