let langos = {"nev": null, "darab": null, "so": null, "fokhagyma": null, "ar": null}
let langosjson = []
const button = document.querySelector("button")
const numbers = document.querySelectorAll('input[type="number"')
const osszes_langos = document.querySelectorAll("[data-langos]")

for (let i = 0; i < numbers.length; i++){
    numbers[i].min = 1
    numbers[i].max = 6
}

button.addEventListener("click", ()=>{
    keszALangosJSON()
})

function keszALangosJSON(){
    for (let i = 0; i < osszes_langos.length; i++){
        let langosi = osszes_langos[i].children

        if (langosi[3].value > 0){
            langos.nev = langosi[1].innerHTML
            langos.darab = langosi[3].value
            if (langosi[5].checked){
                langos.so = "Kell"
            } else{
                langos.so = "Nem kell"
            }

            if (langosi[7].checked){
                langos.fokhagyma = "Kell"
            } else{
                langos.fokhagyma = "Nem kell"
            }
            langos.ar = langosi[10].innerHTML
            let langos_vegleges = {...langos}
            langosjson.push(langos_vegleges)
        }
    }

    if (langosjson.length == 0){
        alert("Kérem, válasszon a lángosok közül!")

    } else{
        localStorage.setItem('modifiedLangosJSON', JSON.stringify(langosjson));
        window.location.href = "osszegzes.html"
    }
}