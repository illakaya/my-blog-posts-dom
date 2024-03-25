// Grab all the references to the DOM elements
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
        // change text to moon
        modeBtn.textContent = `🌙`;
        mode = `🌙`;
    } else {
        // otherwise, set page to light mode
        bodyEl.classList.remove(`dark`);
        // change text to sun
        modeBtn.textContent = `☀️`;
        mode = `☀️`;
    }
    pageMode = localStorage.setItem(`mode`, mode);
});

function init() {
    pageMode = localStorage.getItem(`mode`);
    if (pageMode === '☀️') {
        bodyEl.classList.remove(`dark`);
    } else if (pageMode === '🌙') {
        bodyEl.classList.add(`dark`);
        modeBtn.textContent = `🌙`;
    }
}

init();