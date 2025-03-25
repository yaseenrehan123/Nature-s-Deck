import { plantDetails } from '../data/plantDetailsData.js';

// Function to get the query parameter from URL
function getPlantNameFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('name'); // Extract "name" parameter
}

// Function to create <li> elements from an array
function createListItems(array, container) {
    //container.innerHTML = ""; // Clear previous content
    array.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        container.appendChild(li);
    });
}

// Function to display plant details
function displayPlantDetails() {
    const plantName = getPlantNameFromURL();
    const plant = plantDetails.find(p => p.name === plantName);

    if (!plant) {
        document.querySelector(".plant-details-container").innerHTML = "<h1>Plant not found</h1>";
        return;
    }

    // Set plant name
    document.querySelector(".plant-name").textContent = plant.name;

    // Populate characteristics, region, cultivation, and uses
    createListItems(plant.characteristics, document.querySelector(".characteristics"));
    createListItems(plant.region, document.querySelector(".region"));
    createListItems(plant.cultivation, document.querySelector(".cultivation-guide"));
    createListItems(plant.uses, document.querySelector(".uses"));

    // Generate images dynamically
    const imagesContainer = document.querySelector(".plant-images-container");
    imagesContainer.innerHTML = ""; // Clear existing images
    plant.imgSrc.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = plant.name + " image";
        img.classList.add("plant-img");
        img.loading = 'lazy';
        imagesContainer.appendChild(img);
    });
}

// Call the function to populate the page
displayPlantDetails();