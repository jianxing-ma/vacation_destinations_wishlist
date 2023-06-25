import { handleCardClick } from "./card.js"
import { handleFormSubmit } from "./form.js";

document.getElementById("destination_form").addEventListener("submit", (e) => {
    handleFormSubmit(e);
});

document.getElementById("cards_container").addEventListener("click", (e) => {
    handleCardClick(e);
});