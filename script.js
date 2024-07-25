document.addEventListener('DOMContentLoaded', function () {
    const likeBtn = document.querySelector('.like-btn');
    const likeCount = document.querySelector('.like-count');
    const addCommentBtn = document.querySelector('.add-comment-btn');
    const commentInput = document.querySelector('.comment-input');
    const commentsList = document.querySelector('.comments-list');

    // Load comments from local storage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <img src="https://via.placeholder.com/30" alt="Profile Picture" class="comment-pic">
                <div class="comment-text">${comment}</div>
            `;
            commentsList.appendChild(commentElement);
        });
    }

    // Save comments to local storage
    function saveComment(comment) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    // Load comments on page load
    loadComments();

    likeBtn.addEventListener('click', function () {
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = count + 1;
    });

    addCommentBtn.addEventListener('click', function () {
        const commentText = commentInput.value.trim();
        if (commentText) {
            saveComment(commentText);
            loadComments();
            commentInput.value = '';
        }
    });
});
