const PhotoOfTheDayComponent = (photos) => {

    return `
        <div class="photoOfTheDayImage">
            <img src="${photos.url}" alt="${photos.title}">
        <div>
     `   

}

export default PhotoOfTheDayComponent