// Grab all the references to the DOM elements
const blogPost = document.querySelector('#blog');
const backBtn = document.querySelector(`#back`);

// we need to store each blog post as an object in an array
let blogStorageObject = [];

function renderBlogPosts() {
    const storedBlogPosts = JSON.parse(localStorage.getItem(`blogPosts`));
    if (!storedBlogPosts) {
        return;
    }
    blogPost.textcontent = ``;
    for (let i = 0; i < storedBlogPosts.length; i++) {
        const post = storedBlogPosts[i];
        const title = storedBlogPosts[i].title;
        const content = storedBlogPosts[i].content;
        const user = storedBlogPosts[i].username;

        const div = document.createElement('div');
        // div.textContent = JSON.stringify(post);
        
        const h2 = document.createElement(`h2`);
        const p = document.createElement('p');
        const span = document.createElement(`span`);
        h2.textContent = title;
        p.textContent = content;
        span.textContent = `Posted by: ` + user;

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(span);
        blogPost.appendChild(div);
    }
};

function init() {
    const storeBlogs = JSON.parse(localStorage.getItem(`blogPosts`));
    if(storeBlogs !== null) {
        blogStorageObject = storeBlogs;
    }
    renderBlogPosts();
}

// Waits for the submit button to be clicked
backBtn.addEventListener(`click`, function (event) {
    // prevent the page from refreshing  
    event.preventDefault();
    // replaces the current page with the form page.
    window.location.assign(`index.html`);
})


init();