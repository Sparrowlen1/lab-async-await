// Write your code here!
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    postList.innerHTML = "";

    posts.forEach(post => {
        // Create elements
        const li = document.createElement("li");
        const title = document.createElement("h1");
        const body = document.createElement("p");

        title.textContent = post.title;
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);
        postList.appendChild(li);
    });
}

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        // Call display function
        displayPosts(data);

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// Call the function
fetchPosts();