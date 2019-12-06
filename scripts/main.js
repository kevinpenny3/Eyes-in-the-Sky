import getPhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDayProvider.js";
import PhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDay.js";

getPhotoOfTheDay().then(
    () => PhotoOfTheDay()
)
