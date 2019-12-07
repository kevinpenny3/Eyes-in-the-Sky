import getPhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDayProvider.js";
import PhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDay.js";
import getMarsRoverPhotos from "./SearchedPhotos/MarsPhotosDataProvide.js";
import MarsRoverPhoto from "./SearchedPhotos/MarsPhotos.js";


getPhotoOfTheDay().then(
    () => PhotoOfTheDay()
)
    
getMarsRoverPhotos().then(
    () => MarsRoverPhoto()
)
