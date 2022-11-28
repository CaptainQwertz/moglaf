// const {promises: Fs} = require('fs')

const doorNumber = sessionStorage.getItem("dayClicked");

const setUp = () => {
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

async function checkImage(url) {
    const res = await fetch(url);
    const buff = await res.blob();

    return buff.type.endsWith('.jpg')
}


setUp()