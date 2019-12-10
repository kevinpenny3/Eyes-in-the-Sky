const MarsRoverPhotosComponent = (photos) => {

    return `
        <section class="marsRoverCard">
            <div  class="buttonHover hide div-${photos.id}">
            <button id="btn__details" class="hoverButton ">Details</button>
            <button id="btn__addToFavorites" class="hoverButton ">Add to Favorites</button>
            </div>
            <img id="cardId-${photos.id}" class="marsRoverPhotosImage" src="${photos.img_src}" alt="Photo of Mars">
        </section>
     `   

}

export default MarsRoverPhotosComponent