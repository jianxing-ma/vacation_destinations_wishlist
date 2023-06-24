import { createCard } from "./card.js";

export function handleFormSubmit(e) {
    e.preventDefault();

    const destination = getInputValue("input-destination-name");
    const location = getInputValue("input-location");
    const photoUrl = getInputValue("input-photo-url");
    const description = getInputValue("input-description");

    const newCard = createCard(destination, location, photoUrl, description);

    document.getElementById("cards_container").prepend(newCard);

    document.getElementById("destination_form").reset();
}

function getInputValue(id) {
    return document.getElementById(id).value;
}