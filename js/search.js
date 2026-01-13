const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    post.style.display = text.includes(value) ? "block" : "none";
  });
});
