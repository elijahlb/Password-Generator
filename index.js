

function submitForm () {
    var passLength = document.getElementById('pass-length').value;
    if (passLength <= 128 && 8 <= passLength && passLength != null) {
    alert("that works")
} else {
    alert('please try again')
}
};

