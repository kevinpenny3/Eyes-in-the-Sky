let photos = []

export const useMarsRoverPhotos = () => {
    return photos
}


export const getMarsRoverPhotos = () => {     
    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YvtyZR8Dyj3YwrvYreTtaAv4uBiWBGT0q6gHyHsF")
        .then(response => response.json())
        .then(
            parsedPhotos => {
                console.log(parsedPhotos) 
                photos = parsedPhotos.photos.slice()
            }
        )
}

export default getMarsRoverPhotos