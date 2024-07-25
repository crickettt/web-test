document.addEventListener('DOMContentLoaded', function () {
    const likeBtn = document.querySelector('.like-btn');
    const likeCount = document.querySelector('.like-count');

    likeBtn.addEventListener('click', function () {
        let count = parseInt(likeCount.textContent);
        likeCount.textContent = count + 1;
    });
});
