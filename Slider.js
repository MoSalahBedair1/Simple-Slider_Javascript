/* ==================== Ehanced Code ==================== */

let sliderImages = Array.from(document.querySelectorAll('.slider-container img')),

    slidesCount = sliderImages.length,

    currentSlide = 1,

    slideNumberElement = document.getElementById('slide-number'),

    nextButton = document.getElementById('next'),

    prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement('ul');

paginationElement.setAttribute('id', 'pagination-ul');

for (let i = 1; i <= slidesCount; i++) {

let paginationItem = document.createElement('li');

paginationItem.setAttribute('data-index', i);

paginationItem.appendChild(document.createTextNode(i));

paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

let paginationCreatedUl = document.getElementById('pagination-ul');

let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

}

}

theChecker();

function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

    return false;

} else {

    currentSlide++;

    theChecker();

}

}

function prevSlide() {

if (prevButton.classList.contains('disabled')) {

    return false;

} else {

    currentSlide--;

    theChecker();

}

}

function theChecker() {

slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

removeAllActive();

sliderImages[currentSlide - 1].classList.add('active');

paginationCreatedUl.children[currentSlide - 1].classList.add('active');

if (currentSlide == 1) {

    prevButton.classList.add('disabled');

} else {

    prevButton.classList.remove('disabled');

}

if (currentSlide == slidesCount) {

    nextButton.classList.add('disabled');

} else {

    nextButton.classList.remove('disabled');

}

}

function removeAllActive() {

sliderImages.forEach(function (img) {

    img.classList.remove('active');

});

paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

});

}





/* ==================== Old Code ==================== */

/*

// Get Slider Items | Array.from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
var paginationItem = document.createElement('li');

  // Set Custom Attribute
paginationItem.setAttribute('data-index', i);

  // Set Item Content
paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

}

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

} else {

    currentSlide++;

    theChecker();

}

}

// Previous Slide Function
function prevSlide() {

if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

} else {

    currentSlide--;

    theChecker();

}

}

// Create The Checker Function
function theChecker() {

  // Set The Slide Number
slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

  // Remove All Active Classes
removeAllActive();

  // Set Active Class On Current Slide
sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Check if Current Slide is The First
if (currentSlide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

} else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');

}

  // Check if Current Slide is The Last
if (currentSlide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');

} else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');

}

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
sliderImages.forEach(function (img) {

    img.classList.remove('active');

});

  // Loop Through Pagination Bullets
paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

});

}

*/