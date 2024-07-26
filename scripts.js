// Function to toggle like state
function toggleLike(button) {
    const likeButton = button;
    const likeIcon = likeButton.querySelector('.like-icon');
    const likeCount = likeButton.querySelector('.like-count');
    
    if (likeButton.classList.contains('liked')) {
        likeButton.classList.remove('liked');
        likeIcon.style.color = '#555'; // Default color
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
        likeButton.classList.add('liked');
        likeIcon.style.color = '#ff5722'; // Jingga
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
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
    const commentsSection = button.closest('.comments-section');
    const commentInput = commentsSection.querySelector('.comment-input');
    const commentsList = commentsSection.querySelector('.comments-list');
    const uploadImage = commentsSection.querySelector('.upload-image').files[0];

    if (commentInput.value.trim() !== '') {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        
        if (uploadImage) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(uploadImage);
            img.style.width = '100%';
            img.style.height = 'auto';
            commentDiv.appendChild(img);
        }
        
        const text = document.createElement('p');
        text.textContent = commentInput.value;
        commentDiv.appendChild(text);
        
        commentsList.appendChild(commentDiv);
        commentInput.value = ''; // Clear the input
        commentsSection.querySelector('.upload-image').value = ''; // Clear the file input
    }
}
