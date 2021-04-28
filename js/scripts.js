// $(document).ready(function () {

function data() {
    var size = parseFloat(document.querySelector('input[name="size"]:checked').value);
    var crust = parseFloat(document.querySelector('input[name="crust"]:checked').value);
    var toppings = parseFloat(document.querySelector('input[name="topping"]:checked').value);
    var mode = parseInt(document.getElementById("mode").value);
    var name = document.getElementById("name").value
    var total = size + crust + toppings;

    if (name === "") {
        alert("Kindly provide your name")
    } else {
        if (mode === 1) {
            alert("Thankyou for shopping with us " + name + ". Your total charge for your pizza is Kshs. " + total)
        } else {
            var deliveryCost = total + 200;
            alert("Hey " + name + ". There is an additional Kshs. 200 for transportation. Your total charge will be Kshs. " + deliveryCost + " shillings")
        }
    }
}