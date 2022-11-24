const {promises: Fs} = require('fs')

const doorNumber = sessionStorage.getItem("dayClicked");
console.log(doorNumber)

const setUp = async () => {
    document.title = "Moglaf | Door " + doorNumber;
    document.getElementById("day-door-heading").innerHTML = "Tag " + doorNumber;

    // Test for file availability
    const dcc = document.getElementById("day-content-container")

    // Testing if image or mp3
    if (await isFile("media/days/tag" + doorNumber + ".jpg")) {
        const content = document.createElement("img");
        content.id = "day-door-image";
        content.alt = "Bild von Mogli";
        content.src = "media/days/tag" + doorNumber + ".jpg";
        dcc.replaceChildren(content)
    } else if (await isFile("media/days/tag" + doorNumber + ".mp3")) {
        const content = document.createElement("audio");
        content.id = "day-door-audio";
        content.controls = true
        content.src = "media/days/tag" + doorNumber + ".mp3";
        content.innerHTML = "Audio nicht verfügbar."
        dcc.replaceChildren(content)
    } else {
        const el = document.createElement("div")
        el.innerHTML = "Ein Fehler ist aufgetreten";
        dcc.replaceChildren(el)
    }
}

async function isFile(path) {
    const stats = await Fs.stat(path);

    return stats.isFile();
}

async function checkImage(url) {
    const res = await fetch(url);
    const buff = await res.blob();

    return buff.type.endsWith('.jpg')
}

setUp()