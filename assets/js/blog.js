// Grab the reference to the DOM element
const blogPost = document.querySelector('#blog');

function renderBlogPosts() {
    const storedBlogPosts = JSON.parse(localStorage.getItem(`blogPosts`));
    if (!storedBlogPosts) {
        return;
    }
    blogPost.textcontent = ``;
    for (let i = 0; i < storedBlogPosts.length; i++) {
        const post = storedBlogPosts[i];
        console.log(post);
        const div = document.createElement('div');
        div.textContent = JSON.stringify(post);
        blogPost.append(div);
    }
};

renderBlogPosts();