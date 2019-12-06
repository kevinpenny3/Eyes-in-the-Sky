let photos = []

export const usePhotoOfTheDay = () => {
    return photos
}


export const getPhotoOfTheDay = () => {     
    return fetch("https://api.nasa.gov/planetary/apod?api_key=YvtyZR8Dyj3YwrvYreTtaAv4uBiWBGT0q6gHyHsF")
        .then(response => response.json())
        .then(
            parsedPhotos => {
                console.log(parsedPhotos) 
                photos = parsedPhotos
            }
        )
}

export default getPhotoOfTheDay