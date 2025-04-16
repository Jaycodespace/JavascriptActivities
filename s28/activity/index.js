const postIdInput = document.getElementById('postId');
const fetchButton = document.getElementById('fetchButton');
const postTitle = document.getElementById('postTitle');
const postBody = document.getElementById('postBody');
const postContainer = document.getElementById('postContainer');
const errorMessage = document.getElementById('errorMessage');

fetchButton.disabled = true;


postIdInput.addEventListener('input', () => {
  fetchButton.disabled = !postIdInput.value.trim();
});

fetchButton.addEventListener('click', () => {
  const postId = postIdInput.value.trim();
  

  postTitle.textContent = '';
  postBody.textContent = '';
  errorMessage.textContent = '';
  

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Post not found');
      }
      return response.json();
    })
    .then(post => {
      postTitle.textContent = post.title;
      postBody.textContent = post.body;
      postContainer.style.display = 'block';
      errorMessage.textContent = '';
    })
    .catch(error => {
      errorMessage.textContent = 'Post not found or invalid ID.';
      postContainer.style.display = 'none'; 
    });
  

  postIdInput.value = '';
  fetchButton.disabled = true;
});
