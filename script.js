const likeButton = document.querySelector('.like');
const likeCount = document.querySelector('.like-count');
const commentButton = document.querySelector('.comment');
const commentsContainer = document.querySelector('.comments');

likeButton.addEventListener('click', () => {
    let count = parseInt(likeCount.textContent);
    count++;
    likeCount.textContent = count;
    // Update the count on the server using AJAX or a real-time database

    // Example using a simple alert to simulate live update:
    alert('Like updated! New count: ' + count);
});

commentButton.addEventListener('click', () => {
    const comment = prompt('Enter your comment');
    if (comment) {
        const newComment = document.createElement('p');
        newComment.textContent = comment;
        commentsContainer.appendChild(newComment);

        // Send the comment to the server using AJAX or a real-time database

        // Example using a simple alert to simulate live update:
        alert('Comment added!');
    }
});
