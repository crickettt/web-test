document.addEventListener('DOMContentLoaded', function () {
    const likeBtn = document.querySelector('.like-btn');
    const likeCount = document.querySelector('.like-count');
    const commentBtn = document.querySelector('.comment-btn');
    const shareBtn = document.querySelector('.share-btn');
    const commentInput = document.querySelector('.comment-input');
    const commentsList = document.querySelector('.comments-list');

    likeBtn.addEventListener('click', function () {
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = count + 1;
    });

    commentBtn.addEventListener('click', function () {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <img src="https://via.placeholder.com/30" alt="Profile Picture" class="comment-pic">
                <div class="comment-text">${commentText}</div>
            `;
            commentsList.appendChild(commentElement);
            commentInput.value = '';
        }
    });

    shareBtn.addEventListener('click', function () {
        alert('Post shared!');
    });
});
