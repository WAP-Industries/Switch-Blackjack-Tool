const Cards = [..."A23456789", "10"]
let Container = null

function CreateDiv(width, height, text="", background="none"){
    const div = document.createElement("div")
    div.style.position = "absolute"
    div.style.overflow = "hidden"
    div.style.top = div.style.left = 0
    ;[div.style.width, div.style.height] = [width, height].map(i => +i ? `${~~i}px` : i)
    div.style.background = background
    div.innerHTML = text
    
    return div
}

function Display(){
    document.getElementById("Switch").style.display = "block"

    Container = document.getElementById("Container")

    const margin = 10,
        width = ~~(Container.clientWidth/Cards.length)-margin
    let height = ~~(Container.clientHeight/20),
        bottom = 0

    for (const j of [Player, Dealer]){
        const name = CreateDiv(Container.clientWidth, width/3, j==Player ? "You" : "Dealer")
        name.style.top = `${bottom}px`
        Container.appendChild(name)
        bottom+=name.clientHeight

        for (const hand of j){
            let calc
            if (j==Player){
                calc = CreateDiv("fit-content", "fit-content", "Calculate")
                calc.id = "Calculate"
                ;[calc.style.textAlign, calc.style.top, calc.style.paddingBottom] = ["left", `${bottom}px`, "10px"]
                ;[calc.Hand, calc.onclick] = [hand, e => CalculateEvent(e)]
                Container.appendChild(calc)
                bottom+=calc.clientHeight
            }

            for (let i=0;i<Cards.length;i++){
                const body = CreateDiv(width, height, "0", "white"),
                    header = CreateDiv(width, height, Cards[i], "grey")
                body.style.top = `${height}px`
                ;[header.id, body.id] = ["Face", "Count"]
            
                const wrapper = CreateDiv(width, height*2)
                ;[wrapper.style.top, wrapper.style.left, wrapper.style.border] = [`${bottom}px`, `${i*(width+margin)}px`, "2px solid white"]
                wrapper.classList.add("Card")
                ;[wrapper.Hand, wrapper.Display] = [hand, calc]
                wrapper.onmousedown = e => CardEvent(e)
    
                wrapper.appendChild(header)
                wrapper.appendChild(body)
                Container.appendChild(wrapper)
            }
    
            const last = [...Container.childNodes].at(-1)
            bottom = parseInt(last.style.top, 0)+last.clientHeight+10
        }
        bottom+=30
    }
    
    height = ~~(Container.clientHeight-bottom)*2/3
    const box = CreateDiv(height*4, height, "", "white")
    Container.appendChild(box)
    box.classList.add("Centered")
    box.id = "Move"
    box.style.top = `${Container.clientHeight-box.clientHeight}px`
}

function CardEvent(event){
    if (![0, 2].includes(event.button))
        return
    
    const parent = event.target.closest(".Card"),
        count = parent.querySelector("#Count"),
        face = (i => +i || i)(parent.querySelector("#Face").innerHTML)
    let change = !(~~event.button)*2-1

    if (parent.Hand==Dealer[0]){
        ;[...Container.childNodes].filter(i => i.Hand==Dealer[0]).forEach(i => i.querySelector("#Count").innerHTML = 0)
        Dealer[0].splice(0, Dealer[0].length)
    }

    change>0 ? parent.Hand.push(face) : parent.Hand.includes(face) ? parent.Hand.splice(parent.Hand.indexOf(face), 1) : 0
    count.innerHTML = Math.max(0, +count.innerHTML+change)
    parent.Display.innerHTML = `Calculate${` (${parent.Hand})`.repeat(!!parent.Hand.length)}`
}

function CalculateEvent(event) {
    document.getElementById("Move").innerHTML = GetMove(event.target.Hand)   
}