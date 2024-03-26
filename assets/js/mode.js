// Grab all the necessary references to the DOM elements
const modeBtn = document.querySelector(`#light-mode`);
const bodyEl = document.querySelector(`body`);

// introduce a variable that will remember which mode the page was in
let pageMode = ``;

// Button is looking for the click event
modeBtn.addEventListener('click', function() {
    // Introduce variable to store what mode the website is in currently
    let mode = modeBtn.textContent;
    // if the page is current in light mode
    if (mode === '☀️') {
        // set page to dark mode
        bodyEl.classList.add(`dark`);
        // change text to a moon
        modeBtn.textContent = `🌙`;
        // set the stored value as moon
        mode = `🌙`;
    } else {
        // otherwise, set page to light mode
        bodyEl.classList.remove(`dark`);
        // change text to a sun
        modeBtn.textContent = `☀️`;
        // set the stored value as sun
        mode = `☀️`;
    }
    // puts stored value into the local storage
    pageMode = localStorage.setItem(`mode`, mode);
});

// initialisation function
function init() {
    // retrieve from the local storage the mode in which the user last preferred
    pageMode = localStorage.getItem(`mode`);
    // if the mode was last a sun for light mode
    if (pageMode === '☀️') {
        // remove the dark class
        bodyEl.classList.remove(`dark`);
        // if the mode was last a moon for dark mode
    } else if (pageMode === '🌙') {
        // add the dark class
        bodyEl.classList.add(`dark`);
        // change the text to a moon
        modeBtn.textContent = `🌙`;
    }
}

// call the function to run when we start the application
init();