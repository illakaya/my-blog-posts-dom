// Grab all the references to the DOM elements
const blogPost = document.querySelector('#blog');
const backBtn = document.querySelector(`#back`);

// we need to store each blog post as an object in an array
let blogStorageObject = [];

// create a function that will render the stored blog posts on to the page
function renderBlogPosts() {
    // retrieve information store in java array
    const storedBlogPosts = blogStorageObject;
    // if the array is empty
    if (!storedBlogPosts) {
        // end the function
        return;
    }
    // ensures that the div is empty first
    blogPost.textcontent = ``;
    // for the number of objects in the array
    for (let i = 0; i < storedBlogPosts.length; i++) {
        // extract each of the properties from the object and store into a local js var
        const title = storedBlogPosts[i].title;
        const content = storedBlogPosts[i].content;
        const user = storedBlogPosts[i].username;
        // create elements for respective piece of infomation for each blog post
        const div = document.createElement('div');      
        const h2 = document.createElement(`h2`);
        const p = document.createElement('p');
        const span = document.createElement(`span`);
        // add text to the corresponding elements
        h2.textContent = title;
        p.textContent = content;
        span.textContent = `Posted by: ` + user;
        // append the created elements and loads the blog posts into the div blog that is on the html file
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(span);
        blogPost.appendChild(div);
    }
};

// create a initialising function
function init() {
    // retrieves data from local storage
    const storeBlogs = JSON.parse(localStorage.getItem(`blogPosts`));
    // if there is data stored
    if(storeBlogs) {
        // then assign the value to js storage
        blogStorageObject = storeBlogs;
    }
    // call the render function
    renderBlogPosts();
}

// Waits for the submit button to be clicked
backBtn.addEventListener(`click`, function (event) {
    // prevent the page from refreshing  
    event.preventDefault();
    // replaces the current page with the form page.
    window.location.assign(`index.html`);
})

// call the initialisation function
init();