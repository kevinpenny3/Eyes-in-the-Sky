import getPhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDayProvider.js";
import PhotoOfTheDay from "./PhotoOfTheDay/PhotoOfTheDay.js";
import getMarsRoverPhotos from "./SearchedPhotos/MarsPhotosDataProvide.js";
import MarsRoverPhoto from "./SearchedPhotos/MarsPhotos.js";
import addHoverOverHighlights from "./roverPhotoHighlights/hoverOverPhotos.js";
import addHoverOverButtons from "./roverPhotoHighlights/hoverOverButtons.js";

getPhotoOfTheDay().then(
    () => PhotoOfTheDay()
)
    
getMarsRoverPhotos().then(
    () => MarsRoverPhoto()
)

addHoverOverButtons()
addHoverOverHighlights
