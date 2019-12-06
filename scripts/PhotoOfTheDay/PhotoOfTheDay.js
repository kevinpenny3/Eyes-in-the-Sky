import PhotoOfTheDayComponent from "./PhotoOfTheDayComponent.js";
import { usePhotoOfTheDay } from "./PhotoOfTheDayProvider.js";


const PhotoOfTheDay = () => {
    const contentElement = document.querySelector(".photoOfTheDaySection")
    const photosOfTheDay = usePhotoOfTheDay()
    console.log(photosOfTheDay, "here it is")

    contentElement.innerHTML += `${
        PhotoOfTheDayComponent(photosOfTheDay)
        }
    `
}
export default PhotoOfTheDay