function addPosition(x, number) {
    console.log("Submit Clicked")
    console.log("user picked: " + number);
    console.log("Number X: " + x);
    var pos = document.getElementById("position");
    while (pos.classList.length > 0) {
        pos.classList.remove(pos.classList.item(0));
    }
    if (number == x) {
        pos.classList.add("correct");
        console.log("correct!")
        alert("correct!")
    } else if (number > x - 10 && number !== x && number < x + 10 && number !== x) {
        pos.classList.add("veryClose");
        console.log("Very Close")
    } else if (number > x - 20 && number < x + 20) {
        pos.classList.add("far");
        console.log("Far")
    } else {
        pos.classList.add("veryFar");
        console.log("Very Far!")

    }
}


document.addEventListener("DOMContentLoaded", () => {
    let x = 50;
    var button = document.getElementById("submitButton");
    button.addEventListener("click", () => {
        let number = document.getElementById("inputNumber").value;
        console.log("submitted: " + number);
        addPosition(x, number);
    });
});
