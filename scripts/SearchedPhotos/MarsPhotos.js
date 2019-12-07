import MarsRoverPhotosComponent from "./MarsPhotosComponent.js";
import { useMarsRoverPhotos } from "./MarsPhotosDataProvide.js";


const MarsRoverPhoto = () => {
    const contentElement = document.querySelector(".marsRoverPhotoSection")
    const MarsRoverPhotos = useMarsRoverPhotos()


    contentElement.innerHTML += 
            `
            ${
                MarsRoverPhotos.map(
                    (currentPhoto) => {
                        return MarsRoverPhotosComponent(currentPhoto)
                    }
                ).join("")
            }
            `
        }

    export default MarsRoverPhoto
