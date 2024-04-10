/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
const TESTING_URL = "https://upload.wikimedia.org/wikipedia/commons/3/36/Eucomis_kuiflelie._07-06-2023._%28d.j.b%29.jpg"
/*const photo_list = [
    {
        "title": "IMG_0039.jpeg",
        "iso": 100,
        "aperture": 6.3,
        "shutterSpeed": "1/250",
        "url": "sea_project_photos\\IMG_0039.jpeg"
    },
    {
        "title": "IMG_0040.jpeg",
        "iso": 100,
        "aperture": 7.1,
        "shutterSpeed": "1/250",
        "url": "sea_project_photos\\IMG_0040.jpeg"
    },
    {
        "title": "IMG_0042.jpeg",
        "iso": 160,
        "aperture": 5.6,
        "shutterSpeed": "1/160",
        "url": "sea_project_photos\\IMG_0042.jpeg"
    },
    {
        "title": "IMG_0043.jpeg",
        "iso": 160,
        "aperture": 5.7,
        "shutterSpeed": "1/160",
        "url": "sea_project_photos\\IMG_0043.jpeg"
    },
    {
        "title": "IMG_0063.jpeg",
        "iso": 100,
        "aperture": 14,
        "shutterSpeed": "1/320",
        "url": "sea_project_photos\\IMG_0063.jpeg"
    },
    {
        "title": "IMG_0064.jpeg",
        "iso": 400,
        "aperture": 3.5,
        "shutterSpeed": "1/80",
        "url": "sea_project_photos\\IMG_0064.jpeg"
    },
    {
        "title": "IMG_0065.jpeg",
        "iso": 400,
        "aperture": 3.5,
        "shutterSpeed": "1/3",
        "url": "sea_project_photos\\IMG_0065.jpeg"
    },
    {
        "title": "IMG_0066.jpeg",
        "iso": 100,
        "aperture": 3.5,
        "shutterSpeed": "1/13",
        "url": "sea_project_photos\\IMG_0066.jpeg"
    },
    {
        "title": "IMG_0067.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/200",
        "url": "sea_project_photos\\IMG_0067.jpeg"
    },
    {
        "title": "IMG_0068.jpeg",
        "iso": 250,
        "aperture": 1.4,
        "shutterSpeed": "1/2500",
        "url": "sea_project_photos\\IMG_0068.jpeg"
    },
    {
        "title": "IMG_0069.jpeg",
        "iso": 250,
        "aperture": 2,
        "shutterSpeed": "1/1600",
        "url": "sea_project_photos\\IMG_0069.jpeg"
    },
    {
        "title": "IMG_0070.jpeg",
        "iso": 250,
        "aperture": 2,
        "shutterSpeed": "1/1600",
        "url": "sea_project_photos\\IMG_0070.jpeg"
    },
    {
        "title": "IMG_0071.jpeg",
        "iso": 500,
        "aperture": 1.8,
        "shutterSpeed": "1/800",
        "url": "sea_project_photos\\IMG_0071.jpeg"
    },
    {
        "title": "IMG_0072.jpeg",
        "iso": 250,
        "aperture": 1.8,
        "shutterSpeed": "1/640",
        "url": "sea_project_photos\\IMG_0072.jpeg"
    },
    {
        "title": "IMG_0073.jpeg",
        "iso": 400,
        "aperture": 7.1,
        "shutterSpeed": "1/1000",
        "url": "sea_project_photos\\IMG_0073.jpeg"
    },
    {
        "title": "IMG_0074.jpeg",
        "iso": 400,
        "aperture": 7.1,
        "shutterSpeed": "1/1000",
        "url": "sea_project_photos\\IMG_0074.jpeg"
    },
    {
        "title": "IMG_0076.jpeg",
        "iso": 100,
        "aperture": 1.4,
        "shutterSpeed": "1/1600",
        "url": "sea_project_photos\\IMG_0076.jpeg"
    },
    {
        "title": "IMG_0077.jpeg",
        "iso": 160,
        "aperture": 1.4,
        "shutterSpeed": "1/800",
        "url": "sea_project_photos\\IMG_0077.jpeg"
    },
    {
        "title": "IMG_0078.jpeg",
        "iso": 200,
        "aperture": 5,
        "shutterSpeed": "1/800",
        "url": "sea_project_photos\\IMG_0078.jpeg"
    },
    {
        "title": "IMG_0079.jpeg",
        "iso": 400,
        "aperture": 18,
        "shutterSpeed": 25,
        "url": "sea_project_photos\\IMG_0079.jpeg"
    },
    {
        "title": "IMG_0201.jpeg",
        "iso": 100,
        "aperture": 1.8,
        "shutterSpeed": "1/2500",
        "url": "sea_project_photos\\IMG_0201.jpeg"
    },
    {
        "title": "IMG_0232.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/200",
        "url": "sea_project_photos\\IMG_0232.jpeg"
    },
    {
        "title": "IMG_0233.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/200",
        "url": "sea_project_photos\\IMG_0233.jpeg"
    },
    {
        "title": "IMG_0509.jpeg",
        "iso": 100,
        "aperture": 1.8,
        "shutterSpeed": "1/500",
        "url": "sea_project_photos\\IMG_0509.jpeg"
    },
    {
        "title": "IMG_0510.jpeg",
        "iso": 160,
        "aperture": 1.8,
        "shutterSpeed": "1/500",
        "url": "sea_project_photos\\IMG_0510.jpeg"
    },
    {
        "title": "IMG_0511.jpeg",
        "iso": 160,
        "aperture": 1.8,
        "shutterSpeed": "1/500",
        "url": "sea_project_photos\\IMG_0511.jpeg"
    },
    {
        "title": "IMG_0512.jpeg",
        "iso": 100,
        "aperture": 2.2,
        "shutterSpeed": "1/320",
        "url": "sea_project_photos\\IMG_0512.jpeg"
    },
    {
        "title": "IMG_0516.jpeg",
        "iso": 100,
        "aperture": 2.2,
        "shutterSpeed": "1/320",
        "url": "sea_project_photos\\IMG_0516.jpeg"
    },
    {
        "title": "IMG_1489.heic",
        "iso": 80,
        "aperture": 1.8,
        "shutterSpeed": "1/2591",
        "url": "sea_project_photos\\IMG_1489.heic"
    },
    {
        "title": "IMG_2565.jpeg",
        "iso": 32,
        "aperture": 2.8,
        "shutterSpeed": "1/99",
        "url": "sea_project_photos\\IMG_2565.jpeg"
    },
    {
        "title": "IMG_4284.jpeg",
        "iso": 100,
        "aperture": 1.4,
        "shutterSpeed": "1/2500",
        "url": "sea_project_photos\\IMG_4284.jpeg"
    },
    {
        "title": "IMG_5495.jpg",
        "iso": 500,
        "aperture": 5.6,
        "shutterSpeed": "1/320",
        "url": "sea_project_photos\\IMG_5495.jpg"
    },
    {
        "title": "IMG_5845.jpeg",
        "iso": 500,
        "aperture": 1.8,
        "shutterSpeed": "1/800",
        "url": "sea_project_photos\\IMG_5845.jpeg"
    },
    {
        "title": "IMG_6283.jpeg",
        "iso": 160,
        "aperture": 1.8,
        "shutterSpeed": "1/500",
        "url": "sea_project_photos\\IMG_6283.jpeg"
    },
    {
        "title": "IMG_9817.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/160",
        "url": "sea_project_photos\\IMG_9817.jpeg"
    },
    {
        "title": "IMG_9820.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/160",
        "url": "sea_project_photos\\IMG_9820.jpeg"
    }
]
*/

