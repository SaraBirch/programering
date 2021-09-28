console.log(21)
var minAlder = 21
console.log(minAlder)
// YAAAS this is my age
console.log("Min alder er " + minAlder)
function printAlder(alder){
console.log(alder)
}
printAlder(21)

// Opg 1
 
function spanskehilsner() {
    console.log("Buenas Tardes")
}  
spanskehilsner()

function spanskehilsner(hilsen = "Buenas Tardes"){
    console.log(hilsen)
}
spanskehilsner()
spanskehilsner("Guten Tag")
// opg 1

function antalØl(kasser){
    console.log(`Vi har ${kasser} kasser og dermed ` + 30*kasser + ` øl`)
}
antalØl(5)

const pris = 5
function totalpris(kasser){
    console.log(`Vi har ${kasser} kasser som samlet koster ` + 120*kasser + ` kroner`)
}
totalpris(pris)

// opg 2

function planteHarBrugForVan(dag){
    if (dag == `onsdag`)
    {return true;}
    else return false 
}
console.log(planteHarBrugForVan(`onsdag`))
console.log(planteHarBrugForVan(`torsdag`))

// deklarativ funktion 

const planteHarBrugForVand = (dag) => dag == "onsdag" ? true : false
console.log(planteHarBrugForVand("onsdag"))

// opg. 3

const indkøbsliste = ["ris", "gulderøder", "mælk", "sukker", "kaffe", "toiletpapir"];
let first = indkøbsliste.shift()
console.log(indkøbsliste)
// sletter det første item i rækken 

let second = indkøbsliste.unshift("pasta")
console.log(indkøbsliste)
// inputer pasta som det første item 

let third = indkøbsliste.indexOf("mælk")
console.log(indkøbsliste.indexOf("mælk"))
// angiver hvor på rækken mælken befinder sig

