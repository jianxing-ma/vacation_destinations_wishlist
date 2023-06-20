const vacationDestinationsList = {};

document.getElementById("btn-add-to-list").onclick = () => {
    var destination = getInputValue("input-destination-name");

    vacationDestinationsList[destination] = {
        destinationName: getInputValue("input-destination-name"),
        location: getInputValue("input-location"),
        photoUrl: getInputValue("input-photo-url"),
        description: getInputValue("input-description")
    };
    
    document.getElementById("magenta").innerHTML = destination;
    document.getElementById("destination-image").src = getInputValue("input-photo-url");
}


function getInputValue(id) {
    return document.getElementById(id).value;
}