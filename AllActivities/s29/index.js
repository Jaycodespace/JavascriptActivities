// console.log("Hello World");

// [SECTION] fetch method
// allows us to get, post, update or even delete data in a server.

// Get method - retrieve data from another server using the fetch method.
// url is a representative address of accessing a resource/data in another machine (servers)
fetch('https://jsonplaceholder.typicode.com/posts')
// allow us to process the data we retrieve using fetch in another function
.then(function(response){
	// to parse the incoming data as a proper JS object that we can further process.
	return response.json()
})
// to do something with the processed server response.
.then(function(data){ // This runs later, after data is fetched
	// console.log(data)
	showPosts(data); 
})

// showPosts("Hello");

// showPosts this will create html elements using our fetched data.
const showPosts = (posts) =>
{
	// console.log(posts)

	// Add each post as a string
	let postEntries = '';

	posts.forEach(function(post){
		// console.log(post);

		postEntries += `
			<div id="post-${post.id}">
				<h3 id="post-title-${post.id}">${post.title}</h3>
				<p id="post-body-${post.id}">${post.body}</p>
				<button onclick="edit('${post.id}')">Edit</button>
				<button onclick="deletePost('${post.id}')">Delete</button>
			</div>
		`;
	});

	// console.log(postEntries);

	// we can add html element to another element as string by updating it using innerHTML property.
	document.querySelector('#div-post-entries').innerHTML = postEntries;

}

// Add data to our server
document.querySelector("#form-add-post").addEventListener('submit', function(e){
	console.log(e)

	// Prevent the default behavior of the form to refresh the page.
	e.preventDefault();

	// console.log("Hello! The post has been added!");

	// capture the input elements
	let titleInput = document.querySelector("#txt-title");
	let bodyInput = document.querySelector("#txt-body");

	// check if the value property captures the current value of an input element.
	// console.log(titleInput.value);
	// console.log(bodyInput.value);

	// fetch("url", "{options}")
		// options contains other details to be send in the server

	fetch('https://jsonplaceholder.typicode.com/posts', {
		// method: HTTP methods
		method: "POST",
		// This contains the main content that we want to send to our server.
		body: JSON.stringify({
			title: titleInput.value,
			body: bodyInput.value,
			userId: 1
		}),
		// contains other details that we need to send to our database.
		headers: {'Content-Type': "application/json"}
	})
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		console.log(data);

		alert('Successfull added.')

		// clears the input element upon submission
		titleInput.value = null;
		bodyInput.value = null;
	})
})

const edit = function(id){
	// This variable will contain the content of the title of the post
	let title = document.querySelector(`#post-title-${id}`).innerHTML;

	// This variable will contain the content of the body of the post
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	// console.log(body);
	// console.log(title);

	document.querySelector('#txt-edit-id').value = id;
	document.querySelector('#txt-edit-title').value = title;
	document.querySelector('#txt-edit-body').value = body;

	// To make the update button clickable:
	document.querySelector('#btn-submit-update').removeAttribute('disabled');

}




//----------------------------------------------------------------------------------------------------------------------//

//EDIT POST
document.querySelector("#form-edit-post").addEventListener('submit', function(e) {
    e.preventDefault(); 

    const id = document.querySelector("#txt-edit-id").value;
    const titleInput = document.querySelector("#txt-edit-title").value;
    const bodyInput = document.querySelector("#txt-edit-body").value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            id: id,
            title: titleInput,
            body: bodyInput,
            userId: 1 
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        //alert for confirming
        alert("Successfully updated.");


        document.querySelector('#txt-edit-id').value = '';
        document.querySelector('#txt-edit-title').value = '';
        document.querySelector('#txt-edit-body').value = '';

        
        document.querySelector('#btn-submit-update').setAttribute('disabled', true);

        
        document.querySelector(`#post-title-${id}`).innerHTML = titleInput;
        document.querySelector(`#post-body-${id}`).innerHTML = bodyInput;
    });
});

//DELETE POST
const deletePost = function(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    })
    .then(response => {
    	//alert for confirming
        document.querySelector(`#post-${id}`).remove();
        alert("Successfully deleted.");
    })

    //just for error catching...
    .catch(error => {
		console.error(error);
	})
};

//DELETE ALL
document.querySelector("#delete-all-btn").addEventListener('click',function(e) {
	document.querySelector('#div-post-entries').remove();
	//alert for confirming
	alert("Deleted all post");
})