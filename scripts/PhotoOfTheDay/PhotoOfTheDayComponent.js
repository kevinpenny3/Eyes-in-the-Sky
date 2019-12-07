const PhotoOfTheDayComponent = (photos) => {

    return `
        <div class="photoOfTheDayCard">
            <img  class="photoOfTheDayImage" src="${photos.url}" alt="${photos.title}">
        </div>
     `   

}

export default PhotoOfTheDayComponent