
function netcal() {
    alert('works')

    var n = document.getElementById("username").value;
    console.log(n);
    var a = parseInt(document.getElementById("calin").value)
    var b = parseInt(document.getElementById("calout").value)
    console.log(a, b)
    var net = a - b
    document.getElementById("msg1").textContent = n
    document.getElementById("msg1").textContent = "Hello " + n + " your Net calorie is " + net + " & weight change is: " + weight(net);

}
function weight(net) {
    var weight = net * 1 / 7000;
    return weight;
}