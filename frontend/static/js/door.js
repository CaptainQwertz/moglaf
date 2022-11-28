const setDoorNumber = () => {
    if (sessionStorage.getItem("dayClicked") === null) {
        return Math.min(new Date().getDate(), 24);
    }
    return sessionStorage.getItem("dayClicked");
}

const setUp = () => {
    const doorNumber = setDoorNumber();

    document.title = "Moglaf | Door " + doorNumber;
    document.getElementById("day-door-heading").innerHTML = "Tag " + doorNumber;

    const dcc = document.getElementById("day-content-container")
    if (isDateReached()) {
        const img = document.createElement("img");
        img.id = "day-door-image";
        img.alt = "Bild von Mogli";
        img.src = "static/media/days/tag" + doorNumber + ".jpg";
        dcc.replaceChildren(img);
    } else {
        const warning = document.createElement("div")
        warning.id = "not-yet-warning"
        warning.innerHTML = "Dieses Türchen ist noch verschlossen. Komm am " + doorNumber + ".12. wieder, um dieses Mogli-Foto zu sehen!"
        dcc.replaceChildren(warning)
    }
}

const isDateReached = (doorNumber) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1

    console.debug("The current Date: " + day + "." + month)

    if (month === 11) {
        return false
    } else if (month === 12) {
        // only need to check for day here
        if (day < doorNumber) {
            return false;
        }
    }
    return true
}

setUp()