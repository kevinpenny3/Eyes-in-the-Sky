

const eventHub = document.querySelector(".container")


const addHoverOverHighlights = () => {

     eventHub.addEventListener(
        "mouseover",
        (theMouseOverEvent) => {

            if (event.target.classList.contains("marsRoverPhotosImage")) {
                console.log("hovered over")
                event.target.classList.add("highlightRoverCard")
            }
        })


    eventHub.addEventListener(
        "mouseout",
        (theMouseOutEvent) => {
            if (event.target.classList.contains("marsRoverPhotosImage")) {
                console.log("hovered over")
                event.target.classList.remove("highlightRoverCard")
    }
})
}


export default addHoverOverHighlights