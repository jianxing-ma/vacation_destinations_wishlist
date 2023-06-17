const vacationDestinationsList = {};

document.getElementById("btn-add-to-list").onclick = () => {
    var destination = getInputValue("input-destination-name");

    vacationDestinationsList[destination] = {
        destinationName: getInputValue("input-destination-name"),
        location: getInputValue("input-location"),
        photoUrl: getInputValue("input-photo-url"),
        description: getInputValue("input-description")
    };
}

console.log(vacationDestinationsList);

function getInputValue(id) {
    return document.getElementById(id).value;
}