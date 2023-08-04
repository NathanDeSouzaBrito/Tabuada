function tabuada() {
    var num = window.document.getElementById("num")
    var end = document.getElementById("end")
    if(num.value.length == 0 || end.value.length == 0){
        window.alert("Coloque um valor na tabuada")
    } else{
        var n = Number(num.value)
        var e = Number(end.value)
        var x = 0
        var r = ""
        var res = window.document.getElementById("resposta")
        // valores da tatuada
        res.innerHTML = `A tabuada do ${n} é <br>`
        do {
            r = n * x
            res.innerHTML += `${e} X ${x} = ${r} <br>`
            x++          // x = x + 1
        } while (x <= e)
}}