const photo_list = [
    {
        "title": "IMG_0039.jpeg",
        "iso": 100,
        "aperture": 6.3,
        "shutterSpeed": "1/250",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0039.jpeg"
    },
    {
        "title": "IMG_0040.jpeg",
        "iso": 100,
        "aperture": 7.1,
        "shutterSpeed": "1/250",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0040.jpeg"
    },
    {
        "title": "IMG_0042.jpeg",
        "iso": 160,
        "aperture": 5.6,
        "shutterSpeed": "1/160",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0042.jpeg"

    },
    {
        "title": "IMG_0043.jpeg",
        "iso": 160,
        "aperture": 5.7,
        "shutterSpeed": "1/160",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0043.jpeg"

    },
    {
        "title": "IMG_0063.jpeg",
        "iso": 100,
        "aperture": 14,
        "shutterSpeed": "1/320",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0063.jpeg"

    },
    {
        "title": "IMG_0064.jpeg",
        "iso": 400,
        "aperture": 3.5,
        "shutterSpeed": "1/80",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0064.jpeg"
    },
    {
        "title": "IMG_0065.jpeg",
        "iso": 400,
        "aperture": 3.5,
        "shutterSpeed": "1/3",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0065.jpeg"

    },
    {
        "title": "IMG_0066.jpeg",
        "iso": 100,
        "aperture": 3.5,
        "shutterSpeed": "1/13",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0066.jpeg"

    },
    {
        "title": "IMG_0067.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/200",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0067.jpeg"
    },
    {
        "title": "IMG_0068.jpeg",
        "iso": 250,
        "aperture": 1.4,
        "shutterSpeed": "1/2500",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0068.jpeg"
    },
    {
        "title": "IMG_0069.jpeg",
        "iso": 250,
        "aperture": 2,
        "shutterSpeed": "1/1600",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0069.jpeg"
    },
    {
        "title": "IMG_0070.jpeg",
        "iso": 250,
        "aperture": 2,
        "shutterSpeed": "1/1600",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0070.jpeg"
    },
    {
        "title": "IMG_0071.jpeg",
        "iso": 500,
        "aperture": 1.8,
        "shutterSpeed": "1/800",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0071.jpeg"
    },
    {
        "title": "IMG_0072.jpeg",
        "iso": 250,
        "aperture": 1.8,
        "shutterSpeed": "1/640",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0072.jpeg"
    },
    {
        "title": "IMG_0073.jpeg",
        "iso": 400,
        "aperture": 7.1,
        "shutterSpeed": "1/1000",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0073.jpeg"
    },
    {
        "title": "IMG_0074.jpeg",
        "iso": 400,
        "aperture": 7.1,
        "shutterSpeed": "1/1000",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0074.jpeg"
    },
    {
        "title": "IMG_0076.jpeg",
        "iso": 100,
        "aperture": 1.4,
        "shutterSpeed": "1/1600",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0076.jpeg"
    },
    {
        "title": "IMG_0077.jpeg",
        "iso": 160,
        "aperture": 1.4,
        "shutterSpeed": "1/800",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0077.jpeg"
    },
    {
        "title": "IMG_0078.jpeg",
        "iso": 200,
        "aperture": 5,
        "shutterSpeed": "1/800",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0078.jpeg"
    },
    {
        "title": "IMG_0079.jpeg",
        "iso": 400,
        "aperture": 18,
        "shutterSpeed": 25,
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0079.jpeg"
    },
    {
        "title": "IMG_0201.jpeg",
        "iso": 100,
        "aperture": 1.8,
        "shutterSpeed": "1/2500",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0201.jpeg"
    },
    {
        "title": "IMG_0232.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/200",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0232.jpeg"
    },
    {
        "title": "IMG_0233.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/200",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0233.jpeg"
    },
    {
        "title": "IMG_0509.jpeg",
        "iso": 100,
        "aperture": 1.8,
        "shutterSpeed": "1/500",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0509.jpeg"
    },
    {
        "title": "IMG_0510.jpeg",
        "iso": 160,
        "aperture": 1.8,
        "shutterSpeed": "1/500",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0510.jpeg"
    },
    {
        "title": "IMG_0511.jpeg",
        "iso": 160,
        "aperture": 1.8,
        "shutterSpeed": "1/500",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0511.jpeg"
    },
    {
        "title": "IMG_0512.jpeg",
        "iso": 100,
        "aperture": 2.2,
        "shutterSpeed": "1/320",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0512.jpeg"
    },
    {
        "title": "IMG_0516.jpeg",
        "iso": 100,
        "aperture": 2.2,
        "shutterSpeed": "1/320",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_0516.jpeg"
    },
    {
        "title": "IMG_1489.heic",
        "iso": 80,
        "aperture": 1.8,
        "shutterSpeed": "1/2591",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_1489.jpeg"
    },
    {
        "title": "IMG_2565.jpeg",
        "iso": 32,
        "aperture": 2.8,
        "shutterSpeed": "1/99",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_2565.jpeg"
    },
    {
        "title": "IMG_4284.jpeg",
        "iso": 100,
        "aperture": 1.4,
        "shutterSpeed": "1/2500",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_4284.jpeg"
    },
    {
        "title": "IMG_5495.jpg",
        "iso": 500,
        "aperture": 5.6,
        "shutterSpeed": "1/320",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_5495.jpeg"
    },
    {
        "title": "IMG_5845.jpeg",
        "iso": 500,
        "aperture": 1.8,
        "shutterSpeed": "1/800",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_5845.jpeg"
    },
    {
        "title": "IMG_6283.jpeg",
        "iso": 160,
        "aperture": 1.8,
        "shutterSpeed": "1/500",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_6283.jpeg"
    },
    {
        "title": "IMG_9817.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/160",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_9817.jpeg"
    },
    {
        "title": "IMG_9820.jpeg",
        "iso": 100,
        "aperture": 5.6,
        "shutterSpeed": "1/160",
        "url": "https://github.com/itsfavio/sea_project_photos/blob/main/IMG_9820.jpeg"
    }
]
//let imageURLs = {jsonfile}
//This is an array of strings (TV show titles)
let titles = [
    "Fresh Prince of Bel Air",
    "Curb Your Enthusiasm",
    "East Los High",
    "Testing Photo"
];

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
 function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    /*for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        //let imageURL = imageURLs[i].fileName;
        //let name = imageURLs[i].name;
        if (i == 0) {
            imageURL = FRESH_PRINCE_URL;
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        } else if (i ==3){
            imageURL = TESTING_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }*/
}


document.addEventListener("DOMContentLoaded", function() {
    fetch('photos.json')
        .then(response => response.json())
        .then(data => showPhotos(photo_list));
});

function showPhotos(photos) {
    const container = document.getElementById("card-container");
    const template = document.querySelector(".card");

    photos.forEach(photo => {
        const card = template.cloneNode(true);
        card.style.display = "block";

        card.querySelector("h2").textContent = photo.title;
        card.querySelector("img").src = photo.url;
        card.querySelector("img").alt = 'Photo: ${photo.title}';

        const detailsList = card.querySelector("ul");
        detailsList.innerHTML = `
            <li>ISO: ${photo.iso}</li>
            <li>Aperture: ${photo.aperture}</li>
            <li>Shutter Speed: ${photo.shutterSpeed}</li>
        `;

        container.appendChild(card);
    });
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
//document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }
//
// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }
