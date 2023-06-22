export {createCard, handleEditBtn, handleDoneBtn, handleDeleteBtn}

function createCard(destination, location, photoUrl, description) {
    const newCard = document.createElement("div")
    photoUrl = photoUrl ? photoUrl : "https://images7.alphacoders.com/853/thumbbig-853456.webp"

    newCard.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src=${photoUrl} class="card-img-top photo-url" alt=${destination}>
        <div class="card-body">
            <h5 class="card-title destination">
                <span class="material-symbols-outlined icon icon-destination">push_pin</span>
                <span class="editable text-destination" style="display:inline-block;">${destination}</span>
            </h5>
            <p class="card-text show location">
                <span class="material-symbols-outlined icon icon-location">pin_drop</span>
                <span class="editable text-location" style="display:inline-block;">${location}</span>
            </p>
            <p class="card-text show description">
                <span class="material-symbols-outlined icon icon-description">description</span>
                <span class="editable text-description" style="display:inline-block;">${description}</span>
            </p>
            <a href="#" class="btn btn-warning material-symbols-outlined edit-btn">edit</a>
            <a href="#" class="btn btn-danger material-symbols-outlined delete-btn">delete</a>
        </div>
    </div>
    `
    // location ? {} : newCard.querySelector(".location").style.display = "none"
    // description ? {} : newCard.querySelector(".description").style.display = "none"

    newCard.querySelectorAll(".show").forEach(element => {
        element.querySelector(".editable").textContent ? {} : element.style.display = "none"
    });

    return newCard
}

function handleEditBtn(e) {
    // get the selected card element
    const card = e.target.closest(".card")

    // show all the elements inside the card for editing
    card.querySelectorAll(".show").forEach(element => {
        element.style.display = "block"
    });

    // make text lines editable
    card.querySelectorAll(".editable").forEach(element => {
        element.setAttribute("contentEditable", "true")
    });

    // add photo update onclick event
    card.querySelector(".photo-url").onclick = (e) => {
        const input = prompt("enter image url:")
        if (input) {
            e.target.setAttribute("src", input)
        }
    }
    
    // replace Edit button with Done button
    const doneBtn = document.createElement("a")
    doneBtn.setAttribute("href", "#")
    doneBtn.setAttribute("class", "btn btn-success done-btn material-symbols-outlined")
    doneBtn.innerHTML = "done"
    e.target.parentElement.replaceChild(doneBtn, e.target)
}

function handleDoneBtn(e) {
    // get the selected card element
    const card = e.target.closest(".card")

    // // Make text lines noneditable
    // card.querySelectorAll(".show").forEach(element => {
    //     element.querySelector(".editable").textContent ? {} : element.style.display = "none"
    // });

    // // undo photo's onclick event
    // card.querySelector(".photo-url").onclick = () => {}
    // card.querySelectorAll(".editable").forEach(element => {
    //     element.setAttribute("contentEditable", "false")
    // });

    // // replace Done button with Edit button
    // const editBtn = document.createElement("a")
    // editBtn.setAttribute("href", "#")
    // editBtn.setAttribute("class", "btn btn-warning material-symbols-outlined edit-btn")
    // editBtn.textContent = "edit"
    // e.target.parentElement.replaceChild(editBtn, e.target)

    // replace the above code with below ones
    // get input from user and replace the old card with newCard utilizing createCard()
    const destination = card.querySelector(".text-destination").textContent;
    const location = card.querySelector(".text-location").textContent;
    const photoUrl = card.querySelector(".photo-url").getAttribute("src");
    const description = card.querySelector(".text-description").textContent;

    const newCard = createCard(destination, location, photoUrl, description)

    card.replaceWith(newCard)
}

function handleDeleteBtn(e) {
    e.target.closest(".card").remove()
}