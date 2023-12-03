function clicar(){
    var dia = document.getElementById("dia")
    var mes = document.getElementById("mes")
    var ano = document.getElementById("ano")
    var dr = document.getElementById("dr")
    var mr = document.getElementById("mr")
    var ar = document.getElementById("ar")
    var res = document.getElementById("res")

    var dateToday  = new Date ()
    var d = dateToday.getDate()
    var m = dateToday.getMonth() +1
    var a = dateToday.getFullYear()

    var dia = Number(dia.value)
    var mes = Number(mes.value)
    var ano = Number(ano.value)

    if(mes == 0 || mes > 12){
        window.alert("Mês inválido")
    } else if(dia <= 0 || dia > 31){
        window.alert("Digite um dia válido")
    } else if(ano == 0 || ano > 2023){
        window.alert("Ano inválido")
    } else{
        var resy = a - ano
        var resd = d - dia
        var resm = m - mes

        if(d < dia){
            resm = m - mes - 1
            resd = 30 + d - dia
        }

        mr.innerHTML = resm
        ar.innerText = resy
        dr.innerHTML = resd

        if(resm < 10){
            mr.innerHTML = "0" + resm
        }

        if(resd < 10)
        dr.innerHTML = "0"+resd
        
    }
}