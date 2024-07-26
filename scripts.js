// Function to toggle like state
function toggleLike(button) {
    // Like button is disabled, no action
}

// Function to toggle comment section visibility
function toggleComments(button) {
    const commentsSection = button.nextElementSibling;
    if (commentsSection.style.display === 'block') {
        commentsSection.style.display = 'none';
    } else {
        commentsSection.style.display = 'block';
    }
}

// Function to post a comment
function postComment(button) {
    // Comment button is disabled, no action
}
