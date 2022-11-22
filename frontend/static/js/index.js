const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard") },
        { path: "/posts", view: () => console.log("Viewing Posts") },
        { path: "/settings", view: () => console.log("Viewing Settings") }
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    console.log(potentialMatches);
};

document.addEventListener("DOMContentLoaded", () => router());

const makeDoorsAvailable = () => {
    // check date and make all doors up until that date available
}

const handleDoorClick = (door, doorNumber) => {
    console.debug("Door with number " + doorNumber + " clicked!")
    if (door.classList.contains("available")) { // additionally check for date
        console.log("Door " + doorNumber + " is available.")
    } else {
        alert("Dieses Türchen kannst du noch nicht öffnen!")
    }
    // check date again and check if door available
    // if true, open the specific door in this tab
    // if false, alert that door is not to be opened yet!
}

const doors = document.getElementsByClassName("advent-door");

for (let i = 0; i < doors.length; i++) {
    doors[i].addEventListener("click", () => handleDoorClick(doors[i], i+1))
}