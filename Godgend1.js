// del 1 
let hemmeligBesked = [`hej`, `klaus`, `vil`, `du`, `med`, `til`, `fodbold`, `i`, `klubben`, `i`, `aften`, `?`, `kurt`]
    let last = hemmeligBesked.pop()
console.log(hemmeligBesked)

let newLength = hemmeligBesked.push(`adressen`, `er`, `Priratvej`, `100`)
console.log(hemmeligBesked)

let pos = hemmeligBesked.indexOf(`klaus`)
hemmeligBesked[pos] = `bro!`
console.log(hemmeligBesked)

let first = hemmeligBesked.shift()
console.log(hemmeligBesked)

hemmeligBesked.unshift(`yo`)
console.log(hemmeligBesked)

pos = hemmeligBesked.indexOf('fodbold')
let removedItem = hemmeligBesked.splice(pos, 3, 'piratfest')
console.log(hemmeligBesked)

let faktiskeBesked = hemmeligBesked.toString()
console.log(faktiskeBesked.replace(/,/g,' '))

// del 2 fjerne alle kommanerne med mellemrum 
function gørBeskedPersonlig(navn) {
    let newLine = faktiskeBesked.replace(/,/g,' ')
    console.log(newLine.replace('bro!', navn))
}
gørBeskedPersonlig('Sigurd')

// del 3

let itemList = [
    {navn:"Sigurd",sang:"Hit me baby one more time"},
    {navn: "Tessa", sang: "Ben"},
    {navn:"Mia", sang:"Love will tear us apart" }
] 


let songList = []

for (var idx = 0; idx < itemList.length; idx++)
{
    let name = itemList[idx].navn
    gørBeskedPersonlig(name)
    songList.push(itemList[idx].sang)
    if (idx == itemList.length -1) {
        console.log(songList)
    }
}
