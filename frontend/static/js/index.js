const handleDoorClick = (door, doorNumber) => {
    console.debug("Door with number " + doorNumber + " clicked!")
    if (isDateReached(doorNumber)) { // additionally check for date
        // console.log("Door " + doorNumber + " is available.")
        sessionStorage.setItem("dayClicked", doorNumber)
        window.open("/door", "_self")
    } else {
        alert("Dieses Türchen kannst du noch nicht öffnen! Komm am " + doorNumber + ".12. wieder!")
    }
    // check date again and check if door available
    // if true, open the specific door in this tab
    // if false, alert that door is not to be opened yet!
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

const doors = document.getElementsByClassName("advent-door");

for (let i = 0; i < doors.length; i++) {
    doors[i].addEventListener("click", () => handleDoorClick(doors[i], i+1))
    if (isDateReached(i + 1)) {
        doors[i].classList.add("available")
    }
}