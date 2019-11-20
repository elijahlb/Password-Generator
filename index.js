

function submitForm () {
    var charObj = {
    lowerChars : 'abcdefghijklmnopqrstuvwxyz',
    upperChars : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers : '0123456789',
    specialChar : '!@#$%^&*()`{}[]|\/?~=-', 
    upperLower : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numberChar : '!@#$%^&*()`{}[]|\/?~=-0123456789',
    lowerNumber : '0123456789abcdefghijklmnopqrstuvwxyz',
    lowerSpec : 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()`{}[]|\/?~=-',
    upperSpec : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()`{}[]|\/?~=-',
    upperNumbers : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    numberSpec : '0123456789!@#$%^&*()`{}[]|\/?~=-', 
    lowUpNums : 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowUpSpec : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()`{}[]|\/?~=-',
    lowSpecNum : 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()`{}[]|\/?~=-0123456789',
    all : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`{}[]|\/?~=-'
    }
    var arr = [];
    var passLength = document.getElementById('pass-length').value;

for (i=0;i<passLength;i++) {

    // CASES FOR ONE OPTION -----------------------------------------------------------------------------------------------

if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked) && 
    (document.getElementById('uppercase').checked == false) && (document.getElementById('numbers').checked == false) && 
    (document.getElementById('spec-char').checked == false)) {
    var newpass = charObj.lowerChars[Math.floor(Math.random()*charObj.lowerChars.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('uppercase').checked) &&
    (document.getElementById('lowercase').checked == false) && (document.getElementById('numbers').checked == false) &&
    (document.getElementById('spec-char').checked == false)) {
    var newpass = charObj.upperChars[Math.floor(Math.random()*charObj.upperChars.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('numbers').checked) && 
    (document.getElementById('lowercase').checked == false) && (document.getElementById('uppercase').checked == false) && 
    (document.getElementById('spec-char').checked == false)){
    var newpass = charObj.numbers[Math.floor(Math.random()*charObj.numbers.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('spec-char').checked) &&
    (document.getElementById('lowercase').checked == false) && (document.getElementById('uppercase').checked == false) &&
    (document.getElementById('numbers').checked == false)){
    var newpass = charObj.specialChar[Math.floor(Math.random()*charObj.specialChar.length)];
    arr.push(newpass);

// CASES FOR TWO OPTIONS -----------------------------------------------------------------------------------------------

} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked) && 
    (document.getElementById('uppercase').checked) && (document.getElementById('numbers').checked == false)
    && (document.getElementById('spec-char').checked == false)) {
    var newpass = charObj.upperLower[Math.floor(Math.random()*charObj.upperLower.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked) && 
    (document.getElementById('spec-char').checked) && (document.getElementById('uppercase').checked == false)
    && (document.getElementById('numbers').checked == false)) {
    var newpass = charObj.lowerSpec[Math.floor(Math.random()*charObj.lowerSpec.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked) && 
    (document.getElementById('numbers').checked) && (document.getElementById('spec-char').checked == false)
    && (document.getElementById('uppercase').checked == false)) {
    var newpass = charObj.lowerNumber[Math.floor(Math.random()*charObj.lowerNumber.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('uppercase').checked) && 
    (document.getElementById('numbers').checked) && (document.getElementById('spec-char').checked == false)
    && (document.getElementById('lowercase').checked == false)) {
    var newpass = charObj.upperNumbers[Math.floor(Math.random()*charObj.upperNumbers.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('uppercase').checked) && 
    (document.getElementById('spec-char').checked) && (document.getElementById('lowercase').checked == false)
    && (document.getElementById('numbers').checked == false)) {
    var newpass = charObj.upperSpec[Math.floor(Math.random()*charObj.upperSpec.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('numbers').checked) && 
    (document.getElementById('spec-char').checked) && (document.getElementById('uppercase').checked == false)
    && (document.getElementById('lowercase').checked == false)) {
    var newpass = charObj.numberSpec[Math.floor(Math.random()*charObj.numberSpec.length)];
    arr.push(newpass);

// CASES FOR THREE OPTIONS ----------------------------------------------------------------------------------------------- 

} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked) && 
    (document.getElementById('uppercase').checked) && (document.getElementById('numbers').checked)
    && (document.getElementById('spec-char').checked == false)) {
    var newpass = charObj.lowUpNums[Math.floor(Math.random()*charObj.lowUpNums.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked) && 
    (document.getElementById('uppercase').checked) && (document.getElementById('spec-char').checked)
    && (document.getElementById('numbers').checked == false)) {
    var newpass = charObj.lowUpSpec[Math.floor(Math.random()*charObj.lowUpSpec.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked) && 
    (document.getElementById('spec-char').checked) && (document.getElementById('numbers').checked)
    && (document.getElementById('spec-char').checked == false)) {
    var newpass = charObj.lowSpecNum[Math.floor(Math.random()*charObj.lowSpecNum.length)];
    arr.push(newpass);

// CASE FOR ALL ----------------------------------------------------------------------------------------------------------

} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked) && 
    (document.getElementById('uppercase').checked) && (document.getElementById('numbers').checked) 
    && (document.getElementById('spec-char').checked) ) {
    var newpass = charObj.all[Math.floor(Math.random()*charObj.all.length)];
    arr.push(newpass);
} 
}
alert(arr.join(""));
};



// lower number spec


//     ----------ALTERNATE SOLUTIONS ----------------------------


/*function submitForm () {
var lowerObj = {
    lower:'abcdefghijklmnopqrstuvwxyz',
    checked: false
}
var upperObj = {
    upper:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    checked: false
}
var numberObj = {
    number:'0123456789',
    checked: false
}
var symbolObj = {
    symbol:'!@#$%^&*()`{}[]|\/?~=-',
    checked: false
}

var arr = [];
var passLength = document.getElementById('pass-length').value;
for (i=0;i<passLength;i++) {
    if ((passLength <= 128 && 8 <= passLength && passLength != null) && 
    (lowerObj.checked==true)); {
        var newpass = lowerObj.lower[Math.floor(Math.random()*lowerObj.lower.length)]
        arr.push(newpass);
    }
}
alert(arr.join(""));
}*/

/*function submitForm() {
    var passLength = document.getElementById('pass-length').value;
    if(passLength <= 128 && 8 <= passLength && passLength != null) {
        var charObj = [
            {chars:'abcdefghijklmnopqrstuvwxyz', checked:false},
            {chars : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', checked:false},
            {chars : '0123456789', checked:false},
            {chars : '!@#$%^&*()`{}[]|\/?~=-', checked:false}
        ]

        let checkboxElements = document.querySelectorAll(".form-group input");
    
        var arr = [];
        let showPassword = false;
    
        for (let i = 0; i < charObj.length; i++) {
            if(charObj[i].checked) {
                charObj[i].checked = checkboxElements[i].checked;
                arr.push(charObj[i].chars)
            }
        }
    }

    // var newpass = cha[Math.floor(Math.random()*lowerObj.lower.length)]
    // arr.push(newpass);

};*/



