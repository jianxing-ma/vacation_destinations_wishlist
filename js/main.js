import {createCard, handleEditBtn, handleDoneBtn, handleDeleteBtn} from "./card.js"

document.getElementById("btn-add-to-list").onclick = (e) => {
    e.preventDefault()

    const destination = getInputValue("input-destination-name")
    const location = getInputValue("input-location")
    const photoUrl = getInputValue("input-photo-url")
    const description = getInputValue("input-description")

    const newCard = createCard(destination, location, photoUrl, description)

    document.getElementById("cards_container").prepend(newCard)

    document.getElementById("destination_form").reset()
}

document.getElementById("cards_container").addEventListener("click", (e) => {
    e.target.classList.contains("delete-btn") ? handleDeleteBtn(e)
    : e.target.classList.contains("edit-btn") ? handleEditBtn(e)
    : e.target.classList.contains("done-btn") ? handleDoneBtn(e)
    : {}
})

function getInputValue(id) {
    return document.getElementById(id).value;
}