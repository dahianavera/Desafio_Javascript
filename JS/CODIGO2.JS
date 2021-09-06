    function Calcular1()
    {    
        var peso = document.getElementById('Edit3').value;
        var estatura = document.getElementById('Edit4').value;
        var imc = Math.round(parseFloat(peso)/parseFloat(estatura)**2,2);
        document.getElementById('Masa').value = imc;
        //print("pesa " + toString(imc));    
    }


