const likeButton = document.querySelector('.like');
const commentButton = document.querySelector('.comment');
const commentsContainer = document.querySelector('.comments');

likeButton.addEventListener('click', () => {
    // Logika untuk menghitung dan menampilkan jumlah like
    alert('Like added!');
});

commentButton.addEventListener('click', () => {
    const comment = prompt('Enter your comment');
    if (comment) {
        const newComment = document.createElement('p');
        newComment.textContent = comment;
        commentsContainer.appendChild(newComment);
    }
});
