

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
    upperSpec : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()`{}[]|\/?~=-'
    }
    var arr = [];
    var passLength = document.getElementById('pass-length').value;

for (i=0;i<passLength;i++) {
if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('lowercase').checked)){
   var newpass = charObj.lowerChars[Math.floor(Math.random()*charObj.lowerChars.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('uppercase').checked)){
    var newpass = charObj.upperChars[Math.floor(Math.random()*charObj.upperChars.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('numbers').checked)){
    var newpass = charObj.numbers[Math.floor(Math.random()*charObj.numbers.length)];
    arr.push(newpass);
} else if ((passLength <= 128 && 8 <= passLength && passLength != null) && (document.getElementById('spec-char').checked)){
    var newpass = charObj.specialChar[Math.floor(Math.random()*charObj.specialChar.length)];
    arr.push(newpass);
} 
}
alert(arr.join(""));
};

