

const eventHub = document.querySelector(".container")


const addHoverOverButtons = () => {

     eventHub.addEventListener(
        "mouseover",
        (theMouseOverEvent) => {

            if (theMouseOverEvent.target.id.startsWith("cardId-")) {
                let id = event.target.id.split("-")[1]
                let div = document.querySelector(`.div-${id}`)
                div.classList.remove("hide")
            }
        })


    eventHub.addEventListener(
        "mouseout",
        (theMouseOutEvent) => {
            if (theMouseOutEvent.target.id.startsWith("cardId-")) {
                let id = event.target.id.split("-")[1]
                let div = document.querySelector(`.div-${id}`)
                div.classList.add("hide")
    }
})
}


export default addHoverOverButtons