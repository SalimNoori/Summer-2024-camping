function saveComment() {
    const commentText = document.getElementById('comment-text').value;
    if (commentText.trim() === '') {
        alert('Please enter a comment.');
        return;
    }

    const commentsList = document.getElementById('comments-list');
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = commentText;

    commentsList.appendChild(commentDiv);
    document.getElementById('comment-text').value = '';
}

