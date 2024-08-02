document.addEventListener('DOMContentLoaded', () => {
    // Sidebar navigation event listeners
    document.getElementById('home').addEventListener('click', () => alert('Home clicked'));
    document.getElementById('popular').addEventListener('click', () => alert('Popular clicked'));
    document.getElementById('all').addEventListener('click', () => alert('All clicked'));
    document.getElementById('top').addEventListener('click', () => alert('Top clicked'));

    // Post actions event listeners
    document.querySelectorAll('.upvote').forEach(upvoteButton => {
        upvoteButton.addEventListener('click', () => {
            const countElement = upvoteButton.querySelector('.count');
            let count = parseInt(countElement.textContent);
            count++;
            countElement.textContent = count;
        });
    });

    document.querySelectorAll('.downvote').forEach(downvoteButton => {
        downvoteButton.addEventListener('click', () => {
            const countElement = downvoteButton.querySelector('.count');
            let count = parseInt(countElement.textContent);
            count--;
            countElement.textContent = count;
        });
    });

    document.querySelectorAll('.comments').forEach(commentButton => {
        commentButton.addEventListener('click', () => {
            alert('Comments clicked');
        });
    });
});
