        function Calcular2()
        {    
            var barras = parseInt(document.getElementById('Edit5').value);            
            var subtotal = barras*470;
            var descuento = subtotal*(50/100);
            var coste = subtotal-descuento; 
            document.getElementById('Total').value = coste;
        }



         