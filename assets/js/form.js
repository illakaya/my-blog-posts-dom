// Grab all the references to the DOM elements
const blogUsername = document.querySelector(`#username`);
const blogTitle = document.querySelector(`#title`);
const blogContent = document.querySelector(`#content`);
const submitBtn = document.querySelector(`#submit`);

// we need to store each blog post as an object in an array
let blogStorageObject = [];

// create a initialising function
function init() {
    // retrieves data from local storage
    const storeBlogs = JSON.parse(localStorage.getItem(`blogPosts`));
    // if there is data stored
    if(storeBlogs.length !== 0) {
        // then assign the value to js storage
        blogStorageObject = storeBlogs;
    }
}

// create a function that will store the blog posts
function updateBlogPosts() {
    // save the value of the array by stringifying it then storing it in local storage
    localStorage.setItem(`blogPosts`, JSON.stringify(blogStorageObject));
}
// Waits for the submit button to be clicked
submitBtn.addEventListener(`click`, function (event) {
    // prevent the page from refreshing  
    event.preventDefault();
    // store all input values into a variable and removing the beginning and ending white spaces
    const userTemp = blogUsername.value.trim();
    const titleTemp = blogTitle.value.trim();
    const contentTemp = blogContent.value.trim();
    // if any of the values are empty, go back to the start of the function
    if (userTemp === `` || titleTemp === `` || contentTemp === ``) {
        // alert the user that they have missed input(s)
        alert(`Please ensure all inputs are filled`);
        // end function
        return;
    }
    // push the blog object to the blogStorageObject array into the first position so that the latest blog post displays first
    blogStorageObject.unshift({
        username: userTemp,
        title: titleTemp,
        content: contentTemp,
    });
    // update the local storage with new array
    updateBlogPosts();
    // replaces the current page with the blog page.
    window.location.assign(`blog.html`);
})

// call the initialisation function
init();