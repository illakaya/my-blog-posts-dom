// Grab all the references to the DOM elements
const blogUsername = document.querySelector(`#username`);
const blogTitle = document.querySelector(`#title`);
const blogContent = document.querySelector(`#content`);
const submitBtn = document.querySelector(`#submit`);

// we need to store each blog post as an object in an array
let blogStorageObject = [];

function init() {
    const storeBlogs = JSON.parse(localStorage.getItem(`blogPosts`));
    if(storeBlogs !== null) {
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
        alert(`Please ensure all inputs are filled`);
        return;
    }
    // push the blog object to the blogStorageObject array
    blogStorageObject.push({
        username: userTemp,
        title: titleTemp,
        content: contentTemp,
    });
    // update the local storage with new array
    updateBlogPosts();

    // replaces the current page with the blog page.
    window.location.assign(`blog.html`);
})

init();