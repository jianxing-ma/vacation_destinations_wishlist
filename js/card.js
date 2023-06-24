export { createCard, handleCardClick }

function createCard(destination, location, description) {
    const newCard = document.createElement("div")

    const imgBufferingUrl = "https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif";

    newCard.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src=${imgBufferingUrl} class="card-img-top photo-url" alt=${destination}>
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
    // if no text in input tag, hide the icon
    newCard.querySelectorAll(".show").forEach(element => {
        element.querySelector(".editable").textContent ? {} : element.style.display = "none"
    });

    // generting image according to destination from user input untilizing Unsplash API
    const unsplashAPIUrl = `https://api.unsplash.com/search/photos/?client_id=hz-ZNN_jBA2uRBE9Z3WYtER3ghhuV7KOL6L-BU_85Lk&query=${destination}`;

    fetch(unsplashAPIUrl)
    .then(response => response.json())
    .then(data => {
        const photos = data.results;
        if (photos.length === 0) {
            const imgPlaceHolderUrl = "https://images7.alphacoders.com/853/thumbbig-853456.webp";
            newCard.querySelector(".photo-url").setAttribute("src", imgPlaceHolderUrl);
        }else {
            const randIdx = Math.floor(Math.random() * photos.length);
            const photoUrl = photos[randIdx].urls.small;
            newCard.querySelector(".photo-url").setAttribute("src", photoUrl);
        }
    });

    return newCard;
}

function handleCardClick(e) {
    e.target.classList.contains("delete-btn") ? handleDeleteBtn(e)
        : e.target.classList.contains("edit-btn") ? handleEditBtn(e)
        : e.target.classList.contains("done-btn") ? handleDoneBtn(e)
        : {};
}

function handleEditBtn(e) {
    // get the selected card element
    const card = e.target.closest(".card");

    // show all the elements inside the card for editing
    card.querySelectorAll(".show").forEach(element => {
        element.style.display = "block";
    });

    // make text lines editable
    card.querySelectorAll(".editable").forEach(element => {
        element.setAttribute("contentEditable", "true");
    });

    // add photo update onclick event
    card.querySelector(".photo-url").onclick = (e) => {
        const input = prompt("enter image url:");
        if (input) {
            e.target.setAttribute("src", input);
        }
    }
    
    // replace Edit button with Done button
    const doneBtn = document.createElement("a");
    doneBtn.setAttribute("href", "#");
    doneBtn.setAttribute("class", "btn btn-success done-btn material-symbols-outlined");
    doneBtn.innerHTML = "done";
    e.target.parentElement.replaceChild(doneBtn, e.target);
}

function handleDoneBtn(e) {
    // get the selected card element
    const card = e.target.closest(".card");

    const destination = card.querySelector(".text-destination").textContent;
    const location = card.querySelector(".text-location").textContent;
    //const photoUrl = card.querySelector(".photo-url").getAttribute("src");
    const description = card.querySelector(".text-description").textContent;

    const newCard = createCard(destination, location, description);

    card.replaceWith(newCard);
}

function handleDeleteBtn(e) {
    e.target.closest(".card").remove();
}

function generatePhotoUrl(userInput) {
    var result = null;

    // generting image according to destination from user input untilizing Unsplash API
    const unsplashAPIUrl = `https://api.unsplash.com/search/photos/?client_id=hz-ZNN_jBA2uRBE9Z3WYtER3ghhuV7KOL6L-BU_85Lk&query=${userInput}`;

    fetch(unsplashAPIUrl)
    .then(response => response.json())
    .then(data => {
        const photos = data.results;
        if (photos.length === 0) {
            result = "https://images7.alphacoders.com/853/thumbbig-853456.webp";
        }else {
            const randIdx = Math.floor(Math.random() * photos.length);
            result = photos[randIdx].urls.small;
        }
    });

    return result;
}