function fullName() {
    var firstctr = document.getElementById("first");
    var lasttctr = document.getElementById("last");
    var outctr = document.getElementById("out");
    if (firstctr.value != "") {
        var first = firstctr.value;
        if (lasttctr.value != "") {
            var last = lasttctr.value;
            outctr.value = first + " " + last;
            console.log(outctr.value);
        } else {
            alert("Invalid Value: Last Name cannot be Null!")
        }
    } else {
        alert("Invalid Value: First Name cannot be Null!");
    }
}
