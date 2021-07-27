str = prompt("Digite uma palavra");

function checkPalindrome(str) {     
    for(var i = 0; i < str.length / 2; i++) 
    {
        if (str[i] != str[str.length - i - 1]) return false;
    }
    
    return true;
}

if (checkPalindrome(str) == false){
	alert("nao palindromo");
}
else{
	alert("palindromo");

}