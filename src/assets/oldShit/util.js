// a function that takes the image code from a person object and creates a imgur url

export function getImageURL(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
