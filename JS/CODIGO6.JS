    function Calcular4()
    {    
        var sample = document.getElementById('Edit7').value;
        sample = sample.split(',');        
        var n = sample.length;
        
        for (i in Array(n)){
            sample[i] = int(sample[i]);
        }
        sample = sample.tuple;
        var sum = 0;
        var sumsq = 0;
    
        for (i in sample){
            sum += i;
            sumsq += i**2;
        }
        var mean = sum/n;
        var stdev = (sumsq/n-mean**2)**(1/2);
        document.getElementById('Media').value = mean;
        document.getElementById('Estandar').value = stdev;
       // window.alert('La media es', mean, ', y la desviación típica es', stdev);
        
    }



    