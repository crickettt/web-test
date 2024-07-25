// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const commentBtn = document.querySelector('.post-comment-btn');
    const commentsList = document.querySelector('.comments-list');
    const textarea = document.querySelector('textarea');

    // Pastikan tombol benar-benar ada sebelum menambahkan event listener
    if (commentBtn) {
        commentBtn.addEventListener('click', () => {
            const commentText = textarea.value.trim();
            if (commentText) {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment-item');
                commentElement.textContent = `${commentText} - just now`;
                commentsList.appendChild(commentElement);
                textarea.value = '';
            }
        });
    }
});
