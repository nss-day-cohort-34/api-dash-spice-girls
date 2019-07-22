const whereToPutPosts = document.querySelector(".allPosts")

const postsAsHTML = (post) => {
    return `<div class="onePost">
    <h2 class="post-number"> ${post.id} </h2>
    <br/>
    <h2 class="post-title">${post.title}</h2>
    <p class="post-body">${post.body}</p>
    </div>`
}


const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(posts => posts.json())
    .then(parsedPosts => {
        for (let i = 0; i < 20; i++) {
            const iteratedPosts = parsedPosts[i];
            whereToPutPosts.innerHTML += postsAsHTML(iteratedPosts)
        }
    })
}

getPosts();