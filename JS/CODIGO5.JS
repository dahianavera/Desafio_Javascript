/*function Calcular3()
{    
    word = document.getElementById("Edit6").value;
    reversed_word = word;
    word = Array(word);
    reversed_word = Array(reversed_word);
    reversed_word.reverse();
    if (word == reversed_word){
    window.alert("Es un palíndromo");
    }
    else{
    window.alert("No es un palíndromo");   
    }    
}*/

function Calcular3() {
    var re = /[^A-Za-z0-9]/g;
    var str = document.getElementById("Edit6").value;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return window.alert("No es Palindromo");          
      }
    }
    return window.alert("Es Palindromo");    
   }
   


