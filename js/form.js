import { createCard } from "./card.js";

export function handleFormSubmit(e) {
    e.preventDefault();

    // get data from user
    const destination = getInputValue("input-destination-name");
    const location = getInputValue("input-location");
    const description = getInputValue("input-description");

    // reset the form input fields
    document.getElementById("destination_form").reset();

    // generate card with user input
    const newCard = createCard(destination, location, description);
    // append the card into container
    document.getElementById("cards_container").prepend(newCard);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}