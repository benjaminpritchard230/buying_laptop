const basePrice = 1899
let processor = 0
let total = 0


// Add event for button with id "m1pro"
document.getElementById("m1pro").addEventListener("click", function() {
document.getElementById("m1pro").classList.add("active")
document.getElementById("m1max").classList.remove("active")

processor = 0
total = basePrice + processor
document.getElementById("total").innerHTML = `£${total}`
})

// Add event for button with id "m1max"
document.getElementById("m1max").addEventListener("click", function() {
document.getElementById("m1max").classList.add("active")
document.getElementById("m1pro").classList.remove("active")


processor = 200
total = basePrice + processor
document.getElementById("total").innerHTML = `£${total}`
})