const langosjson = JSON.parse(localStorage.getItem('modifiedLangosJSON'));
const div = document.querySelectorAll("[data-table]")
const button = document.querySelector("button")
let nevlista = []
let osszesen = 0
let darab = 0
const form = document.querySelectorAll(".container")[1].children[0].children

window.addEventListener("load", ()=>{

    for (let i = 0; i < langosjson.length; i++){
        let langos = langosjson[i]
        nevlista.push(langos.nev)
        div[3].innerHTML += `<strong>${langos.nev}:</strong> ${langos.darab};<br>`
        div[5].innerHTML += `<strong>${langos.nev}:</strong> <i>${langos.so}, ${langos.fokhagyma}</i>;<br>`
        osszesen += Number(langos.darab) * langos.ar
        darab += Number(langos.darab)
    }

    div[1].innerHTML = nevlista.join(", ")
    div[7].innerHTML = `${osszesen} Ft`
})

button.addEventListener("click", ()=>{
    if (form[1].value == "" || form[3].value == "" || form[5].value == ""){
        alert("A rendelés leadása sikertelen!")
    } else{
        alert(`A rendelés leadása sikeres! A lángosokat ${darab * 10} perc múlva leszállítjuk!`)
    }
})