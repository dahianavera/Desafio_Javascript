function Calcular()
{    
    var horas = parseInt(document.getElementById('Edit1').value);
    var coste = parseInt(document.getElementById('Edit2').value);
    var Paga = (horas*coste);
    document.getElementById('Res').value = Paga;    
}